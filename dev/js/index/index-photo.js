import {
    gsap
} from "gsap";

import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photoTL = gsap.timeline();

photoTL.from("#blue-van", {
    duration: .75,
    alpha: 0,
        y: -200
    })
    .from("#portrait", {
        duration: 0.5,
        alpha: 0,
        y: 200
    })
    .from("#beach", {
        duration: 0.75,
        alpha: 0,
        x: 300
    })
    .from("#star", {
        duration: 1,
        alpha: 0,
        x: -300
    });

export function indexPhotoAnim() {
    ScrollTrigger.create({
        animation: photoTL,
        toggleActions: "play none none none",
        trigger: "#index-photography-container",
        start: "top, 50%",
        end: "bottom 50%"
        //markers:true
    });
}