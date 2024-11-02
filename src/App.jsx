
import Example from "./Example"
import {useState} from "react"
import "./Todo.css"


function App() {

  const [todos, setTodos] = useState([]);
  const [text,setText]= useState("");
  const [editData,setEditData] = useState(null);

  const addTodo =() => {
    if (text.trim() === "") {
     alert("Pleass Enter the Todo List");
     return
    }
    const obj={
      id:Math.random(),
      text:text,
    };
    setTodos([...todos, obj]);
    setText("");
    
  };


  const deleteTodo =(id) => {
    const filter= todos.filter((todo)=>todo.id!==id);
    setTodos(filter);

  };


  const updateTodo = () => {

    const updateTodo = todos.map((todo)=>todo.id === editData.id ? editData : todo);  
    setTodos(updateTodo);
    setEditData(null);

  };
  {/*The below code makes invisible when update is pressed */}
   
  //  if(editData) {
  //   return(
  //     <>
  //   <input type="text" 
  //   onChange={ (e)=> setEditData({...editData,text:e.target.value})} 
  //   value={editData.text} />

  //   <button className="btnU" onClick={updateTodo}>Update</button>

  //   </>
  //   );
  //  }

   


  return (
    <div className="MainCard">
      <Example/>
      <div className="inp">
      <input type="text" onChange={ (e)=> setText(e.target.value)} value={text} placeholder="Enter todo lists"/>
      <button className="btnA" onClick={addTodo}>AddTodo</button>
      </div>
      
      {editData && (
        <div className="edit-section">
          <input
          type="text"
          onChange={ (e)=> setEditData({...editData,text:e.target.value})}
          value={editData.text}
          /> 
          <button className="btnU" onClick={updateTodo}>Update</button>
          </div>
      )}

      <div>
       {todos.map((todo)=> (
        <div className="card" key={todo.id}>
        <div className="todo-text">
            <h1>{todo.text}</h1>
        </div>
        <button className="btnD" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button className="btnE" onClick={() => setEditData(todo)}>edit</button>
        </div>
    
        ))
        }
        </div>
        

    </div>
  );
}

export default App
