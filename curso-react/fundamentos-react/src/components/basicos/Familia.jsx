
import FamiliaMembro from "./FamiliaMembro";
import React, { cloneElement } from "react"

export default props => {
    console.log(props)
    return (
        // <div>
        //     <FamiliaMembro nome="Lucas" sobrenome={props.sobrenome} />
        //     {/* Espalha todos atributos recebidos no props */}
        //     <FamiliaMembro nome="Rafael" {...props} />
        //     <FamiliaMembro nome="João" sobrenome="Silva"/>

        // </div>
        <div>
            {/* React.cloneElement() recebe como primeiro parâmetro o elemento que será clonado, 
            e o segundo param, são as propriedades que serão adicionadas   */}

            {/* {cloneElement(props.children, {...props})} */}

            {
                // React.Children.map(props.children, (child) => {
                //     return cloneElement(child, props)
                // })

                /*map executa a funcao para cada child. A funcao clona o elemento adicionando as props do elemento pai(familia)*/
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
        </div>

    )
}