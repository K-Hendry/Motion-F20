import {
    gsap
} from "gsap";

import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const designTL = gsap.timeline();

designTL.from("#baskerville", {
        duration: 0.5,
        y: -200
    })
    .from("#basement", {
        duration: 0.5,
        alpha: 0,
        y: 200
    })
    .from("#bertoia", {
        duration: 0.75,
        alpha: 0,
        x: -300
    })
    .from("#pcc", {
        duration: 1,
        alpha: 0,
        x: -300
    });

export function indexDesignAnim() {
    ScrollTrigger.create({
        animation: designTL,
        toggleActions: "play none none none",
        trigger: "#index-design-container",
        start: "top, 50%",
        end: "bottom 50%"
    });
}