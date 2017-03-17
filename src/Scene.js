import { Howl } from 'howler';

var fadeTime = 1000;

class SoundEffect {
    constructor(name, sources, options) {
        this.name = name;
        this.fades = options.fade;
        this.gap = 0;
        this.volume = 0;
        Object.assign(options, {
            autoplay: false,
            volume: 0,
            onfade: ()=>{if(this.volume === 0) this.howl.stop();},
            onend: ()=>{setTimeout(this.nextSound.bind(this), this.gap);}
        });
        this.howls = sources.map(src => new Howl(Object.assign(options, {src: src})));
        this.howl = this.howls[Math.floor(Math.random() * this.howls.length)];
    }
    static fromJSON(json) {
        return new SoundEffect(json.name, json.src.map(val => `${process.env.PUBLIC_URL}/sounds/${val}`), json.options);
    }
    nextSound() {
        this.howl = this.howls[Math.floor(Math.random() * this.howls.length)];
        this.fade(this.volume, fadeTime);
    }
    fade(to, ms) {
        if(to > 0 && !this.howl.playing()) {
            this.howl.play();
            this.howl.seek(0);
        }
        if(!this.fades){
            ms = 0;
        }
        this.volume = to;
        this.howl.fade(this.howl.volume(), to, ms);
    }
    play() {
        this.fade(1, fadeTime);
    }
    stop() {
        this.fade(0, fadeTime);
    }
}

class SoundSet {
    constructor(sounds) {
        this.sounds = sounds;
    }
    static fromJSON(json) {
        return new SoundSet(json.map(me => SoundEffect.fromJSON(me)));
    }
    apply(situation) {
        situation.vals.forEach((val, ind)=> {
            this.sounds[ind].fade(val, fadeTime);
            this.sounds[ind].gap = situation.gaps[ind];
        });
    }
    stopAll() {
        this.sounds.forEach((val, index, arr) => {
            val.stop();
        });
    }
}

class Situation {
    constructor(vals, gaps) {
        this.vals = vals;
        this.gaps = gaps;
    }
    static fromJSON(json) {
        return new Situation(json.vals, json.gaps);
    }
}

class Scene {
    constructor(name, soundset, situations) {
        this.name = name;
        this.soundset = soundset;
        this.situations = situations;
    }
    static fromJSON(json) {
        return new Scene(json.name, SoundSet.fromJSON(json.soundset), json.situations.map(me => Situation.fromJSON(me)));
    }
    play() {
        this.soundset.apply(this.situations[0]);
    }
    stop() {
        this.soundset.stopAll();
    }
}

export default Scene;
export {SoundSet, SoundEffect, Situation};