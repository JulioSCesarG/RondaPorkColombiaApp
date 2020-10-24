import React from 'react';
import logoPorkcolombia from '../../logoPorkcolombia.png';
import './layout.css';

function Layout (){
    return (        
        <div className="App">
            <header className="App-header">
                <img src={logoPorkcolombia} className="app-imagen" alt="logoPorkcolombia" />
                <h4>Ronda Semanal de Precios Históricos</h4>       
            </header>             
        </div>        
    );
}

export default Layout;
