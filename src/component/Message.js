//import react from 'react';
import check from './check.png';
import delete1 from './delete1.png';
import React,{ useState, useEffect} from 'react';
//import Add from './Add';
//import './Sec';

//----------------------------------------------------------------------------
/*function TodoHelper({item, id, fetchTodos,UpdateTodo,TodosContext,deleteTodo}) {
  return (     
         <div>
            <UpdateTodo item={item} id={id} fetchTodos={fetchTodos}/>
            <DeleteTodo id={id} fetchTodos={fetchTodos}/>         
          </div> 
  ) 
}

function DeleteTodo({id}) {
  const [TodosContext] = deleteTodo([])
  const {fetchTodos} = React.useContext(TodosContext)

  const deleteTodo = async () => {
    await fetch(`https://new-fastapi-app.herokuapp.com/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { "id": id }
    })
    await fetchTodos()
  } 
}
*/
//----------------------------------------------------------------------------------------------

export default function Todos() {
    const [todos, setTodos] = useState([])
  //  const [use, setUse] = useState([])
    const fetchUse = async () => {
      const response = await fetch("https://new-fastapi-app.herokuapp.com/use")   
      const use = await response.json()
      console.log(use.data);
    //  setUse(use.data)
  }

useEffect(() => {
  fetchUse()
}, [])

    const fetchTodos = async () => {
        const response = await fetch("https://new-fastapi-app.herokuapp.com/todo")
        const todos = await response.json()
        console.log(todos.data);
        setTodos(todos.data)
    }
  
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='ctr'>
  <div className='Ap'>
        <table>
        <tr>
          <td>
            {todos.map((todo)=>(
            <p>{todo.todo}
            
            <button className="edtbtn" >   <img src={check} className="o"/> </button>
            <button className='eltbtn' ><img src={delete1} className="l"/></button>
          
                </p>
            ))}
            </td>
            </tr>
        </table>  
    </div>
    </div>
  )
}