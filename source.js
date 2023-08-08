function Board(){
    let board = [];
    const createBoard = () => {
        for(let i=0;i<8;i++){
            board[i]=[];
            for(let j=0;j<8;j++) board[i][j]=[i,j];
        }
    }

    const makeMoves = (arr) => {
        let moves = [];
        const i = arr[0];
        const j = arr[1];
        (i-2 >= 0 && j+1 <= 7) ? moves.push([i-2,j+1]) : moves.push(null);
        (i-1 >= 0 && j+2 <= 7) ? moves.push([i-1,j+2]) : moves.push(null);
        (i+1 <= 7 && j+2 <= 7) ? moves.push([i+1,j+2]) : moves.push(null);
        (i+2 <= 7 && j+1 <= 7) ? moves.push([i+2,j+1]) : moves.push(null);
        (i+2 <= 7 && j-1 >= 0) ? moves.push([i+2,j-1]) : moves.push(null);
        (i+1 <= 7 && j-2 >= 0) ? moves.push([i+1,j-2]) : moves.push(null);
        (i-1 >= 0 && j-2 >= 0) ? moves.push([i-1,j-2]) : moves.push(null);
        (i-2 >= 0 && j-1 >= 0) ? moves.push([i-2,j-1]) : moves.push(null);

        return moves;
    }
    return{
        createBoard,
        makeMoves,
    }

}

let i=Board();
i.createBoard();
let el;
let arr=i.makeMoves([6,3]);
arr.forEach(move => {
    if(JSON.stringify(move) === JSON.stringify([7,1])) el=move;
})
console.log(arr);
console.log(el);