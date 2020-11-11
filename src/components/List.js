import React from 'react'

// Import component
import Todo from './Todo'

// Creates the list of todos 
const List = ({ todos, setTodos }) => {
    return (
        <div>
            <div id='listContainer'>
                {/* For each todo create a todo component */}
                {todos.map((todo =>
                    <Todo todos={todos} className={todo.className} id={todo.id} text={todo.text} key={todo.id} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
}

export default List;