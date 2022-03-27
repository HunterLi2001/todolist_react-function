import "./index.css";
import {useState} from "react";

function Item(props) {
    const [mouse, setMouse] = useState(false);

    const handleMouse = (flag) => {
        return () => {
            setMouse(flag);
        };
    };

    const handleCheck = (id) => {
        return (event) => {
            props.updateTodo(id, event.target.checked);
        };
    };

    const handleDelete = (id) => {
        if (window.confirm("你想删除这个事项吗？")) {
            props.deleteTodo(id);
        }
    };

    const {id, name, done} = props;
    return (
        <li
            style={{backgroundColor: mouse ? "#ddd" : "white"}}
            onMouseLeave={handleMouse(false)}
            onMouseEnter={handleMouse(true)}
        >
            <label>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={handleCheck(id)}
                />
                <span>{name}</span>
            </label>
            <button
                className="btn btn-danger"
                style={{display: mouse ? "block" : "none"}}
                onClick={() => {
                    handleDelete(id);
                }}
            >
                删除
            </button>
        </li>
    );
}

export default Item;