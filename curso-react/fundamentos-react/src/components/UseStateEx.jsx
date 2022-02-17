import React, {useState} from 'react'

export default (props) => {

    /* useState com valor inicial sendo 0 */
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>You clicked {count} times</p>
             {/* Quando o botão for clicado, a funcao que atualiza o valor de count será disparada */}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}