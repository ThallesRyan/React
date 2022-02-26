import React, { Component} from 'react'
import { useState } from 'react'

import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

// componente de classe, pois irá usar estado...
export default Calculator =>{
    
       const [valores,setValores] = useState(0)
       
    
        return(
            <div className='calculator'>
                <Display tipo="text" valor = {valores} disabled= {true}/>
                <Button label='AC'nomeClass="AC" setValores={setValores} valor={valores} ></Button>
                <Button label="/" nomeClass="divisao"></Button>
                <Button label="7" setValores={setValores} valor={valores}></Button>
                <Button label="8" setValores={setValores} valor={valores}></Button>
                <Button label="9" setValores={setValores} valor={valores}></Button>
                <Button label="*" nomeClass="multiplicacao"></Button>
                <Button label="4" setValores={setValores} valor={valores}></Button>
                <Button label="5" setValores={setValores} valor={valores}></Button>
                <Button label="6" setValores={setValores} valor={valores}></Button>
                <Button label="-" nomeClass="subtracao"></Button>
                <Button label="1" setValores={setValores} valor={valores}></Button>
                <Button label="2" setValores={setValores} valor={valores}></Button>
                <Button label="3" setValores={setValores} valor={valores}></Button>
                <Button label="+" nomeClass="adicao"></Button>
                <Button label="0" setValores={setValores} valor={valores}></Button>
                <Button label="." nomeClass="ponto"></Button>
                <Button label="=" nomeClass="igual"></Button>
               
            </div>
        )
    }
