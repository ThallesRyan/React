import React, { Component } from "react";
import "./contadorClasse.css"
import Display from "./Display";
import Botoes from "./Botoes";
import FormPasso from "./FormPasso";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    /*Funcao arrow para o this apontar para onde a intância foi criada */
    inc = () =>{
        /* setState foi recebido do react após fazer o extends Component */
        this.setState({ numero: this.state.numero + this.state.passo })
    }

    dec = () =>{
        this.setState({numero: this.state.numero - this.state.passo})
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo:novoPasso,
        })
    }
    
    render() {
        return (
            <div className="Contador">
                <h2> Contador</h2>
                
                <Display numero={this.state.numero}></Display>
                <FormPasso passo={this.state.passo} setPasso={this.setPasso}></FormPasso>
                <Botoes incrementar = {this.inc} decrementar = {this.dec}/>
            </div>
            
            )
    }
}

export default Contador