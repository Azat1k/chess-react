import {Colors} from "./Colors";
import {Figures} from "./figures/Figures";
import {Board} from "./Board";

export class Square {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figures | null;
    board: Board;
    available: boolean;
    id: number;

    constructor (board: Board, x: number, y: number, color: Colors, figure: Figures | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = figure;
        this.available = false;
        this.id = Math.random()
    }
}