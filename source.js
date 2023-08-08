function Graph() {
    return{
      graph : {},
  
    addVertex(vertex) {
      if (!this.graph[vertex]) {
        this.graph[vertex] = [];
      }
    },

    addVertexes(arr){
      arr.forEach(vertex => {
        if(vertex !== null) this.addVertex(vertex);
      });
    },
  
    addEdge(vertex1, vertex2) {
      if (this.graph[vertex1] && this.graph[vertex2]) {
        this.graph[vertex1].push(vertex2);
        this.graph[vertex2].push(vertex1); 
      }
    },

    addEdges(arr,vertex2){
      arr.forEach(vertex1 => {
        if(vertex1 !== null) this.addEdge(vertex1,vertex2);
      });
    },
  
    getNeighbors(vertex) {
      return this.graph[vertex];
    },
  
    toString() {
      return JSON.stringify(this.graph, null, 2);
    },

    checkForEnd(moves,end){
      let condition=false;

      moves.forEach(move => {
        if(JSON.stringify(move) === JSON.stringify(end)) condition = true;
      })
      return condition;
    },
    path(start,end){

    }
  }
}

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