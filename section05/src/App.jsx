import './App.css'
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3
  }

  return (
      <>
        <Button {...buttonProps}>
          <Header/>
        </Button>

        <Button text={"카페"}/>
        <Button text={"블로그"}/>
      </>
  )
}

export default App
