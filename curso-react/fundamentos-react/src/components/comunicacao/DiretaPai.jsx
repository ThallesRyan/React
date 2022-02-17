import  React from 'react'
/*Importa o componente para poder passar poder usu-lo, podendo passar as propriedades */
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>
        </div>
    )

}