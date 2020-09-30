import {gsap} from "gsap";

export function greenBallAnimation(){
    var bounceSpeed1 = 1;
    var bounceSpeed2 = 2;
    var bounceSpeed3 = .5;
    var tl = gsap.timeline();
    tl.to(".ball2",{duration: bounceSpeed2, xPercent:100, yPercent:200, scaleY:.5})
    .to(".ball2",{duration: bounceSpeed1, xPercent:300, yPercent:-100, scaleY:1})
    .to(".ball2",{duration: bounceSpeed2, xPercent:700, yPercent:200, scaleY:.5})
    .to(".ball2",{duration: bounceSpeed1, xPercent:1000, yPercent:-100, scaleY:1})
    .to(".ball2",{duration: bounceSpeed3, alpha:0, delay:5.5});
        return tl;
}