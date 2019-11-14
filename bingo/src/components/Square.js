import React, { useState } from 'react';


export function Square() {
    const [values, setValues] = useState([
        {text: "hi"},
        {text: "bye"},
        {text: "oh"}
    ]);
    // function randomNumber(){
    //     return (
    //         Math.floor(Math.random(100) * (100 - 0))
    //     )
    // }

    const Square = ({ square }) => <div>{square.text}</div>
    return (
        <form className="square" >
     
        </form>);
}


