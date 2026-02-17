import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figures {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK
    }
}
