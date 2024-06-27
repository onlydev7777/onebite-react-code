import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState, useRef, useEffect} from "react";
import Even from "./components/Even.jsx";

function App() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);
  //1. mount
  useEffect(() => {
    console.log("mount!")
  }, []);

  //2. update
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('update!')
  });

  //3. unmount >> Even Component

  const onClickButton = (value) => {
    setCount(count + value);
  }
  return (
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}/>
          {count % 2 === 0 ? <Even/> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
      </div>
  )
}

export default App
