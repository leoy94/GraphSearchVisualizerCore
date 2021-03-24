"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameVertex = exports.Vertex = void 0;
class Vertex {
    constructor(payload, id) {
        this.payload = undefined;
        this.id = "";
        this.edges = [];
        this.payload = payload;
        this.id = id;
    }
    addEdge(edge) {
        try {
            if (this.edges) {
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    removeEdge(edge) {
        try {
            if (this.edges) {
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    get Edges() {
        return this.edges;
    }
    static getCoordinates(vertexId, height, width) {
        let y = Math.ceil(vertexId / width);
        let x = width - (y * width - vertexId);
        return { x, y };
    }
}
exports.Vertex = Vertex;
class GameVertex extends Vertex {
    getEdges(size) {
        const { height, width } = size;
        let gameEdges = [];
        // let edgeCoordinates: {x: number, y: number}[] = [];
        //possible edges
        //possibly need to exclude diags
        /*
           1. (x+1,y)
           2. (x-1,y)
           3. (x,y+1)
           4. (x-1,y+1) --excluded
           5. (x+1,y+1) --excluded
           6. (x, y-1)
           7. (x-1,y-1) --excluded
           8. (x+1,y-1) --excluded
        */
        let curr_coordinates = GameVertex.getCoordinates(parseInt(this.id), height, width);
        let { x, y } = curr_coordinates;
        //right
        // edgeCoordinates.push({x: x + 1, y: y});
        let right = (x + 1) + ((y - 1) * width);
        if (right < height * width + 1 && right <= y * width) {
            gameEdges.push(right);
        }
        //left
        // edgeCoordinates.push({x:  x - 1, y: y});
        let left = (x - 1) + ((y - 1) * width);
        if (left > 0 && left > (y - 1) * width) {
            gameEdges.push(left);
        }
        //top
        // edgeCoordinates.push({x:  x, y:  y + 1});
        let top = x + ((y) * width);
        if (top < height * width + 1) {
            gameEdges.push(top);
        }
        //bottom
        // edgeCoordinates.push({x:  x, y: y - 1});
        let bottom = x + ((y - 2) * width);
        if (bottom > 0) {
            gameEdges.push(bottom);
        }
        // const {x, y} = VisVertex.getCoordinates(this.id, )
        return gameEdges;
    }
}
exports.GameVertex = GameVertex;
