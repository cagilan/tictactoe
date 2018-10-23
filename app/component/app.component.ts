import { GameDataService } from '../service/user.services';
import { PlayerData } from './player-data';
import * as _ from 'underscore';

export class gameController implements ng.IController {
    static $inject = ['GameDataService'];
    player1 = 'X';
    player2 = 'O';
    played = null;
    currentPlayer;
    newSize = 3;
    newNumberToWin = 3;
    winner;
    draw;
    boardsize;
    numberToWin;
    board;
    errors;

    /*istanbul ignore next*/
    constructor(public user: GameDataService) {
        this.currentPlayer = this.player1;
    }

    initData() {
        let played:any[];
        //let played: any[]; 
        this.winner = null;
        this.draw = null;
        this.boardsize = this.newSize;
        this.numberToWin = this.newNumberToWin;
        this.board = 3;
    }

    getValue() {
        return this.currentPlayer;
    }

    evaluateTurn() {
            let id: string;
            var movesByPlayer = _.filter(this.played, this.getValue());
            if (movesByPlayer.length < this.numberToWin) {
                return; //not enough moves, don't bother checking
            }

            var diagonalDownCount = 0; //00, 11, 22 - diagonal top left to bottom right positions
            var diagonalUpCount = 0;  //20, 11, 02 - diagonal bottom left to top right positions

            for (var i = 0; i < this.numberToWin; i++) {
                var rowCount = 0; //check every row
                var colCount = 0;  //check every column
                var diagonalUpIndex = this.numberToWin - 1 - i; //2, 1, 0 diagonal up column index

                _.each(movesByPlayer, function (move) {
                    if (move.row === i && move.col === i) {
                        diagonalDownCount += 1;
                    }
                    if (move.row === diagonalUpIndex && move.col === i) {
                        diagonalUpCount += 1;
                    }
                    if (move.row === i) {
                        rowCount += 1;
                    }
                    if (move.col === i) {
                        colCount += 1;
                    }
                    if (diagonalUpCount === this.numberToWin
                        || diagonalDownCount === this.numberToWin
                        || colCount === this.numberToWin
                        || rowCount === this.numberToWin) {

                        this.winner = this.currentPlayer;
                        return;
                    }
                });
            }

            //no winner but all positions have been played
            if (this.played.length === (this.boardsize * this.boardsize)) {
                this.draw = true;
            }
    }

    changePlayer() {
        this.currentPlayer = (this.currentPlayer === this.player1)
            ? this.player2
            : this.player1;
    };

    playTurn($event, positionInfo) {
        this.errors = null;

        if (this.winner) {
            return;
        }

        if (positionInfo.player !== null) {
            return;
        }

        positionInfo.player = this.currentPlayer;
        this.played.push(positionInfo);
        this.evaluateTurn();

        if (!this.winner) { //change players if no winner
            this.changePlayer();
        }
    };

    newGame($event) {
        if (this.newNumberToWin > this.newSize) {
            this.errors = "Please choose a winning number smaller or equal to the board size.";
        } else {
            this.errors = null;
            this.initData();
        }
    };
}

export class UserComponent implements ng.IComponentOptions {
    static NAME: string = 'userView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = gameController;
        this.templateUrl = require('./app.component.html');
    }
}
