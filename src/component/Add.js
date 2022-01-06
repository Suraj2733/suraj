import React,{ useState} from 'react'
import './Ad.css'

export default function Add() {
    const [item, setItem] = useState("")
    const handleInput = event  => {
        setItem(event.target.value)
        console.log(event);
      }

      const handleSubmit = (event) => {
        if(item ===""){
          alert('Please enter item');
          event.preventDefault();
        }
        else{
        const newTodo = {
          id: Math.random()*100,
          todo: item
          
        }
        console.log(item);
        event.preventDefault();
        setItem("")
    
        fetch("https://new-fastapi-app.herokuapp.com/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo)
        })
      }
      }

    return (

      <div className='ctr'>
  <div className='Ap'>
        <form>
            <input type="text" onChange={handleInput} value={item} placeholder="Enter Item" className="inn" />
            <button type="button" onClick = {handleSubmit} className="btnn">+</button>
        </form>
        </div>
        </div>
    )
}