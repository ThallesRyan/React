import produtos from '../../data/produtos.js'
import  './tabela.css'
import { ReactDOM } from 'react'

export default (props) => {

    function getLinhas(){
    //será executado a funcao para cada elemento do array e o resultado final será uma varoável com todos os resultados,<tr> <td></td><td></td><td></td> </tr>
     return produtos.map((produto, i) =>{
        return(
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco.toFixed(2).replace('.',',')}</td>
        </tr>
        )
    })

}





    return(
        /* Retorna a div da tabela após a chamada da função */
        <div className='TabelaProdutos'>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}