import React from 'react'
import style from './AddTodo.module.css';

const AddTodo = ({inputText, setInputText, todos, setTodos}) => {
        const inputTextHandler = e => {
            setInputText(e.target.value);
        };

        const submitTodo = e => {
            e.preventDefault();
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
            setInputText("")
            
        }

        return (
            <form onSubmit={submitTodo} className={style.form}> 
                <input type="text" 
                value={inputText} 
                name="title" 
                onChange={inputTextHandler}
                placeholder="Add Todo" 
                className={style.input}  required/>
                <button type="submit" 
                name="submit" 
                className={style.submit}>Submit</button>
            </form>
        )
}

export default AddTodo


