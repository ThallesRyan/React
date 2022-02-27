import React, { Component} from 'react'
import { useState } from 'react'

import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

// componente de classe, pois irá usar estado...
export default Calculator =>{
    
       const [display,setDisplay] = useState(0)
       
    
        return(
            <div className='calculator'>
                <Display tipo="text" display = {display} disabled= {true}/>
                <Button label='AC'nomeClass="AC" setDisplay={setDisplay} display={display} ></Button>
                <Button label="/" nomeClass="divisao" setDisplay={setDisplay} display={display}></Button>
                <Button label="7" setDisplay={setDisplay} display={display}></Button>
                <Button label="8" setDisplay={setDisplay} display={display}></Button>
                <Button label="9" setDisplay={setDisplay} display={display}></Button>
                <Button label="*" nomeClass="multiplicacao" setDisplay={setDisplay} display={display}></Button>
                <Button label="4" setDisplay={setDisplay} display={display}></Button>
                <Button label="5" setDisplay={setDisplay} display={display}></Button>
                <Button label="6" setDisplay={setDisplay} display={display}></Button>
                <Button label="-" nomeClass="subtracao" setDisplay={setDisplay} display={display}></Button>
                <Button label="1" setDisplay={setDisplay} display={display}></Button>
                <Button label="2" setDisplay={setDisplay} display={display}></Button>
                <Button label="3" setDisplay={setDisplay} display={display}></Button>
                <Button label="+" nomeClass="adicao" setDisplay={setDisplay} display={display}></Button>
                <Button label="0" setDisplay={setDisplay} display={display}></Button>
                <Button label="." nomeClass="ponto" setDisplay={setDisplay} display={display}></Button>
                <Button label="=" nomeClass="igual" setDisplay={setDisplay} display={display}></Button>
               
            </div>
        )
    }
