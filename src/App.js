import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";


export default function App() {   
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        //QUEDA PENDIENTE HACER QUE EL LINK DE LA RUTA DE LAS GIFS SE ACTIVE SOLO CUANDO SE HAGA CLICK EN EL BOTON DE BUSQUEDA
        <input type="text" placeholder="Search for a gif" />
        <br/>
        <button>Search</button>
        <br/>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/coches'>Gifs de coches</Link>
        <Link to='/gif/javascript'>Gifs de JS</Link>
        <Link to='/gif/futbol'>Gifs de Futbol</Link>
      <Route 
        component={ListOfGifs}
        path="/gif/:keyword"
      />     
               
      </section>
    </div>
  );
}


