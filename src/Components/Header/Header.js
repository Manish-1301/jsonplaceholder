import React from 'react';
import './Header.scss'

const Header=({currentUserId,users})=>{
    const user =users.find((User)=> User.id===currentUserId)
    if (user===undefined)
    {
        return (
            <h1>Loading</h1>
        );
    }
    else{
        return(
            <div className="header">
                <h1 className="header__name">{user.name}</h1>
                <div className="header__box">
                    <div className="header__box--left">
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>address: {`${user.address.street},${user.address.suite},${user.address.city}`}</p>
                    </div>
                    <div className="header__box--right">
                        <p>Phone Number: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Company: {user.company.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;