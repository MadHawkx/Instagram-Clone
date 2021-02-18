import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Context from './Global/Context';
import Model from './components/Model'
import Stories from './components/Stories'
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import PostsDisplay from './components/PostsDisplay';
const App=()=> {
  return (
    <Context className="App">
     <Navbar />
      <div className="container">
      <Stories/>
      <Posts/>
      <PostsDisplay/>
      <Sidebar/>
      </div>      
     <Model/>
    </Context>
  );
}

export default App;
