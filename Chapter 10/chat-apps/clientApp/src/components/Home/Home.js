import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    function handleNameEvent(event) {
        setName(event.target.value);
    }
    function handleRoomEvent(event) {
        setRoom(event.target.value);
    }    


    return (
        <div className="homeOuterContainer">
            <div className="header">
     
            </div>
            <div className="homeInnerContainer">  
               <h1 className="heading">Chat App</h1>            
                <div><input placeholder="Name" className="homeInput" type="text" onChange={handleNameEvent} required /></div>
                <div><input placeholder="Room" className="homeInput mt-20" type="text" onChange={handleRoomEvent} /></div>


                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Start Chat</button>
                </Link>
            </div>
        </div>
    )
}


export default Home