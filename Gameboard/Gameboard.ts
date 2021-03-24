// import { DefaultKeyword, isArrowFunction } from "typescript";
import {IAdjList, AdjList} from "../AdjList/AdjList";
import {IAnimations, Animations} from "../Animation/Animation";
import {IGameVertex} from "../Vertex/Vertex";

enum defAlgs {
    default
}

export interface IGameboard {
    name: string;
    size: {  
        height: number; 
        width: number;
    }
    algs?: any;
    currentAlg: number;
    gameboard?: IAdjList;
    animations?: IAnimations;
}

export abstract class AbsGameboard implements IGameboard {
    name: string = "default";
    public size = {
        height: 3,
        width: 5
    };

    gameboard?: IAdjList;
    animations?: IAnimations;
    currentAlg: number = 0;
    algs: any = defAlgs;

    createGameboard: () => IAdjList = () => {
        let gameBoard =  new AdjList();
        const {height, width} = this.size;
        const size = height * width;
        for(let i = 1; i <= size; i++){
            gameBoard.addVertex({

            },i.toString());
        }
        return gameBoard;

    }

    generateAnimations?:() => IAnimations = () => {
        return new Animations(this.algs[this.currentAlg]);
    }

    constructor(name?: string, height?: number, width?: number, algs?: any){
        // console.log(height, width);
        if(height && width){

            this.size.height = height;
            this.size.width = width;
        }

        if(algs){
            this.algs = algs;
        }

        if(name){
            this.name = name;
        }
    }

}

enum algs {
    BFS, 
    DFS,
}

interface IGame extends AbsGameboard {
    startVertexid?: string;
    endVertexid?: string;
    blockedids?:  Map<string,string>;
}

export class Game extends AbsGameboard implements IGame{

    constructor(name?: string, height?: number, width?: number){
        super(name, height, width, algs);

        this.gameboard = this.createGameboard.call(this);
        this.animations = this.generateAnimations();

    }

    generateAnimations = (): IAnimations => {

            switch(this.currentAlg){
                case 0: return this.generateBFSAnimationFrames();
                default: console.log(this);
            }
        return new Animations("Error");
    } 

    generateBFSAnimationFrames():IAnimations{
        return new Animations(this.algs[this.currentAlg]);
    }
}



