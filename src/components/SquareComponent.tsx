import React, {FC} from 'react';
import {Square} from "../models/Square";

interface SquareProps {
    square: Square
}

const SquareComponent: FC<SquareProps> = ({square}) => {
    return (
        <div className={['square, square.color'].join('')}>

        </div>
    );
};

export default SquareComponent;