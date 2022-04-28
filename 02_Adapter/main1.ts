interface Indicator{
    indicate_state(state: string): void;
}

class Display{
    show_msg(msg: string): void{
        console.log("[DISPLAY]: "+msg)
    }
    change_light(){ }
}

class Speaker{
    speak_msg(msg: string): void{
        console.log("[SPEAKER]: "+msg)
    }
    change_volume(){}
}

class DisplayAdopter extends Display implements Indicator{
    indicate_state(state: string): void {
        this.show_msg(state);
    }
}

class SpeakerAdopter extends Speaker implements Indicator{
    indicate_state(state: string): void {
        this.speak_msg(state);
    }
}

// Indicate in display
let disp_indicator = new DisplayAdopter()
disp_indicator.indicate_state("Now Running")


// Indicate in speaker
let spk_indicator = new SpeakerAdopter()
spk_indicator.indicate_state("Now Running")
