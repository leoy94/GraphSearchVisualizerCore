export interface IAnimation {
    name: string; 
    processed?: boolean;
    animation: () => any;
}

export class Animation implements IAnimation {
    name: string;
    animation: () => any;
    processed: boolean = false;

    constructor(name: string, animation: () => any){
        this.name = name; 
        this.animation = animation;
        
    }
}


export interface IAnimations {
    name: string;

    frames: IAnimation[];
    currentFrameIndex: number; 
    
    currentFrame: IAnimation; 
    nextFrame: IAnimation; 
    lastFrame: IAnimation;

    addAnimation: (name: string, animation: () => any) => void;
    removeAnimation?: (name: string, animation: () => any) => void;
    process?: () => IAnimation;

}

export abstract class AbsAnimations implements IAnimations {
    frames: IAnimation[] = [];
    currentFrameIndex: number = this.frames.length>0?1:-1;
    name: string = "";

    addAnimation(name: string, animation: () => any): void {
        this.frames.push(new Animation(name, animation));
        this.resetCurrent();
    };

    resetCurrent(){
        this.currentFrameIndex = this.frames.length>0?1:-1;
    }

    process(): IAnimation{
        this.currentFrame.animation();
        this.currentFrame.processed = true;
        this.currentFrameIndex++;
        return this.currentFrame;
    }

    //get methods
    get currentFrame(): IAnimation{
        return this.frames[this.currentFrameIndex];
    }

    get nextFrame(): IAnimation{
        return this.frames[this.currentFrameIndex + 1];
    }

    get lastFrame(): IAnimation {
        return this.frames[this.currentFrameIndex - 1];
    }
}

export class Animations extends AbsAnimations {
    //implementation goes here
    constructor(name: string){
        super();
        this.name = name;
    }

}
