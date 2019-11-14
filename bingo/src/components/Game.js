import React from 'react';
import { Board } from "./Board";



export function Game(){

    return (
      <div className="board">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div></div>
            <ol></ol>
          </div>
        </div>
      </div>
    );

  
}
 