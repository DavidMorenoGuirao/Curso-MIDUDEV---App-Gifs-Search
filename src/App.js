import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route, useLocation } from "wouter";



export default function App() { 
  
  const[keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`);
    // console.log(keyword);
    
  }

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }


  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={keyword} placeholder="Search for a gif..." />  
          <button>Search</button>
        </form>
        
        
        <br/>
        
        <br/>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/coches'>Gifs de coches</Link>
        <Link to='/gif/javascript'>Gifs de JS</Link>
        <Link to='/gif/futbol'>Gifs de Futbol</Link>
      <Route 
        component={ListOfGifs}
        path="/gif/:keyword"
      />
      {/* <Route
        component={Detail}
        path="/gif/:id"  />    */}
               
      </section>
    </div>
  );
}


