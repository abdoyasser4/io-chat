import './App.css';
import io from "socket.io-client";
import {useState} from "react";
const socket=io.connect("http://localhost:3001/");


function App() {
  const[userName,setUsername]=useState("");
  const[room,setRoom]=useState("");
const joinRoom =()=>{
  if(userName !=="" && room !==""){
  socket.emit("join_room",room);
  }
}
  return (
    <div className="App">
    <h3>join a chat</h3>
    <input type="text" placeholder="Abdo..." onChange={(event)=>{setUsername(event.target.value)}}/>
    <input type="text" placeholder="room_id" onChange={(event)=>{setRoom(event.target.value)}}/>
    <button onClick={joinRoom} >join this room</button>
    </div>
  );
}

export default App;
