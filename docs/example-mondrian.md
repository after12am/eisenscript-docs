---
id: example-mondrian
title: Mondrian
sidebar_label: Mondrian
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/rVLLboMwELzzFSP1lqqOIQlVLpWqtCiXnNofMOAES4BTAw00yr93gQREHq0q1UjG3pnZ2bU9HlkrnYZGiRSLwpcMq+UCDuePzLKWIoPAWu5gZBpKo9IN/GKTMcas0dhKjkLLMkUscdpibwHjMd4jiUyVWItAZtBr5BQIyINg4dC0R4kHzmb4an+mwpzj0IP3t0GK2v2uGlLLAbUamvTg4Vi4cLCDg0SUodzmES2fEJ66eNvGKodKc418pxGJ+JO6USmVFyojg1zptLHJwNlkMoFNXzmorkZc1z0inDnuf/hXF/52V0F15m93FVTX/fdkSNvm1lSGJhxEWmeyfgFGpKFOEOhYG9Zq2vra3HV27rQw7jyP0yCH7KMQRnYutxV8yqfPzl8Unue9UqNXFPVB/qCiMVBRwy9G7JpnbkQiwxPWpGvXXT7O5rN2qg/X12UX5xRi1LQNH7y5ff4LA2cMu2a0tIZRXeS4ZPQ5Dt8="/>

notation is:

```jsx
/*
Mondrian Cube. MHC 2007.

Has a few rendering bugs...
*/
mondrian

rule mondrian {
  // The six faces of the cube
  a2
  { x -0.5 z -0.5 ry 90 } a2
  { x +0.5 z -0.5 ry 90 } a2
  { z -1 } a2
  { y +0.5 z -0.5 rx 90 } a2
  { y -0.5 z -0.5 rx 90 } a2
}

rule a2 w 2 maxdepth 2 > d {
  // Split into two halves in x direction
  { s 0.333 1 1 x -1 } a2
  { s 0.666 1 1 x 0.26 } a2
}

rule a2 w 2 maxdepth 2 > d {
  // Split into two halves in y direction
  { s 1 0.333 1 y -1 } a2
  { s 1 0.666 1 y 0.26 } a2
}

rule a2 { d }

// This rule chooses a random color.
rule d {
  { s 1 1 0.02 color #FF0000 } square
}

rule d {
  { s 1 1 0.02 color #0404A2 } square
}

rule d {
  { s 1 1 0.02 color #FFFE33 } square
}

rule d w 2 {
  { s 1 1 0.02 color #FFFFFF } square
}

// Draws a framed square
rule square {
  { s 0.95 0.95 1 } box
  { s 0.05 1.00 1 b 0 x -10 } box
  { s 0.05 1.00 1 b 0 x  10 } box
  { s 1.05 0.05 1 b 0 y -10 } box
  { s 1.05 0.05 1 b 0 y  10 } box
}
```
