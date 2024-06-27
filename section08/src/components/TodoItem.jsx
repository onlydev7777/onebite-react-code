import "./TodoItem.css";

const TodoItem = ({id, content, date, isDone}) => {
  const onChangeCheckbox = () => {

  }

  return (
      <div className="TodoItem">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
      </div>
  );
};

export default TodoItem;
