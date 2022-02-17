import React, { useState } from "react"

export default props => {
   

  return(
      <div>
          <div>
              Filho
          </div>
          {/*Assim que o botão for clicado, o filho passrá informações para o pai */}
          <button onClick={ _ => props.quandoClicar('João', 53, true) } >Fornecer Informações</button>
      </div>
  )
}