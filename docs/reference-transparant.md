---
id: reference-transparant
title: Transparant
sidebar_label: Transparant
---

import { Editor } from './components.md';

## a / alpha [float]

Multiplies the 'float' value with the alpha color parameter for the current state. Alpha is measured from 0 to 1 and is clamped to this interval. An alpha value of zero is completely transparant, and an alpha value of one is completely opaque.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/q1ZIVDDQM1KoVUjKrwAA"/>

notation is:

```jsx
{ a .2 } box
{ a 0.2 } box
```
