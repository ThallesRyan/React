import './input.css'
import React, { useState } from "react"

export default (props) => {
    const [valor, setValor] = useState("Inicial")

    function quandoMudar(e) {
        //Quando um valor é atualizado, essa variável será atualizada em todos os locais onde ela foi referenciada
        setValor(e.target.value)
    }




    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Valor do input somente pode ser mudado se usado o useState associado a um onChange, onClick, etc */}
                <input value={valor} onChange={quandoMudar} />
                {/* Input usado para somente leitura, não pode ser modificado */}
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}