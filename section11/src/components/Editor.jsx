import "./Editor.css";
import {useState, useRef, useContext} from "react";
import {TodoActionContext} from "../App.jsx";

const Editor = () => {
  const {onCreate} = useContext(TodoActionContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDownContent = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }
  return (
      <div className="Editor">
        <input value={content} onChange={onChangeContent}
               onKeyDown={onKeyDownContent}
               ref={contentRef}
               placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
      </div>
  );
};

export default Editor;
