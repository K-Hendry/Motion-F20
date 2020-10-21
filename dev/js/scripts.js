import {gsap} from "gsap";

// import {indexHeaderPin} from "./index/index-header.js";
// import {indexDesignAnim} from "./index/index-design.js";
// import {indexPhotoAnim} from "./index/index-photo.js";
import {circlesGrowAnimation} from "./svg/k-color.js";
import {loadAnimation} from "./svg/load.js";


// indexHeaderPin();
// indexDesignAnim();
// indexPhotoAnim();
// kFadeAnimation();

const mainTL = gsap.timeline()
mainTL.add(circlesGrowAnimation())
// mainTL.add(loadAnimation());