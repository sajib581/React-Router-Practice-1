import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    let history = useHistory()
    const {name,email,id} = props.friend
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const handleClick =() => {
        let url = `/friend/${id}`
        history.push(url)
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            {/* <p><Link to={`friend/${id}`}>Details of user : {id}</Link></p> */}
            <button onClick={handleClick}>Details of user : {id}</button>
        </div>
    );
};

export default Friend;