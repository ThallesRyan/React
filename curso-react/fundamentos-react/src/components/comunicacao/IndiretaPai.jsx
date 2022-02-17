import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    /*UseSate recebe como param o valor inicial e retorna o valor, e uma função que mudará o valor */
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    //A funcao sertá mandada como param para o elemento filho, e serexecutada nele, passando assim informações do filho para o pai
    function fornecerInformacoes(nome, idade, nerd) {/*Params passados na chamada da funcao, no filho */

       setNome(nome)
       setIdade(idade)
       setNerd(nerd)

        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? "Verdadeiro" : "Falso" }</span>
            </div>

            {/* passa funcao via props, do pai para o filho, quando a funcao for chamada poderá passar informações do filho para o pai */}
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}