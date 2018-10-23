import * as angular from "angular";
export class GameDataService {
    static NAME: string = 'GameDataService';
    boardsize;    
    /*istanbul ignore next*/
    constructor(private $http: any) {
    }
    createBoard(boardsize) {
        var data = [];
          for (var i = 0; i < this.boardsize; i++) {
            for (var j = 0; j < this.boardsize; j++) {
              data.push({'row':i, 'col': j, 'player': null});
            }
          }
        return data;
      };
}
