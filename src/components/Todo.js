import React from 'react'

const Todo = ({ className, todos, id, text, setTodos }) => {
    // Remove todo from list
    const deleteTodo = () => {
        setTodos(todos.filter((el => el.id !== id)));
    };

    // Set to task complete/incomplete
    const completeTodo = () => {
        const newTodo = todos.slice();

        newTodo.forEach(element => {
            if (element.id == id) {
                if (element.className !== 'complete') {
                    element.className = "complete";
                    element.complete = true;
                } else {
                    element.className = "todo";
                    element.complete = false;
                }
            }
        });

        setTodos(newTodo);
    }

    return (
        <div className={className}>{text}
            <button onClick={deleteTodo} className='deleteButton'>&#x1F5D1;</button>
            <button onClick={completeTodo} className='addButton'>&#10003;</button>
        </div>
    );
}

export default Todo;