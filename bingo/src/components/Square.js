import React, { useState } from 'react';


export function Square() {
    const [ value, setValue ] = useState('?');
    // function randomNumber(){
    //     return (
    //         Math.floor(Math.random(100) * (100 - 0))
    //     )
    // }


    return (
    <form className="square"
    onClick={() => setValue("New Value")}
    >
        {value}
    </form>);
}


