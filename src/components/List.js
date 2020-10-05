import React from 'react'

import Form from './Form'
import Todo from './Todo'

const List = () => {
    return (
        <div>
            <Form />
            <div id='listContainer'>
                < Todo />
                < Todo />
                < Todo />
            </div>
        </div>
    );
}

export default List;