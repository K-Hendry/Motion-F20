import {gsap} from "gsap";

export function pinkBallAnimation(){
    var bounceSpeed1 = 1;
    var bounceSpeed2 = 2;
    var tl = gsap.timeline();
    tl.to(".ball1",{duration: bounceSpeed1, yPercent:400, scaleY:.5})
        .to(".ball1",{duration: bounceSpeed1, yPercent:0, scaleY:1})
        .to(".ball1",{duration: bounceSpeed1, yPercent:400, scaleY:.5})
        .to(".ball1",{duration: bounceSpeed2, yPercent:0, scaleY:1});
        return tl;
}