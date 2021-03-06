import React from 'react' // import do react
import ReactDom from 'react-dom'
import './App.css'

//Importam elementos
import Card from './components/layout/Card'

import ContadorClasse2 from "./components/contador/Contador-Classe2"
import ContadorClasse from "./components/contador/Contador-Classe"
import Input from "./components/formulario/Input"
import UseStateEx from './components/UseStateEx'
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from './components/comunicacao/DiretaPai'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from './components/repeticao/ListaAluno'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from "./components/basicos/Aleatorio"
import Fragmento from './components/basicos/Fragmento'
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from './components/basicos/Primeiro'


export default _ =>
    <div className='App'>
        <h1>Fundamentos React 2</h1>
        <div className='Cards'>

            <Card titulo="#13 - Contador Usando Classe - 2" color="#DC143C">
                <ContadorClasse2 numeroInicial={10}></ContadorClasse2>
            </Card>

            <Card titulo="#12 - Contador Usando Classe" color="#DC143C">
                <ContadorClasse numeroInicial={10}></ContadorClasse>
            </Card>


            <Card titulo="#11 - Componente controlado (input)">
            <Input>
            </Input>

            </Card>

            <Card titulo="Exemplo de UseState">
                <UseStateEx>
                    
                </UseStateEx>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação direta" color="#FFAA">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Redenrização condicional" color='blue'>
                <ParOuImpar numero={2}></ParOuImpar>
                <ParOuImpar numero={1}></ParOuImpar>
                <ParOuImpar numero={18}></ParOuImpar>
                <br></br>
            </Card>

            <Card titulo="#07 - Desafio-Repetição" color="grey">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="purple">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com filhos" color="blue">
                <Familia sobrenome="Ferreira">
                    {/* Passa outos componentes  para a tag familia, como children*/}
                    <FamiliaMembro nome="Lucas" />
                    <FamiliaMembro nome="Rafael" />
                    <FamiliaMembro nome="João" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="green">
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

