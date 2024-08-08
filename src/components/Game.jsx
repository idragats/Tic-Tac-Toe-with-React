import React, {useState} from "react";
import Board from "./Board";


const Game = () => {
    //initialize the 9 squares with value nul using the useStetae hook
    const [squares, setSquares] = useState(Array(9).fill(null));

	// for 'X' start 
    const [xIsNext, setXisNext] = useState(true);

    const handleClick = (i) => {
        //save the copy of the squares
        const newSquares = squares.slice();

        if (calculationWinner(newSquares) || newSquares[i]) return;
        newSquares[i] = xIsNext ? 'X' : 'O';

        //update values
        setSquares(newSquares);
        setXisNext(!xIsNext);

    };

	//reset the board
    const reset = () => {
        setSquares(Array(9).fill(null));
        setXisNext(true); 
    }

    //initialize the winner
    const winner = calculationWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;
   
        return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>
                    {status}
                </div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );

     
 };


 const calculationWinner = (squares) => {
    //all possible states for win  
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    for (let i=0; i<lines.length; i++){
        const [a,b, c] = lines[i]; 
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
  return null;  
 }


 export default Game;