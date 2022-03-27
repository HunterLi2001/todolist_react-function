import {nanoid} from "nanoid";
import "./index.css";

function Header(props) {
    const handleKeyUp = (event) => {
        const {keyCode, target} = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === "") return;
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        };
        props.addTodo(todoObj);
        target.value = "";
    };
    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder="请输入你的任务名称，按回车键确认"
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}

export default Header;