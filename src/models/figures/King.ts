import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figures {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.KING
    }
    canMove(target: Square): boolean {
        return super.canMove(target);
    }
}