import React from 'react' // import do react
import ReactDom from 'react-dom'
import './App.css'

//Importam elementos
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from './components/basicos/Primeiro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from './components/layout/Card'


export default _ =>
    <div className='App'>
        <h1>Fundamentos React 2</h1>

        <div className='Cards'>
        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={20} max={40} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Param">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3}
            />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

        </div>
        


    </div>

