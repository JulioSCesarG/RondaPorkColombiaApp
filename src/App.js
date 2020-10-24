import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { RegistroContextProvider } from './components/context/registros';
import {watchrondaPork} from './services/firebase/watches';
import Presentacion from './components/presentation/presentation';
import Inicio from './components/welcome/welcome';
import Question from './components/question/question';
import Answer from './components/answer/answer';
import Privado from './components/login/login';

watchrondaPork((rondaPork) =>{
  console.log(rondaPork);
});


function App (){
  return (
    <BrowserRouter >
        <RegistroContextProvider >
            <Switch >   
                <Route path= "/answer" component={Answer} /> 
                <Route path= "/login" component={Privado} />              
                <Route path= "/presentacion" component={Presentacion} /> 
                <Route path= "/components" component={Inicio} />
                <Route path= "/question" component={Question} />
                <Redirect from="/" to = "/components" />
            </Switch>
        </RegistroContextProvider>            
    </BrowserRouter>      
  );
}

export default App;
