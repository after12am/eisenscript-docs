---
id: example-frames
title: Frames
sidebar_label: Frames
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/hZBNDoMgEEb3nOK7wBAwIW2PgynGRU0b1IRquHsHatNqqC74mcybNwMz2tFBobcDlDyjh5YGEb4Swo83xxd0NlzdY2hRKcwCmJlS8mTgJ2iFmoNL1nDegiXveqDxtnMiLqYc/Qg0t9L5DIDBlLaI+h7+E7RH0KGDVo4F0VLldFrP4iAFgvaI0iAFYjvIJ53Q3CaUXrMhCj/yJejQQStHfAE="/>

code:

```jsx
/*
  @author Mikael Hvidtfeldt Christensen
*/
{ hue 0 sat 0.8 s 1.5 } r2

rule r2 maxdepth 20 {
  { s 0.75 rz 10 b 0.9 hue 20 a .8  } r2
  frame
}

rule frame {
  { s 0.1 1.1 0.1 x  5 z  5 } box
  { s 0.1 1.1 0.1 x  5 z -5 } box
  { s 0.1 1.1 0.1 x -5 z  5 } box
  { s 0.1 1.1 0.1 x -5 z -5 } box

  { s 1.0 0.1 0.1 y  5 z  5 } box
  { s 1.0 0.1 0.1 y  5 z -5 } box
  { s 1.0 0.1 0.1 y -5 z  5 } box
  { s 1.0 0.1 0.1 y -5 z -5 } box

  { s 0.1 0.1 1.0 y  5 x  5 } box
  { s 0.1 0.1 1.0 y  5 x -5 } box
  { s 0.1 0.1 1.0 y -5 x  5 } box
  { s 0.1 0.1 1.0 y -5 x -5 } box
}
```
