import ReactDom from "react-dom";//importa o dom do react
import './index.css'//importa o arquivo de estilos 

import App from './App'

/*Primeiro param do render é o código que será gerado na página, 
e o segundo é o local em que o codígo será injetado*/

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
    <App />,
     document.getElementById('root')
)