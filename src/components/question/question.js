import React, {Component} from 'react';
import {RegistroContext} from '../context/registros';
import logoPorkcolombia from '../../logoPorkcolombia.png';
import  styles from './question.module.scss';
import {createRonda} from '../../services/firebase/api';
import { Link} from 'react-router-dom';
import swal from '@sweetalert/with-react';
import Select from 'react-select';

//para selector

let seleccion ="";
let regional = "";
let datico2 ='';
let datico3 ='';
let datico4 ='';
let opina =';'

const options=[
    {label:'Cerdo en Pie', value:'cerdo_en_pie'},
    {label:'Canal Caliente', value:'canal_caliente'},
    {label:'Canal Fria', value:'canal_fria'},   
]

function onChangeInput(value){
seleccion = value.label;
console.log(value.label);
let fecha = new Date();
let dia = fecha.getDay();
let hora = fecha.getHours();
let minuto = fecha.getMinutes();
console.log(fecha);
console.log(dia);
console.log(hora);
console.log(minuto);
}

function Selector(props){
    return (
    <div className={styles.contenedor1}>
        <label  className={styles.input1} >Seleccione un producto*</label>      
        <Select options={options} onChange={onChangeInput} className={styles.selector}/>
    </div>
    );
}

//Seccion de captura
function Seccion1(props){
    return (
        <div> 
            <div className={styles.contenedor2} id="cont2">
                <label  className={styles.input1} >Cantidad*</label> 
                <br />
                <input type="number" id='dos' className={styles.input} placeholder="*Your answer">
                </input> 
            </div> 
            <div className={styles.contenedor3} id="cont3">
                <label  className={styles.input1} > Peso promedio(Kg)*</label>
                <input type="number" id='tres' className={styles.input} placeholder="*Your answer">
                </input> 
            </div> 
            <div className={styles.contenedor4} id="cont4">
                <label  className={styles.input1} >Precio ($/Kg)*</label> 
                <input type="number" id='cuatro' className={styles.input} placeholder="*Your answer">
                </input> 
            </div> 
            <div className={styles.contenedor5} id="cont5">
                <SelectorMercado/>
            </div>        
        </div>
    );
}

//selector mercado
const mercados=[
    {label:'Antioquia', value:'antioquia'},
    {label:'Bogotá DC', value:'bogota'},
    {label:'Costa Atlantica', value:'costa_atlantica'},
    {label:'Eje Cafetero', value:'eje_cafetero'},
    {label:'Valle del Cauca', value:'valle_del_cauca'},
]
function onChangeInputMercado(region){
    regional = region.label;
    console.log(region.label);
}
function SelectorMercado(props){
    return (
    <div >       
        <label  className={styles.input1} >Seleccione un mercado*</label>        
        <Select options={mercados} onChange={onChangeInputMercado} className={styles.selector} />
    </div>
    );
}

//selector decision

const options2=[
    {label:'Si, enviar y continuar', value:'si'},
    {label:'No, enviar y salir', value:'no'},    
]

