class Scene {
    constructor(name, soundset, situations) {
        this.name = name;
        this.soundset = soundset;
        this.situations = situations;
    }
    play() {
        this.soundset.playAll();
    }
    stop() {
        this.soundset.stopAll();
    }
}

class SoundSet {
    constructor(sounds) {
        this.sounds = sounds;
    }
    playAll() {
        this.sounds.forEach((val, index, arr) => {
            val.play();
        });
    }
    stopAll() {
        this.sounds.forEach((val, index, arr) => {
            val.stop();
        });
    }
}

class SoundEffect {
    constructor(howl) {
        this.howl = howl;
    }
    play() {
        this.howl.play();
    }
    stop() {
        this.howl.stop();
    }
}

class Situation {
    constructor(vals) {
        this.vals = vals;
    }
}

export default Scene;
export {SoundSet, SoundEffect, Situation};