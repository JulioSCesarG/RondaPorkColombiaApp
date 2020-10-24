import React, { Component} from 'react';
import styles from './answer.module.scss';
import {RegistroContext} from '../context/registros';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import logoPorkcolombia from '../../logoPorkcolombia.png';
import { Link } from 'react-router-dom';

class Answer extends Component{
    render(){        
        const{
            registros,
        } = this.context;
        return (            
            <div className={styles.container}>
                <header className={styles.App_header}>
                    <img src={logoPorkcolombia} className={styles.app_imagen} alt="logoPorkcolombia" />
                    <h4>Ronda Semanal de Precios Históricos</h4>       
                </header>                                                                        
                <div >
                    <div className={styles.link1}>
                        <Link to="./components" className={styles.link}>Atras</Link>
                    </div>
                    <div className={styles.tabla}>
                        <ReactHTMLTableToExcel 
                            id="botonExportarExcel"
                            className= {styles.btnExportar}
                            table="tabla_registros"
                            filename="RegistrosRonda"
                            sheet="Registros"
                            buttonText="Exportar a Excel"
                        />
                    </div>
                    <br/>
                    <table className ={styles.table} id="tabla_registros"> 
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Fecha</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>P_Promedio</th>
                                <th>$/Kilo</th>
                                <th>Mercado</th>
                                <th>Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map(row=>{
                                return(
                                    <tr key ={row.id} className ={styles.tableRow}>
                                        <td>{moment(row.Date).format('DD MMM YYYY hh:mm')}</td>
                                        <td>{row.Producto}</td>
                                        <td>{row.Cantidad}</td>
                                        <td>{row.P_promedio}</td>
                                        <td>{row.Pesos_Kilo}</td>
                                        <td>{row.Mercado}</td>
                                        <td>{row.Opinion}</td>
                                    </tr>    
                                );
                            })}
                        </tbody>
                    </table>                                                
                </div>
                                                            
            </div> 
        );
    }
}
Answer.contextType = RegistroContext;
export default Answer;