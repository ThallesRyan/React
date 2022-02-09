import React from 'react' // import do react
import ReactDom from 'react-dom'


//Importam elementos
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
        <div id='app'>
            <h1>Fundamentos React 2</h1>
            <Fragmento />
            <ComParametro 
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3}
            />
            <Primeiro></Primeiro>
        </div>
    
