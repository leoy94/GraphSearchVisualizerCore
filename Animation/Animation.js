"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animations = exports.AbsAnimations = exports.Animation = void 0;
class Animation {
    constructor(name, animation) {
        this.processed = false;
        this.name = name;
        this.animation = animation;
    }
}
exports.Animation = Animation;
class AbsAnimations {
    constructor() {
        this.frames = [];
        this.currentFrameIndex = this.frames.length > 0 ? 1 : -1;
        this.name = "";
    }
    addAnimation(name, animation) {
        this.frames.push(new Animation(name, animation));
        this.resetCurrent();
    }
    ;
    resetCurrent() {
        this.currentFrameIndex = this.frames.length > 0 ? 1 : -1;
    }
    process() {
        this.currentFrame.animation();
        this.currentFrame.processed = true;
        this.currentFrameIndex++;
        return this.currentFrame;
    }
    //get methods
    get currentFrame() {
        return this.frames[this.currentFrameIndex];
    }
    get nextFrame() {
        return this.frames[this.currentFrameIndex + 1];
    }
    get lastFrame() {
        return this.frames[this.currentFrameIndex - 1];
    }
}
exports.AbsAnimations = AbsAnimations;
class Animations extends AbsAnimations {
    //implementation goes here
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.Animations = Animations;
