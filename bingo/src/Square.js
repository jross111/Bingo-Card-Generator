import React, { useState } from 'react';


export function Square({number}) {
    const [ value, setValue ] = useState('')
    function randomNumber(){
        return (
            Math.floor(Math.random(100) * (100 - 0))
        )
    }
    return (
    <button className="square"
    onClick={() => setValue(randomNumber())}
    >
        {value}
    </button>);
}
