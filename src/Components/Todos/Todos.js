import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './Todos.scss'

const Todos=({userId})=>{
    const [todos,setTodos]=useState([]);
    const fetchTodos=async (userId)=>{
        const response=await Axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        //console.log(response.data)
        setTodos(response.data)
    }
    useEffect(()=>{
        fetchTodos(userId)
    },[userId])
    if (todos===undefined || todos === []){
        return (
            <h1>Loading..</h1>
        );
    }
    else{
        return(
            <div>
                <h2 className="todos__heading">Todos</h2>
                <ul className="todos">
                {
                    todos.map(todo=>(
                        <li key={`l${todo.id}`} className="todo">
                            <p>{todo.title}</p>
                        </li>
                    ))
                }
                </ul>
            </div>
            
        );
    }
}

export default Todos;