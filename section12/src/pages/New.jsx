import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

const New = () => {
  return (
      <div>
        <div>
          <Header title={"새 일기 쓰기"}
                  leftChild={<Button text={"< 뒤로가기"}/>}
          />
        </div>
        <div>
          <Editor/>
        </div>
      </div>
  );
}

export default New