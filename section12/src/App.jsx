import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js"
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  };

  return (
      <>
        <Header title={"Header"}
                leftChild={<Button text={"Left"}/>}
                rightChild={<Button text={"Right"}/>}
        />
        
        <Button
            onCLick={() => {
              console.log("123")
            }}
            type={"DEFAULT"}
            text={"123"}
        />
        <Button
            onCLick={() => {
              console.log("123")
            }}
            type={"POSITIVE"}
            text={"456"}
        />
        <Button
            onCLick={() => {
              console.log("123")
            }}
            type={"NEGATIVE"}
            text={"789"}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/diary/:id" element={<Diary/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </>
  )
}

export default App
