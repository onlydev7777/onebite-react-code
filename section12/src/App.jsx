import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";
import {useReducer, useRef, createContext} from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용"
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map(
          (item) => String(item.id) === String(action.data.id) ? action.data
              : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);
  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    });
  };
  //일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  };

  //일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id
    })
  };
  return (
      <>
        <button onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello")
        }}>
          일기 추가
        </button>
        <button onClick={() => {
          onUpdate(1, new Date().getTime(), 1, "Updated")
        }}>
          일기 수정
        </button>
        <button onClick={() => {
          onDelete(1);
        }}>
          일기 삭제
        </button>
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
  )
}

export default App
