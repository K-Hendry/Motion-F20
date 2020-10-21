import {gsap} from "gsap";

gsap.set("#Circles", {transformOrigin: "center"})

const circlesGrowTL = gsap.timeline({repeat:4, ease:"none", yoyo:"true"});

circlesGrowTL.from("#creamS", {transformOrigin: "center", duration:.25, scaleX:0})
    .from("#red", {transformOrigin: "center", duration:.25, scaleX:0})
    .from("#yellow", {transformOrigin: "center", duration:.25, scaleX:0})
    .from("#green", {transformOrigin: "center", duration:.25, scale:0})
    .from("#creamE", {transformOrigin: "center", duration:.5, scale:0});

    export function circlesGrowAnimation(){
        return circlesGrowTL;
}