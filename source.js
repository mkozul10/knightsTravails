function Queue(){
  return{
    items:[],
      enqueue(element){
          this.items.push(element);
      },
      dequeue(){
          return this.items.shift();
      }
  }
}

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
        if(vertex !== null ) {
            this.graph[vertex] = [];
        }
      });
    },
    addEdge(vertex1, vertex2) {
        this.graph[vertex2].push(vertex1);
    },

    addEdges(arr,vertex2,parent){
      let i=0;
      arr.forEach(vertex1 => {
        if(vertex1 !== null ){
            this.addEdge(vertex1,vertex2);
        } 
      });
      this.addEdge(JSON.stringify(parent),vertex2);
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

    checkForPast(el){
      for(let key in this.graph){
        let newKey = JSON.stringify(key).replace("\"","").replace("\"","");
        newKey = `[${newKey}]`;
        if(newKey === JSON.stringify(el)) return false;
      }
      return true;
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

  const makeMoves = (arr,parent) => {
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
const myGraph = Graph();
const myBoard = Board();

let knightStart = [6,3];
let finish = [2,6];
let starters = [knightStart];
let knightMoves = Queue();
let knightMovess;
let end = false;
console.time('Execution Time');
while(!end){
  for(let i = 0; i < starters.length; i++){
    if(starters[i] !== null && myGraph.checkForPast(starters[i])){ 
      myGraph.addVertex(starters[i]);
      knightMovess = myBoard.makeMoves(starters[i]);
      knightMoves.enqueue(myBoard.makeMoves(starters[i]));
      myGraph.addEdges(knightMovess,starters[i]);
      end = myGraph.checkForEnd(knightMovess,finish);
      
      if(end) break;
    }
  }
  starters = knightMoves.dequeue();
}
console.timeEnd('Execution Time');
 console.log(myGraph.graph);


  