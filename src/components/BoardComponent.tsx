import React, {FC, useState} from 'react';
import {Board} from "../models/Board";
import {Square} from "../models/Square";
import SquareComponent from "./SquareComponent";


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

    function click (square: Square) {
        if (square.figure){
            setSelectedSquare(square)
        }
    }
    return (
        <div className='board'>
            {board.squares.map((row , index) =>
                <React.Fragment key={index}>
                    {row.map(square =>
                    <SquareComponent
                        click = {click}
                        square={square}
                        key={square.id}
                        selected={square.x === selectedSquare?.x && square.y === selectedSquare?.y}
                    />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;