import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figures {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Square): boolean {
        return super.canMove(target);
    }
}