import React from 'react';
import style from './Todolist.module.css';

const Todo = ({text, todos, setTodos, todo}) => {
    const deleteText = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        
    }
    const completeTask = () => {
            setTodos(todos.map((item) => {
                if(item.id === todo.id){
                    return{...item, completed: !item.completed}
                }; return item;
            }   
            ))
    }


    return (
        <div className={`${style.todo} ${todo.completed ? `${style.completed}` : 'none'}`}>
            <p>
                <button onClick={completeTask} className={style.chkBtn}><i className="fas fa-check"></i></button>{' '}
                {text}
                <button onClick={deleteText} className={style.delBtn}><i className="fas fa-trash"></i></button>
            </p>
        </div>
    )
}

export default Todo

