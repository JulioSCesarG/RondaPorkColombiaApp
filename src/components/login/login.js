import React, { useState} from 'react';
import styles from './login.module.scss';
import swal from '@sweetalert/with-react'
import Answer from '../answer/answer';
import logoPorkcolombia from '../../logoPorkcolombia.png';
import { Link} from 'react-router-dom';

const Privado = ()=>{
    const [isLogin, setIsLogin ] = useState(true);
    let usr = 'tres';
    let psw ='';
    function seguro(props){     
        usr=document.getElementById('uno').value;
        psw=document.getElementById('dos').value;
        if(usr=== "2020Porkcolombia" && psw === "rondaPork"){
            swal({
                title: "Ronda de precios históricos",
                text: "Bienvenido",
                icon: "success",
                button: "Aceptar"
            }).then(respuesta=>{
                if(respuesta){
                    setIsLogin(false);
                }
            })       
        }else{
            swal({
                title: "Ronda de precios históricos",
                text: "Error en los datos",
                icon: "success",
                button: "Aceptar"
            }).then(respuesta=>{
                if(respuesta){ 
                    setIsLogin(true);    
                }
            })     
        } 
    }


    return (
        <div>
        { isLogin &&                                 
            <div> 
                <header className={styles.App_header}>
                    <img src={logoPorkcolombia} className={styles.app_imagen} alt="logoPorkcolombia" />
                    <h4>Ronda Semanal de Precios Históricos</h4>       
                </header>                    
                <div >
                    <label className={styles.hr}></label>    
                </div>                           
                <div>
                    <label className={styles.titleForm}>Administrador</label>
                </div>            
                <div>
                    <label className={styles.lblForm}>Usuario</label>
                    <input className={styles.txtForm} id='uno' type="text" placeholder="Usuario"></input>
                </div>
                <div>
                    <label className={styles.lblForm1}>Contraseña</label>
                    <input className={styles.txtForm1} id='dos' type="password" placeholder="Contraseña"></input>
                </div>
                <div >
                    <label className={styles.hr1}></label>    
                </div>
                <div className={styles.link1}>
                    <label onClick={seguro} id='noVer' className={styles.link}>Ingresar</label>
                </div>                                                  
                <div className={styles.link2}>
                    <Link to="./components" className={styles.link}>Atras</Link>
                </div>  
            </div>     
        }
        { !isLogin &&
            <Answer />
        }
        </div>       
    );
}

export default Privado;