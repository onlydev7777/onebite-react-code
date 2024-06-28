import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useState, useRef, useReducer, useCallback, createContext} from "react";
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

export const TodoContext = createContext();

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

  return (
      <div className="App">
        <Header/>
        <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
          <Editor/>
          <List/>
        </TodoContext.Provider>
      </div>
  )
}

export default App
