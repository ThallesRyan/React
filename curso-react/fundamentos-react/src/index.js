import ReactDom from "react-dom";
import React from 'react'
import './index.css'
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from './components/basicos/Primeiro'


//const el = document.getElementById('root')
/*ReactDom.render(
    'Olá React!', 
    el
)*/

/*ReactDom.render(
    'Olá React!', 
    document.getElementById('root')
)*/

/*
ReactDom.render(
    <div>
        <strong>Olá React!</strong>
    </div>,
    document.getElementById('root')
)
*/

/*const tag = <strong>Olá React!</strong>
ReactDom.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)
*/


// ReactDom.render(
//     <div>
//        <Primeiro></Primeiro>
//     </div>,
//     document.getElementById('root')
// )

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        {/* <ComParametro titulo="ParamTitulo" subtitulo="ParamSubtitulo"/> */}
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva" 
            nota={9.3}
         />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria" nota={9.9}
         />
    </div>, 
     document.getElementById('root')
)