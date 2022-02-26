import React from "react"
import './Display.css'

export default (props) => {
    return(
        <input className="display" type={props.tipo} disabled={props.disabled}>
           
        </input>
    )
}