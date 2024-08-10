import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import io from 'socket.io-client'
import { useState } from 'react';

const socket = io.connect('http://localhost:4000') 

function App() {
  const [username, setUserName] = useState('');
  const [room, setRoom] = useState('')
  return (
    <Router>
        <Routes>
          <Route 
          path='/' 
          element={
          <Home
            username = {username}
            setUserName = {setUserName}
            room = {room}
            setRoom = {setRoom}
            socket = {socket}
          />
          }
          />
          <Route
            path='/chat'
            element={
            <Chat 
            username={username} 
            room={room} 
            socket={socket} 
            />
          }
          />
        </Routes>
    </Router>
  );
}

export default App;
