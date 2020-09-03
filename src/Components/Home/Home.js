import React, { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriend] = useState([]);
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data =>setFriend(data))
  },[])
    return (
        <div>
            <h1>Friend's Length : {friends.length}</h1>
      {
        friends.map(friend =><Friend friend={friend}></Friend>)
      }
        </div>
    );
};

export default Home;