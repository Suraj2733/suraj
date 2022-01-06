//import check from './check.png';
import delete1 from './delete1.png';
import React from 'react';


const Sec = ({text,todo, todos, setTodos, setInputText, inputText}) => {
  
    const deleteHandler = ()=>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }    
            return item;
        }));
    };
    return(
      <table>
          <th className={`todo-item ${todo.completed? "completed" : ""}`}>
          {text}
          <button className="edtbtn" onClick={completeHandler}>   <img src={} className="o"/> </button>
<button className='eltbtn' onClick={() => {
    const confirmBox = window.confirm(
      "You want to delete the item?"
    )
    if (confirmBox === true) {
      deleteHandler()
    }
    
          }}> <img src={delete1} className="l"/></button>
          </th>
      </table>
      /*
        <div className='todo'>
            <li className={`todo-item ${todo.completed? "completed" : ""}`}>{text}</li>
            <button className="m" onClick={completeHandler}>  
             <img src={edit} 
             className="o"/> 
            </button>


            <button className='n' onClick={deleteHandler}> 
            <img src={delete1} 
              className="l"/></button>
        </div>*/
    );
}

export default Sec;
/*import React from 'react';
import './Sec.css';
import { v4 as uuidv4} from "uuid";
//import { Link } from 'react-router-dom';

export default function Form ({input, setInput, todos, setTodos}) {

  const onInputChange=(event) =>{
    setInput(event.target.value);
  };
  const onFormSubmit =(event) => {
    event.preventDefault();
    setTodos([...todos,{id: uuidv4(), title: input, completed: false }]);
    setInput("");
 }
    return (
      <div className="star">
           <h1>To Do</h1>


        <header>
          <form onSubmit={onFormSubmit} id="to-do-form">
             <input type="text" placeholder="Enter Text" className="taxt-input"
              value={input}
               required
               onChange={onInputChange}
               />
            
             <button type="button" className="abc">+</button>
             
             
          </form>
        </header>
      </div>
     
     );
  }




//export default Sec; */