function onChangeDecision(value){
    let fecha = new Date();
    let dia = fecha.getDay();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    console.log(fecha);
    console.log(dia);
    console.log(hora);
    console.log(minuto);
    datico2=parseInt(document.getElementById('dos').value);
    datico3=parseInt(document.getElementById('tres').value);
    datico4=parseInt(document.getElementById('cuatro').value);
    opina=document.getElementById('comentario').value;
    console.log(seleccion)
    console.log(datico2)
    console.log(datico3)
    console.log(datico4)
    console.log(regional)
    console.log(opina)
    console.log(value.value);
    if(value.value==="no"){
        if(seleccion!=="" && datico2>0 && datico3<=150 && datico3>=70 && datico4>0 && regional!==""){            
            console.log("cumple los parametros"); 
            if(dia >= 5 && hora >= 12 && minuto >= 0){
                console.log("cumple los parametros");
                if(dia <= 6 && hora <= 23 && minuto <= 59){
                    swal({
                        title: "Ronda de precios históricos",
                        text: "¿Esta seguro de registrar estos datos? : Producto = " + seleccion + " - Cantidad = " + datico2 + " - Peso promedio  = " + datico3 + " - Precio x Kilo = " + datico4 + " - Region = " + regional,
                        icon: "info",
                        buttons: ["No","Si"]
                        }).then(respuesta=>{
                            if(respuesta){                              
                                createRonda({
                                    Date: Date.now(),        
                                    Producto: seleccion,
                                    Cantidad: datico2,
                                    P_promedio : datico3,
                                    Pesos_Kilo: datico4,
                                    Opinion: opina,
                                    Mercado : regional,                
                                });                    
                                 swal({
                                    title: "Ronda de precios históricos",
                                    text: "Registro exitoso",
                                    icon: "success",
                                    button: "Aceptar"
                                }).then(respuesta=>{
                                    if(respuesta){
                                        window.history.back(); 
                                    }
                                })     
                            }
                        })                    
                } else{
                    console.log("fecha inicial ok");
                }           
            }else{
                console.log("En este dia y hora no es posible registrar sus datos");           
            }                          
        }else{
            swal({
                title: "Ronda de precios históricos",
                text: "Error, por favor verifique los valores registrados",
                icon: "error",
                button: "Aceptar"
                }); 
        }                
    }else if(value.value==="si"){
        if(seleccion!=="" && datico2>0 && datico3<=150 && datico3>=70 && datico4>0 && regional!==""){            
            console.log("cumple los parametros"); 
            if(dia >= 5 && hora >= 12 && minuto >= 0){
                if(dia <= 6 && hora <= 23 && minuto <= 59){
                    swal({
                        title: "Ronda de precios históricos",
                        text: "¿Esta seguro de registrar estos datos? : Producto = " + seleccion + " - Cantidad = " + datico2 + " - Peso promedio  = " + datico3 + " - Precio x Kilo = " + datico4 + " - Region = " + regional,
                        icon: "info",
                        buttons: ["No","Si"]
                        }).then(respuesta=>{
                            if(respuesta){
                                createRonda({
                                    Date: Date.now(),        
                                    Producto: seleccion,
                                    Cantidad: datico2,
                                    P_promedio : datico3,
                                    Pesos_Kilo: datico4,
                                    Opinion: opina,
                                    Mercado : regional,                
                                });
                                swal({
                                    title: "Ronda de precios históricos",
                                    text: "Registro exitoso",
                                    icon: "success",
                                    button: "Aceptar"
                                }).then(respuesta=>{
                                    if(respuesta){
                                        window.history.go(); 
                                    }
                                })        
                            }
                        })                    
                } else{
                    console.log("fecha inicial ok");
                }           
            }else{
                swal({
                    title: "Ronda de precios históricos",
                    text: "Error, En este dia y hora no es posible registrar sus datos",
                    icon: "error",
                    button: "Aceptar"
                });                           
            }                          
        }else{
            swal({
                title: "Ronda de precios históricos",
                text: "Error, por favor verifique los valores registrados",
                icon: "error",
                button: "Aceptar"
            });
        }
    }
}

function Opinion(props){
    return(
        <div className={styles.contenedor6}>
            <label  className={styles.input1} >Comentarios*</label> 
            
            <textarea  id='comentario' className={styles.txtArea} placeholder="*Your answer">
            </textarea> 
        </div> 
    );
}

function Continuar(props){
    return (
    <div className={styles.contenedor7}>
        <label  className={styles.input1} >¿Desea agregar otra operacion?*</label>
        <Select options={options2} onChange={onChangeDecision} className={styles.selector}/>
    </div>
    );
}

class Question extends Component {
    render(){        
        return (
            <div className={styles.container}>
                <header className={styles.App_header}>
                    <img src={logoPorkcolombia} className={styles.app_imagen} alt="logoPorkcolombia" />
                    <h4>Ronda Semanal de Precios Históricos</h4>       
                </header>  
                <div >
                    <label className={styles.bodyText}>Señor porcicultor, por favor diligencie la siguiente información:
                    </label>
                </div>                    
                <Selector className={styles.selector} />
                <Seccion1 className={styles.selector} />
                <Opinion className={styles.selector} />
                <Continuar className={styles.selector} /> 
                <div className={styles.link1}>
                    <Link to="./presentacion" className={styles.link}>Atras</Link>
                </div>
                <div className={styles.link2}>
                    <Link to="./components" className={styles.link}>Ir a Inicio</Link>
                </div>             
            </div>            
        );
    }
}
Question.contextType = RegistroContext;
export default Question;