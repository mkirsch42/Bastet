import { Howl } from 'howler';

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

class SoundSet {
    constructor(sounds) {
        this.sounds = sounds;
    }
    static fromJSON(json) {
        console.log(json);

        return new SoundSet(json.map(me => new SoundEffect(new Howl({src: `${process.env.PUBLIC_URL}/sounds/${me}`, autoplay: false}))));
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

class Situation {
    constructor(vals) {
        this.vals = vals;
    }
    static fromJSON(json) {
        return new Situation(json.vals);
    }
}

class Scene {
    constructor(name, soundset, situations) {
        this.name = name;
        this.soundset = soundset;
        this.situations = situations;
    }
    static fromJSON(json) {
        console.log(json);
        return new Scene(json.name, SoundSet.fromJSON(json.soundset), json.situations.map(me => Situation.fromJSON(me)));
    }
    play() {
        this.soundset.playAll();
    }
    stop() {
        this.soundset.stopAll();
    }
}

export default Scene;
export {SoundSet, SoundEffect, Situation};