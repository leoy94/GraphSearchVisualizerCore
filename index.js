"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gameboard_1 = require("./Gameboard/Gameboard");
let game1 = new Gameboard_1.Game("Graph Search Visualizer", 2, 3);
const Vertex_1 = require("./Vertex/Vertex");
// console.log(game1);
if (game1.gameboard) {
    if (game1.gameboard.get("6")) {
        let vertex = game1.gameboard.get("6");
        console.log(game1.gameboard);
        vertex ? console.log(Vertex_1.GameVertex.getCoordinates(parseInt(vertex.id), game1.size.height, game1.size.width)) : "";
        let edges = vertex ? vertex.getEdges(game1.size) : "none";
        console.log(edges);
    }
}
