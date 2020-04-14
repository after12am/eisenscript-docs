---
id: reference-preprocessor-commands
title: Preprocessor Commands
sidebar_label: Preprocessor Commands
---

import { Editor } from './components.md';


## #define varname value

This substitutes every occurrence of 'varname' with 'value'.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/U05JTcvMS1VIzs/JLzJWUDZIM+BSRhYzA4oBQVoaF1e1QoWCriFEGKahViEpvwIso4AiYwaVAQA="/>

notation is:

```jsx
// Only hex color is ok now.
#define color3 #0f0
#define color6 #0000ff
```


## #define varname value (float:0-40)

As above, but creates a pane with sliders for each of the variables defined. The values in the float-statement determines the lower and upper slider bounds. Example: '#define angle 14 (float:0-90)' will create a GUI slider for adjusting the angle parameter between 0 and 90.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/U05JTcvMS1UoTk7MSVXQM+WqViiGcmoVkvIrAA=="/>

notation is:

```jsx
#define xxx .5
#define zzz 0.5
```
