import "./index.css";

function Footer(props) {
    const handleCheckAll = (event) => {
        props.checkAllTodo(event.target.checked);
    };
    const handleClearAll = () => {
        props.clearAllDone();
    };
    const {todos} = props;
    let doneCount = todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
    }, 0);
    let total = todos.length;
    return (
        <div className="todo-footer">
            <label>
                <input
                    type="checkbox"
                    checked={doneCount === total && total !== 0}
                    onChange={handleCheckAll}
                />
            </label>
            <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
            <button className="btn btn-danger" onClick={handleClearAll}>
                清除已完成任务
            </button>
        </div>
    );
}

export default Footer;
