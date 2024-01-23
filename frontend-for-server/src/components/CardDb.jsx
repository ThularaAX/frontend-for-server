// import { useState, useEffect } from "react";

export default function CardDb(props){
    
    return(
        <div name="card" className="card-list">
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}