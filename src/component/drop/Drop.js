import React from 'react'
import "./drop.css";
function Drop({options=[]}) {
    return (
        <div className="drop" >
           {options?.map(({option })=> <a href={`/${option}`} >{option}</a>)}
        </div>
    )
}

export default Drop
