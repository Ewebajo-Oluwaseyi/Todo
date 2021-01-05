import React, { Fragment, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Todolist from './components/Todolist';
import Header from './components/layout/Header';
import About from './components/layout/pages/About';
import './App.css';

const App = () => {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);

    return (
      <div>
        <Router>
        <Header/>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <AddTodo inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
              <Todolist todos={todos} setTodos={setTodos} />
            </Fragment>
          ) }/>
          <Route exact path='/about' component={About}/>
        </Switch>
        </div>
        </Router>
      </div>
    );
}

export default App
