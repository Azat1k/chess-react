import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figures {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN
    }
    canMove(target: Square): boolean {
        return super.canMove(target);
    }
}