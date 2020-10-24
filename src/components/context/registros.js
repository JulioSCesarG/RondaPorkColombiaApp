import React from 'react';
import {watchrondaPork} from '../../services/firebase/watches';

export const RegistroContext = React.createContext();

export class RegistroContextProvider extends React.Component{
    state ={
        registros: [],
    }
    componentDidMount(){
        watchrondaPork((registros) =>{
            this.setState({registros});
        });
    }

    render(){
        return(
            <RegistroContext.Provider value={this.state}>
                {this.props.children}
            </RegistroContext.Provider>
        );
    }
}