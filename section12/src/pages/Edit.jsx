import {useParams} from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return (
      <div>{params.id} 번째 일기 수정</div>
  );
};

export default Edit;