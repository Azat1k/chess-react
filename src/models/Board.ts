import {Square} from './Square';
import {Colors} from "./Colors";

export class Board {
    squares: Square [][] = []

    public initSquares() {
        this.squares = [] // очищаем массив что бы потом добавить функционал рестарта

        for (let i = 0; i < 8; i++) {
            const row: Square[] = []
            for (let j = 0; j < 8; j++) {
                if ((i+j)%2 !== 0 ) {
                    row.push(new Square(this, j, i, Colors.black, null)) // черные клетки
                } else {
                    row.push( new Square(this, j, i, Colors.white, null)) // белые клетки
                }
            }
            this.squares.push(row)
        }
    }

}