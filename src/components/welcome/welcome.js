import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';
import logoPorkcolombia from '../../logoPorkcolombia.png';

const Inicio = () =>{
    
    return(
        <div className={styles.container}>           
            <header className={styles.App_header}>
                <img src={logoPorkcolombia} className={styles.app_imagen} alt="logoPorkcolombia" />
                <h4>Ronda Semanal de Precios Históricos</h4>       
            </header>             
            <div className={styles.primer}>            
                <Link to="./presentacion"  className={styles.link}>Recomendaciones</Link>
            </div>
            <div className={styles.segundo}>
                <Link to="./login"  className={styles.link}>Menu privado</Link>                 
            </div>            
        </div>
    )
}
export default Inicio;