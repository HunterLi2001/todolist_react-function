import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoObj) => {
        const newTodos = [todoObj, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (id, done) => {
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done};
            else return todoObj;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        setTodos(newTodos);
    };

    const checkAllTodo = (done) => {
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done: done};
        });
        setTodos(newTodos);
    };

    const clearAllDone = () => {
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={addTodo}/>
                <List
                    todos={todos}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
                <Footer
                    todos={todos}
                    checkAllTodo={checkAllTodo}
                    clearAllDone={clearAllDone}
                />
            </div>
        </div>
    );
}

export default App;
