import React from "react"
import alunos from "../../data/alunos"//array com os alunos

export default props =>{
    //Transforma o array de objetos alunos em array de jsx
    //Para cada elemento do array, vai executar a funcao que transforma o elemento do array em um li jsx
    const alunosLI = alunos.map((aluno)=>{
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome}   {aluno.nota}
            </li>
        )
        
    })
    
    return (
        <div>
            <ul style={{ listStyle: "none" }}>{alunosLI}</ul>
        </div>
    );
}