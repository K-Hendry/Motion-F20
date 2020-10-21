import {gsap} from "gsap";

//gsap.set("#complete", {opacity:0})

const completeTL = gsap.timeline({ease:"none", opacity:20});

completeTL.from("#complete", {duration:10, opacity:0, scaleX:0})
    .to("#complete", {duration:10, opacity:20});

    export function completeAnimation(){
}