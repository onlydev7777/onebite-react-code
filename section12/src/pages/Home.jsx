import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Diary from "./Diary.jsx";
import DiaryList from "../components/DisaryList.jsx";

const Home = () => {

  return (
      <div>
        <Header title={"2024년 7월"}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={">"}/>}/>
        <DiaryList/>
      </div>
  );
};

export default Home;