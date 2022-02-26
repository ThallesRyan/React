import React from "react"
import './Button.css'

export default (props) => {
    const handleClick = (e) =>{
        const valor = e.target.innerText
        // console.log(valor)
        // console.log(props.valor)
        var valoresParaOperacao = props.valor
        console.log(valoresParaOperacao)

        if(valor == "AC"){
            props.setValores("0")
            valoresParaOperacao = 0

        }else if(valor == "/"){
            /*... */
        }else{
            if(props.valor == "0"){
                props.setValores("")
            }
            props.setValores( (valorAnterior) => valorAnterior + valor)
        }
        
        /*FAZER AS CONDIÇÕES PARA OPERACOES */

    }

    return(
        <button onClick={handleClick} className={props.nomeClass}>{props.label}</button>
    )
}