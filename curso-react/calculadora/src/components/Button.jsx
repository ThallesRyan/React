import React from "react"
import './Button.css'

var operacao
var valores = [0 , 0]
const setOperacao = (op) => operacao = op
let p = 0
const calc = (setDisplay) => {
    if(operacao == '+'){
        p = 0
        let resultado = parseFloat(valores[0]) + parseFloat(valores[1])
        setDisplay(resultado)
        valores = [0,0]
    }else if(operacao == '-'){
        p = 0
        let resultado = parseFloat(valores[0]) - parseFloat(valores[1])
        setDisplay(resultado)
        valores = [0,0]
        console.log(resultado)
    }else if(operacao == '*'){
        p = 0
        let resultado = parseFloat(valores[0]) * parseFloat(valores[1])
        setDisplay(resultado)
        valores = [0,0]
        console.log(resultado)
    }else if(operacao == '/'){
        p = 0
        let resultado = parseFloat(valores[0]) / parseFloat(valores[1])
        setDisplay(resultado)
        valores = [0,0]
        console.log(resultado)
    }
    
}
const limparDisplay = (setDisplay) => {setDisplay(0)}

export default (props) => {
    const handleClick = (e) =>{
        const valor = e.target.innerText
        // console.log(valor)
        // console.log(props.valor)
        console.log(valores)


        if(valor == "AC"){
            valores = [0,0]
            limparDisplay(props.setDisplay)
            
        }else if(valor == "/" || valor == '*' || valor == '+' || valor =='-' ){
            setOperacao(valor)
            props.setDisplay(0)
            p = 1
        }else if(valor == '='){
            calc(props.setDisplay)
        }else{
            if(props.display == "0"){
                props.setDisplay("")
            }
            props.setDisplay( (valorAnterior) => valorAnterior + valor)
            valores[p] += valor
        }
        
        
        console.log(valores)
        
    }

    return(
        <button onClick={handleClick} className={props.nomeClass}>{props.label}</button>
    )
}