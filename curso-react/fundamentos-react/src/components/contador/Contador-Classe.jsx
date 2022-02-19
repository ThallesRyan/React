import React, { Component } from "react";
import "./contadorClasse.css"
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

    setPasso = (evento) => {
        this.setState({
            passo:+evento.target.value,
        })
    }
    
    render() {
        return (
            <div className="Contador">
                <h2> Contador</h2>
                {/* <p>{this.props.numeroInicial}</p> */}
                <p>{this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        id="passoInput" 
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                {/* Para fazer o this apontar para a instância em que foi criado
                <button onClick={_ => this.inc()}>+</button> */}
                <button onClick={this.dec}>-</button>
            </div>)
    }
}

export default Contador
// /*Para amarrar o inc no this, para não importando aonde a função ser chamda, this sempre apontará para a classe contador */
// constructor(props){
//     super(props)
//     this.inc = this.inc.bind(this)
// }