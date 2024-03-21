import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from "socket.io-client";
import './Chat.css';
import Messages from '../Messages/Messages';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

let socket;

export default function Chat({ location }) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState('');

    const ENDPOINT = 'localhost:8081';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        console.log(name, room);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, []);

   const sendMessage = (event) => {
       event.preventDefault();

       if(message){
        socket.emit('sendMessage', message, () => setMessage(''));
       } 
   }

    return (
        <div className="outerContainer">
            <div className="container">
               <div className="infoBar">
                    <div className="leftInnerContainer">
                        <img className="onlineIcon" src={onlineIcon} alt="online"/>
                        <h3>{ room }</h3>
                    </div>
                    <div className="rightInnerContainer">
                        <a href="/"><img src={closeIcon} alt="close" /></a>
                    </div>
                </div>

                <Messages messages={messages} name={name}/>
                
                <form className="form">
                    <input 
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)} 
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                    <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
                </form>
            </div>        
        </div>
    );
}


