import React from 'react';
import "./App.css";
import Chat from './chat';
import Sidebar from './sidebar';
function App() {
  return (
    <div className="app">
      
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
