import React from 'react';
import { Square } from './Square';


export function Board() {

    function renderSquare(i){
        return <Square className="item" number={i} />;
    }

    const gameName = "Bingo"
    return (

        <div className="wrapper">
            <div className="game-name">{gameName}</div>
            <div className="item" id="0">{renderSquare(0)}</div>
            <div className="item" id="0">{renderSquare(1)}</div>
            <div className="item" id="0">{renderSquare(2)}</div>
            <div className="item" id="0">{renderSquare(3)}</div>
            <div className="item" id="0">{renderSquare(4)}</div>
            <div className="item" id="0">{renderSquare(5)}</div>
            <div className="item" id="0">{renderSquare(6)}</div>
            <div className="item" id="0">{renderSquare(7)}</div>
            <div className="item" id="0">{renderSquare(8)}</div>
            <div className="item" id="0">{renderSquare(9)}</div>
            <div className="item" id="0">{renderSquare(10)}</div>
            <div className="item" id="0">{renderSquare(11)}</div>
            <div className="item" id="0">{renderSquare(12)}</div>
            <div className="item" id="0">{renderSquare(13)}</div>
            <div className="item" id="0">{renderSquare(14)}</div>
            <div className="item" id="0">{renderSquare(15)}</div>
            <div className="item" id="0">{renderSquare(16)}</div>
            <div className="item" id="0">{renderSquare(17)}</div>
            <div className="item" id="0">{renderSquare(18)}</div>
            <div className="item" id="1">{renderSquare(19)}</div>
            <div className="item" id="0">{renderSquare(20)}</div>
            <div className="item" id="0">{renderSquare(21)}</div>
            <div className="item" id="0">{renderSquare(22)}</div>
            <div className="item" id="0">{renderSquare(23)}</div>
            <div className="item" id="0">{renderSquare(24)}</div>
        </div>);
}

