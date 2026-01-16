import React, {FC, useEffect, useState} from 'react';
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
        if (selectedSquare && selectedSquare !== square && selectedSquare.figure?.canMove(square)) {
            selectedSquare.moveFigure(square);
            setSelectedSquare(null);
        } else {
            setSelectedSquare(square);
        }

    }

    useEffect(() => {
        highlightSquares()
    }, [selectedSquare])

    function highlightSquares() {
        board.highlightSquares(selectedSquare)
        updateBoard()
    }

    function updateBoard () {
        const newBoard = board.getCopyBoard ()
        setBoard(newBoard)
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