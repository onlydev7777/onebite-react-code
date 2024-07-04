import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const [curDiaryItem, setCurDiaryItem] = useState();
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  useEffect(() => {
    const currentDiaryItem = data.find(
        (item) => String(item.id) === String(params.id));

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", {replace: true});
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(params.id);
      nav("/", {replace: true});
    }
  }

  const onSubmit = (input) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId,
          input.content);
      nav("/", {replace: true});
    }
  }

  return (
      <div>
        <Header title={"일기 수정하기"}
                leftChild={<Button text={"< 뒤로가기"} onCLick={() => nav(-1)}/>}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}
                                    onCLick={() => onClickDelete()}/>}
        />
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
      </div>
  );
};

export default Edit;