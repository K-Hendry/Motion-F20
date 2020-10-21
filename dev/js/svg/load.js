import {gsap} from "gsap";

//gsap.set("#Loading", {transformOrigin: "center"})

const loadTL = gsap.timeline({repeat:10, ease:"none", yoyo:"true"});

loadTL.from("#el1", {transformOrigin: "center", duration:.25, yPercent:150, scaleX:0})
    .from("#el2", {transformOrigin: "center", duration:.25, yPercent:150, scaleX:0})
    .from("#el3", {transformOrigin: "center", duration:.25, yPercent:150, scaleX:0});

    export function loadAnimation(){
}