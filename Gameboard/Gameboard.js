"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.AbsGameboard = void 0;
const AdjList_1 = require("../AdjList/AdjList");
const Animation_1 = require("../Animation/Animation");
var defAlgs;
(function (defAlgs) {
    defAlgs[defAlgs["default"] = 0] = "default";
})(defAlgs || (defAlgs = {}));
class AbsGameboard {
    constructor(name, height, width, algs) {
        this.name = "default";
        this.size = {
            height: 10,
            width: 10
        };
        this.currentAlg = 0;
        this.algs = defAlgs;
        this.createGameboard = () => {
            return new AdjList_1.AdjList();
        };
        this.generateAnimations = () => {
            return new Animation_1.Animations(this.algs[this.currentAlg]);
        };
        if (height && width) {
            let { height: heightState, width: widthState } = this.size;
            heightState = height;
            widthState = width;
        }
        if (algs) {
            this.algs = algs;
        }
        if (name) {
            this.name = name;
        }
    }
}
exports.AbsGameboard = AbsGameboard;
var algs;
(function (algs) {
    algs[algs["BFS"] = 0] = "BFS";
    algs[algs["DFS"] = 1] = "DFS";
})(algs || (algs = {}));
class Game extends AbsGameboard {
    constructor(name, height, width) {
        super(name, height, width, algs);
        this.generateAnimations = () => {
            switch (this.currentAlg) {
                case 0: return this.generateBFSAnimationFrames();
                default: console.log(this);
            }
            return new Animation_1.Animations("Error");
        };
        this.createGameboard.bind;
        this.gameboard = this.createGameboard();
        this.animations = this.generateAnimations();
    }
    generateBFSAnimationFrames() {
        return new Animation_1.Animations(this.algs[this.currentAlg]);
    }
}
exports.Game = Game;
