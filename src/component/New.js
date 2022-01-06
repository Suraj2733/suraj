import React, { useState } from 'react';
import './Ne.css';

//import {Link} from "react-router-dom";

function App() {
  const [use,setUse]= useState("");
  const handleInput = event =>{
    setUse(event.target.value)
    console.log(event);
  }
  
  const handleSubmit = (event) =>{
    const newUse = {
      id: Math.random()*1000,
      username:use
    }
    console.log(use);
    event.preventDefault();
    
    setUse("")
    fetch("https://todoimsss.herokuapp.com/use", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUse)
    })

  }
 
  return (
   
    <div className='ctr'>
   
      <div className='Ap'>
        <header>
      <h1 className='welcome' >Welcome</h1>
      <p className='username'>Username</p>
      </header>
      <input onChange={handleInput} value={use} className='in' type='text' placeholder="Enter Name"/><br/> 
     
        <button onClick={handleSubmit} type='button' className='x'>START</button>
     
      </div>
      </div>
   
   );   
}

export default App;
/*import logo from './logo.svg';
import './App.css';


import Sec from './components/Sec';
import Header from './components/Header';
import Front from './components/Front';
import TodosList from './components/TodosList';


import React, {useState} from "react";

import {
  BrowserRouter as Router,
  Switch,                                         
  Route,
  Link
} from "react-router-dom";
import { append } from 'express/lib/response';


const App =() => {
  const[input, setInput] = useState("");
  const[todos,setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-warper">
        <div> 
          <Header />
        </div>
      <div>
        <Front 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}

      />
      </div>
      <div> 
        <TodosList todos={todos} setTodos={setTodos}/>
      </div>
      <div>
        <Sec todos={todos} setTodos={setTodos}/>
        input={input}
setInput={setInput}
todos={todos}
setTodos={setTodos}
      </div>
    </div>
    </div>
  );
}


//export default App;
*/






































