import {gsap} from "gsap";

// pink 
gsap.to(".ball1",{duration:1, yPercent:400, scaleY:.5});
gsap.to(".ball1",{duration:2, yPercent:0, scaleY:1, delay:1});
gsap.to(".ball1",{duration:1, yPercent:400, scaleY:.5, delay:3});
gsap.to(".ball1",{duration:2, yPercent:0, scaleY:1, delay:4});

//green 
gsap.to(".ball2",{duration:2, xPercent:100, yPercent:200, scaleY:.5, delay:.5});
gsap.to(".ball2",{duration:1, xPercent:300, yPercent:-100, scaleY:1, delay:2.5});
gsap.to(".ball2",{duration:2, xPercent:700, yPercent:200, scaleY:.5, delay:3.5});
gsap.to(".ball2",{duration:1, xPercent:1000, yPercent:-100, scaleY:1, delay:4.5});
gsap.to(".ball2",{duration:.5, alpha:0, delay:5.5});


// blue 
gsap.from(".ball3",{duration:2, xPercent:100, yPercent:300, scaleY:.5, delay:1, alpha:0});
gsap.to(".ball3",{duration:.5, xPercent:350, yPercent:-300, scaleY:1, delay:2.5});

// purple 
gsap.from(".ball4",{xPercent:500, yPercent:200, scaleY:.5, delay:2.5, alpha:0});
gsap.to(".ball4",{duration:2, xPercent:0, yPercent:0, scaleX:.75, delay:2.5});
gsap.to(".ball4",{duration:.5, xPercent:150, yPercent:-20, scaleY:1, scaleX:1, delay:4.5});
gsap.to(".ball4",{duration:5, scaleY:100, scaleX:100, delay:5.5});