import io from "socket.io-client";
import { useEffect, useReducer, useState} from "react";
import ChatMessage from "./chatMessage.js";

var socket;

const ChatWindow = () => {

    const [inputValue, setInputValue] = useState("");
    const [msgs, setMsgs] = useState([{author: "BOT", text:"Welcome to the Chat Messager!"}]);
    console.log("render="+msgs);

    useEffect(() => { 
        function handler(msg) {
            setMsgs(prevstate => {
                if(prevstate[prevstate.length-1].author === msg.author) {
                    prevstate[prevstate.length-1].text += `\n${msg.text}`;
                    return [...prevstate];
                }
                return [...prevstate, msg]
            });
        }

        socket = io("drkslv:7000");
        socket.on('chat message', handler);

        return () => socket.disconnect();
    }, []);

    function sendMsg(e) {
        e.preventDefault(); // prevents page reloading
        setInputValue("");
        socket.emit('chat message', inputValue);
        return false;
    }

    return (
        <>
            <div className="messages">
                {msgs.map((msg, index)=> { return (<ChatMessage key={index} message={msg} />);}) }
            </div>
            <form className="chatForm" onSubmitCapture={sendMsg}>
                <input type="text" onChange={(evt) => setInputValue(evt.target.value)} value={inputValue} placeholder="Global Chat"/>
                <input type="submit" onClick={sendMsg} value="Send"/>
            </form>
            
        </>
    );
};



export default ChatWindow;