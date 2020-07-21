import React,{useState,useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import UserList from './Components/UserList/UserList';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';
import Todos from './Components/Todos/Todos';

const App=()=> {
  const initialState={
    users:[],
    currentUserId: 1,
  }
  const [state,setState]=useState(initialState);
  const fetchUsers=async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    setState({...state,users: response.data});
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  const onUserClick=(event)=>{
    setState({...state,currentUserId: parseInt(event.target.id)})
  }
  return (
    <div className="App">
      <div className="Sidebar">
        <UserList users={state.users} onUserClick={onUserClick} currentUserId={state.currentUserId} />
      </div>
      <div className="Header">
        <Header currentUserId={state.currentUserId} users={state.users}/>
      </div>
      <div className="Content">
        <Todos userId={state.currentUserId} state={state} setState={setState} />
        <Posts userId={state.currentUserId}  />
      </div>
    </div>
  );
}

export default App;
