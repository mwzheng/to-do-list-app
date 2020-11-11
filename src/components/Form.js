import React from 'react'

const Form = ({ input, todos, setTodos, setInput }) => {
    function inputHandler(e) {
        setInput(e.target.value);
    }

    function submitHandler(e) {
        // Prevents page from refreshing each time you try to add something
        e.preventDefault();

        // If input is an empty string just return & set input back to ""
        if (input.trim().length === 0) {
            setInput("");
            return;
        }

        // Add new input into todos w/ complele set to false & a random id
        setTodos(
            [...todos, { text: input, className: "todo" ,complete: false, id: Math.random() }]
        )

        // Clear out input after you add a new todo
        setInput("");
    }

    return (
        <form>
            New Todo: <input type='text' value={input} onChange={inputHandler}></input>
            <button onClick={submitHandler} id='submit'>+</button>
        </form>
    )
}

export default Form;