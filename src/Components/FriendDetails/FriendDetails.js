import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendDetails = () => {
    const {friendId} =useParams()       
    //console.log(friendId);
    const [friend, setFriend] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    },[])
    const {name,phone,email} = friend
    return (
        <div>
            <h1>FriendDetails : {friendId}</h1>
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Phone : {phone}</h3>
        </div>
    );
};

export default FriendDetails;