import { DefaultKeyword, isArrowFunction } from "typescript";
import {IAdjList, AdjList} from "../AdjList/AdjList";
import {IAnimations, Animations} from "../Animation/Animation";

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
        height: 10,
        width: 10
    };
    gameboard?: IAdjList;
    animations?: IAnimations;
    currentAlg: number = 0;
    algs: any = defAlgs;

    createGameboard: () => IAdjList = () => {
        return new AdjList();
    }

    generateAnimations?:() => IAnimations = () => {
        return new Animations(this.algs[this.currentAlg]);
    }

    constructor(name?: string, height?: number, width?: number, algs?: any){
        if(height && width){
            let {height:heightState, width:widthState} = this.size; 
            heightState = height; 
            widthState = width;
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
}

export class Game extends AbsGameboard implements IGame{

    constructor(name?: string, height?: number, width?: number){
        super(name, height, width, algs);
        this.createGameboard.bind;

        this.gameboard = this.createGameboard();
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



