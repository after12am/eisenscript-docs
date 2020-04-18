---
id: example-steps
title: Steps
sidebar_label: Steps
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/vZThboIwEMe/9yku2ccFKEVxvgAPsD0BSqckCKStmZPw7uu1VIqbukyzIDG59u7/6//KSa5glx8K3qotxIwS0sEBknAORwhomIKEVD80ZLBuqkbAE80o9LBqDoRIlZdC7ltCwPyiCF73FZeECP0Hbhk6iKJ1Ve5WoLaC4wJv5ZCOgkeItWgQ67pejGGMTWMJxhIXM9K9kf4uCHlRaGZRcwEBqL2ooeLv6qbsKWZzMSiOsKTwqdVPVNosehPjQ/sWX4OBZyiaRnhM5nh4zn5Y+QfMC4Ci3Gz/aldgQIIzkrv8MjgPN+wO0Pl10rwuphfuB13muBhCzGy7ZK50+eWkbWNzvZSLuy8hM0usuNiVda7KenPu5q+t8z5FW6L3hsCbTR0BoMMcqQslBgPNNjNE4+AwcLMly6jdiPcgMbozN4rGDFFKLianHPzvhguBAjSc6TrJIDgMLC8Fqa0dtl1Ny2ttiJNnOnGBtRamFntJR8bMlXNb3au3p9hIJI5PAzOj1NMfxb2OmFnwQILLAF8="/>

code:

```jsx
// https://www.flickr.com/photos/33807726@N02/3158021315/

set maxdepth 120

{ x 3.5 z -0.6 s 6 6 0.2 color #0F0 } box

stairsup

// Rules

rule stairsup { //climb three steps
    stair
    { z 1 x -1 } stair
    { z 2 x -2 } stair
    { z 3 x -3 } stairsup
}

rule stairsup { // add corner - turn left
    stair
    { z 1 x -1 } stair
    { z 1 x -1 } corner
    { rz 90 y 3 z 2 x -2 h 10 } stairsup
}


rule stairsup w 0.1 { // add corner - turn left + door
    stair
    { x -3 z 3 } door
    { z 1 x -1 } stair
    { z 1 x -1 } corner
    { rz 90 y 3 z 2 x -2 h 10 } stairsup
}


rule stairsup { // add corner - turn right
    stair
    { z 1 x -1 } stair
    { z 1 x -1 } corner
    { rz -90 y -3 z 2 x -2 h 10} stairsup
}

rule stairsup w 0.1 { // add corner - turn right + door
    stair
    { x -3 z 3 } door
    { z 1 x -1 } stair
    { z 1 x -1 } corner
    { rz -90 y -3 z 2 x -2 h 10} stairsup
}

rule stairsup w 0.15 { // add corner - turn right and left
    stair
    corner
    { rz -90 y 2 z 1 x -2 y -4 h 10 sat 0.9 } stairsup
    { rz 90 y 2 z 1 x -2 h 10 sat 0.9 } stairsup
}

rule stairsup w 0.2 { // terminating door

stair
    { z 1 x -1 } stair
    { z 1 x -1 } corner
    { z 3 x -3 } door
}

// Stair

rule stair {
    { s 1 3 0.2 z 2 } box //step color #FF0
    { s 0.1 3 1 x 4.5 z -0.2 } box //riser
}

rule corner {
    { x -2 z 0.4 s 3 3 0.2 } box
}

rule door { // right opening
    { s 0.2 3 7 x -7 z 0.286 color #FFF } box
    { s 0.2 0.2 0.2 x -6 y -5 z 12 color #F00 } box
}

rule door w 0.2 { // left opening
    { s 0.2 3 7 x -7 z 0.286 color #FFF } box
    { s 0.2 0.2 0.2 x -6 y 5 z 12 color #F00 } box
}
```
