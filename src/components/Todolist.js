import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos}) => {
    return (
        <div>
            <ul>
               {todos.map((todo) => (
                   <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
               ))}
            </ul>
        </div>
    )
}

export default Todolist
