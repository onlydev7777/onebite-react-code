import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo
} from "react";
import Exam from "./components/Exam.jsx";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "집에가기",
    date: new Date().getTime(),
  }
];

export const TodoStateContext = createContext();
export const TodoActionContext = createContext();

function reducer(todos, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...todos];
    case 'UPDATE':
      return todos.map((todo) =>
          todo.id === action.targetId
              ? {...todo, isDone: !todo.isDone}
              : todo
      );
    case 'DELETE':
      return todos.filter((todo) =>
          todo.id !== action.targetId
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    });
  }, []);

  const memorizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, []);

  return (
      <div className="App">
        <Header/>
        {/*Context.Provider에서 제공한 value 값이 달라진다면 useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 대상이 된다
        따라서 todos (상태처리 Context)와 actionContext(이벤트 Context)의 분리가 필요하다.*/}
        <TodoStateContext.Provider value={todos}>
          <TodoActionContext.Provider value={memorizedDispatch}>
            <Editor/>
            <List/>
          </TodoActionContext.Provider>
        </TodoStateContext.Provider>
      </div>
  )
}

export default App
