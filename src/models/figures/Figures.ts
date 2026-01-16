import {Colors} from "../Colors";
import {Square} from "../Square";
import logo from '../../assets/white-king.png'

export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    KNIGHT = 'Конь',
    BISHOP = 'Слон',
    PAWN = 'Пешка',
}

export class Figures {
    color: Colors;
    logo: typeof logo | null;
    square: Square;
    name: FigureNames;
    id: number;

    constructor(color: Colors, square: Square) {
        this.color = color;
        this.square = square;
        this.square.figure = this;
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(target: Square): boolean {
        return !(target.figure?.color === this.color ||
            target.figure?.name === FigureNames.KING);
    }

    moveFigure (target: Square): boolean {
        return true
    }
}