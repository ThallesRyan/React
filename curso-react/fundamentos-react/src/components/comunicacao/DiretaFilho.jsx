import React from 'react'
/* Será o componente que recebrá as informações */
export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} </strong></span>
            <span>{props.nerd ? 'Verdadeiro' : "Falso"} !</span>
        </div>
    )
}