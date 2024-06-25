import "./Main.css"

//JSX 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
//2. 숫자, 문자열, 배열 값만 렌더링 된다.
//   => object 도 안 된다.
//3. 모든 태그는 닫혀 있어야 한다.
//4. 최상위 태그는 반드시 하나여야만 한다.
//   => 최상위 태그를 빈칸으로 설정(<></>)하면 최상위 태그 없이 목록 태그들이 렌더링 된다.
const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  }
  return (
      <>{user.isLogin ? (<div className={"logout"}>로그아웃</div>) : (
          <div>로그인</div>)}
      </>
  );
};

export default Main;
