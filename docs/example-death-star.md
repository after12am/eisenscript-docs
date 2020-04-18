---
id: example-death-star
title: Death Star...?
sidebar_label: Death Star
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/nZHdSsQwEIXv8xQH9k5oSbKNro+T/im6GkkabDf03Z1J29XCImghcDIz50tOGroBb3Z09UvXDAGmklIEqtW2eX3yLr63OFSmEiIhoDxihrVC+HjuSCAJ0KcM7sB9WT7igkJjImloVuVG487O42CsWWY0/AWS2l79xW/pQJ45PfzP3/f94pnXAF7hE5VcU8TajVm0m0gYieAnHG/4VEV9r3Etai5usL1Vix9Tif3bns8i34n/Qdt9DM8cZkNMKIgxQlOs+ftagcUOkK68+Dsv44qFF2/y4p4X8nb1B6hS5yXLew7HT5zNXw=="/>

code:

```jsx
// Master sphere

set maxobjects 5400
set background #454

{ s .3 } aa

rule aa {
    15 * { s 0.9 z -2 y 0.5 } 1 * { color #5a5 s 0.92 rz 0 } r1
    15 * { s 0.9 z -2 y 0.5 } 1 * { color #aaa s 0.87 rz 0 } r1
    15 * { s 0.9 z -2 y 0.5 } 1 * { color #fff } r1
}

rule r1 w 40 {
    ubox
    dbox
    { x 1 ry 3 } r1
}

rule r1 w 14 { r2 }

rule r2 w 10 {
    { x 1 ry 3 } r2
}

rule r2 { r1 }

rule dbox w 8 maxdepth 15 {
    { y -1 rx 2.9 } dbox
    sbox
}

rule dbox { }

rule ubox w 8 maxdepth 15 {
    { y 1 rx -2.9 } ubox
    sbox
}

rule ubox { }

rule sbox {
    { s 1.2 1.2 0.6 ry 5 } box
}
```
