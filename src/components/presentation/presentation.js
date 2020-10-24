import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import logoPorkcolombia from '../../logoPorkcolombia.png';

function Presentacion(){   
        return (           
            <div className={styles.container}>
                <header className={styles.App_header}>
                    <img src={logoPorkcolombia} className={styles.app_imagen} alt="logoPorkcolombia" />
                    <h4>Ronda Semanal de Precios Históricos</h4>       
                </header>   
                <div className={styles.texto}>
                    Señor porcicultor:<br/>
                    Lo invitamos a participar en nuestra Ronda de Precios históricos de la Asociación Porkcolombia, una investigación que realiza el Área Económica de Porkcolombia, la cual sirve como referencia de los precios del cerdo en pie y las canales porcinas en cada región del país. Para participar por favor tenga en cuenta las siguientes pautas.<br />
                    •	Los resultados de la Ronda dependerán de la calidad de la información que nos proporcione. Pedimos diligenciar la información con total honestidad.<br />
                    *Producto: Seleccione el producto que vende.<br />
                    *Cantidad: Registre el volumen comercializado del producto seleccionado en el numeral anterior.<br />        
                    *Peso promedio: Peso promedio del cerdo en pie y/o canal vendida.<br />
                    *Precio: Registre el precio por kilogramo <br />
                    *Ubicación Mercado (Region): Seleccione la region en el cual entrega sus cerdos o canales.<br />  
                    •   No utilice simbolos como ($ #) u otros, solo se pueden registrar números positivos.<br />
                    •	El registro de valores con decimales se debera hacer con comas(,) verifique la configuracion de su equipo o dispositivo. Este atento de cualquier alerta que cuestione el registro. <br />
                    •	Solicitamos revisar la información antes de enviarla.<br />
                    *Obligatorio
                </div>
                <div className={styles.link1}>
                    <Link to="./question" className={styles.link}>Continuar</Link>
                </div>
                <div className={styles.link1}>
                    <Link to="./welcome" className={styles.link}>Atrás</Link>
                </div>
            </div>
        );
    }
export default Presentacion;