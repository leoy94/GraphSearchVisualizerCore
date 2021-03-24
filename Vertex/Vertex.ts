export interface IVertex{
    id: string;
    payload: any;
    edges?: string[];
    addEdge: (edge: string) => void;
    removeEdge: (edge: string) => void;
}

export class Vertex implements IVertex {
    payload = undefined;
    id: string = "";
    edges?: string[] = [];

    constructor(payload: any, id: string) {
            this.payload = payload;
            this.id = id;
        }

    addEdge(edge: string){
        try{
            if(this.edges){
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(edge: string){
        try{
            if(this.edges){
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    public get Edges(){
        return this.edges;
    }

    public static getCoordinates(vertexId: number, height: number, width: number){
        let y: number = Math.ceil(vertexId/width);
        let x: number = width - (y*width - vertexId);
        return {x, y};
    }
}

export interface IGameVertex extends IVertex{
    getEdges(size: {height: number, width: number}): any[];

}

export class GameVertex extends Vertex implements IGameVertex {
    public getEdges(size: {height: number, width: number}){
       const {height, width} = size;
       let gameEdges: number[] = [];
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
        let {x,y} = curr_coordinates;

        //right
        // edgeCoordinates.push({x: x + 1, y: y});
        let right = (x+1)+((y-1)*width);
        if(right < height*width+1 && right <= y*width){
            gameEdges.push(right);
        }

        //left
        // edgeCoordinates.push({x:  x - 1, y: y});
        let left = (x-1)+((y-1)*width);
        if(left > 0 && left > (y-1)*width){
            gameEdges.push(left);
        }


        //top
        // edgeCoordinates.push({x:  x, y:  y + 1});
        let top = x+((y)*width);
        if(top < height*width+1){
            gameEdges.push(top);
        }


        //bottom
        // edgeCoordinates.push({x:  x, y: y - 1});
        let bottom = x+((y-2)*width);
        if(bottom > 0){
            gameEdges.push(bottom);
        }

        // const {x, y} = VisVertex.getCoordinates(this.id, )
        return gameEdges;
    }
}