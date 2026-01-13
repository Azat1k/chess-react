import React, {FC} from 'react';
import {Board} from "../models/Board";
import SquareComponent from "./SquareComponent";


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.squares.map((row , index) =>
                <React.Fragment key={index}>
                    {row.map(square =>
                    <SquareComponent
                    square={square}
                    key={square.id}
                    />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;