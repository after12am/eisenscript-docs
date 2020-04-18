---
id: example-nabla
title: Nabla
sidebar_label: Nabla
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/jZDRCsIgGIXvfYpzHTR0ZdFr9AZbSgtWhi5yk717vzakwaIQxuH3+446pzs4rRXknjnK18orfe8aCM6YwAoBHmvB0acvRshpuM25/8hDypuULTkHjhq8KGl4FIzZR6spIDBA1cYngxc7WE8FiRm/UjJSsfEHR20D/sSW6p76cm46Inh08s5bpY6Ak2mNha1uylzhUNKK1xtByJzPXXJS6afQkS5NBK3Z4QtKiI/ORpmNFw=="/>

code:

```jsx
set seed 57
set maxdepth 10

1 * { x -10 y -10  } 5 * { x 4 } 5 * { y 4 } 5 * { z 4 } 3 * { ry -90 b 0.2 } R1

rule R1 {
  dbox { z 0.6 rx 5 } R1
}

rule R1 {
  dbox { z 0.5 rx -90 } R1
}

rule R1 {
  dbox { z 0.6 rz 90 } R1
}

rule R1 {
  dbox { z 0.6 rz -90 } R1
}

rule R1 weight 0.01 {

}

rule dbox {
  { color random s 2 2 0.5 } box
}

rule dbox weight 0.5 {
  { ry 90 s 0.5 1 1 } R1
}

rule dbox weight 0.5 {
 { rx 90 s 0.5 2 1 } R1
}
```
