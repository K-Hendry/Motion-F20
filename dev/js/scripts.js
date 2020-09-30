// import * as Demo from './demo.js';

import {gsap} from "gsap";

import {pinkBallAnimation} from './pinkBall.js';

import {greenBallAnimation} from './greenBall.js';

import {purpleBallAnimation} from './purpleBall.js';

//console.log(pinkBallAnimation);

var mainTL = gsap.timeline();

mainTL.add(pinkBallAnimation())
    .add(greenBallAnimation())
    .add(purpleBallAnimation())
