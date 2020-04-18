---
id: example-city
title: City
sidebar_label: City
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/pVVLj5swEL7zK0aq9tIKMLDsppceekh76qlS26NDJgHFwRQbJdlV/nvHxs7mQR6bJgJh4vleYzsKNUx4sZi3squn8GE8HgfBK6whfISNub1AyKIcFCT0ZVFCL8y4kEK2djpsYcl1EMQxfOtBGsFrdCjMoLA9FMbsxSKWeBBG4y1M5DoILMySLxCe1k8wEbJYqCBoO4GGBF4DoE+Swkcw6AmUHYIpdq82e69UIyodbC3iVAL3GrSEAmuNLRTdBIH3ml+wlTDBmWyRZlf1HFTBBdrqEHSJNeiW10pwjTYwWFW6dGGQMiQMOQPZYMt1JWtbqMtKwYpvgAtBRQoViKpG6JrI/v477EX2Bu0zrCAnq+spNgSfwRdQfztOonrrr3tJxpnpSZSZmH2WLU6dJh/AUVVqq1j0bOKLH13ZRFBoh3Xb+1SlQ6okJTc/Jhi0cyxsg0LI1ak0G9+f/4rPMrJoZBaoF1pseH1FZu8wMuv6Tea8RTwuvDPAnuBI15LPacnya9KSAWlN1zZioLkmwB/SjWlwoJVFKSE7iTsjZxSz6HPubyNLNHLb2UyU9U/ZfKVBvxNT9gAlVvNSmxnoN7efRbg0KWdxzuB7/MtRKSu+v1JiyEDRlvOHxvYyBnwCVVYzjVOHtrbH2Mbe70HOdsjhCXLYQ4ceO3sndsri5DbVqX06g2z9PxA2nXbNhaCTm+kSd+VEl5i2X7KygvR6I4eQ9hdM6leple+90Bnr7Ni0wK+mIwnprlXZeX8stwZZvmtV5gLN9//hztk84RhcDpYkfBcLgY7YZWOXG3dozLduZAN/3lGyK8beOG4xdp3lHw=="/>

code:

```jsx
// https://www.flickr.com/photos/33807726@N02/3152555332/

set background #FFF

{ x -4 y -4 z -0.5 s 1 1 0.1 z 0.5 color #FFF } mat

// Ground plane

{ x -0 y -0 z -0.5 s 100 100 0.01 color #000 } box



// make 6x6 blocks

rule mat {
    12 * { x 1 hue 0 } 12 * { y 1 hue 0 } split
}

// do a z -0.5 to center cube around zero before doing scale

// - then translate back with z 0.5 at end of operation

// this way all bases line up.

// X-split

rule split w 5 maxdepth 3 > square {
    { z -0.5 s 1/3 1 1.3 x -1 color red z 0.5 } split
    { z -0.5 s 2/3 1 0.7 x 1/4 color blue z 0.5 } split
}

rule split w 5 maxdepth 3 > square {
    { z -0.5 s 2/3 1 1.3 x -1 color orange z 0.5 } split
    { z -0.5 s 1/3 1 0.7 x 1/4 color yellow z 0.5 } split
}



// Y-split

rule split w 5 maxdepth 3 > square {
    { z -0.5 s 1 1/3 0.8 y -1 color cyan z 0.5 } split
    { z -0.5 s 1 2/3 1.0 y 1/4 color green z 0.5 } split
}

rule split w 5 maxdepth 3 > square {
    { z -0.5 s 1 2/3 0.8 y -1 color magenta z 0.5 } split
    { z -0.5 s 1 1/3 1.0 y 1/4 color purple z 0.5 } split
}


// No split

//rule split w 0.2 { square }

rule square {
    { z -0.5 s 0.95 0.95 0.8 z 0.8 } box
    onTopBox
}

// 20% height boxes

rule onTopBox { // 50/50 H/W
    { s 0.5 0.5 0.2 z 3 sat 0 } box
}

rule onTopBox { // 50/50 H/W + shifted
    { x 0.1 y 0.1 s 0.5 0.5 0.2 z 3 sat 0 } box
}

rule onTopBox { // 30/50 H/W - shifted
    { x -0.1 y -0.1 s 0.3 0.5 0.2 z 3 sat 0 } box
}

rule onTopBox { // 20/10 H/W + shifted
    { x 0.1 y 0.1 s 0.2 0.1 0.2 z 3 sat 0 } box
}

// 50% on top boxes

rule onTopBox { // 10/10 H/W + shifted
    { x 0.1 y 0.1 s 0.1 0.1 0.5 z 1.5 sat 0 } box
}

rule onTopBox w 2 { // 50/50 H/W
    { s 0.5 0.5 0.5 z 1.5 sat 0 } box
    onTopBox2
}


// boxes on top of boxes

// 20 % height

rule onTopBox2 { // 30/30 H/W + shifted
    { x 0.05 y 0.05 s 0.3 0.3 0.2 z 5.5 color #FF0 } box
}

rule onTopBox2 { // 30/30 H/W - shifted
    { x -0.05 y -0.05 s 0.3 0.3 0.2 z 5.5 color #FF0 } box
}

// 80% height

rule onTopBox2 { // 10/10 H/W + shifted
    { x 0.05 y 0.05 s 0.1 0.1 0.8 z 1.7 color #F00 } box
}

rule onTopBox2 { // 10/10 H/W - shifted
    { x -0.05 y -0.05 s 0.1 0.1 0.8 z 1.7 color #F00 } box
}
```
