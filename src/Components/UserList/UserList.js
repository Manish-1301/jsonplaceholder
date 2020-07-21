import React from 'react';
import './UserList.scss';

const UserList=(props)=>{
    return (
        <ul className="Userlist">
            {props.users.map(user=>{
            let active="";
            if(user.id===props.currentUserId)
                active="active";
            return (
                <li className={`users ${active}`} key={user.id} onClick={props.onUserClick} id={user.id}>{user.name}</li>
            )})}
        </ul>
    );
}

export default UserList