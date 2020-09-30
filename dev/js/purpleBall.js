import {gsap} from "gsap";

export function purpleBallAnimation(){
    var bounceSpeed2 = .25;
    var bounceSpeed3 = .5;
    var tl = gsap.timeline();
    tl.from(".ball4",{xPercent:500, yPercent:200, scaleY:.5, alpha:0})
    .to(".ball4",{duration: bounceSpeed2, xPercent:0, yPercent:0, scaleX:.75})
    .to(".ball4",{duration: bounceSpeed3, xPercent:150, yPercent:-20, scaleY:1, scaleX:1})
    .to(".ball4",{duration: 5, scaleY:100, scaleX:100});
        return tl;
}