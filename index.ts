import {Game} from "./Gameboard/Gameboard";

let game1 = new Game("Graph Search Visualizer", 2, 3);
import {IGameVertex, GameVertex} from "./Vertex/Vertex";



// console.log(game1);

if(game1.gameboard){

    if(game1.gameboard.get("6")){
        let vertex = game1.gameboard.get("6");
        let edges = vertex?vertex.getEdges(game1.size): "none";
    }
}