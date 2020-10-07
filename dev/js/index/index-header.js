import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function indexHeaderPin(){
    gsap.to("#index-intro-container",{ease: "none", scrollTrigger:{
        trigger: "#index-intro-container",
        pin: true,
        start: "top 50%",
        end: "bottom bottom",
        id:"headerPin"
    }})}