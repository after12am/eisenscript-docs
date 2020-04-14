---
id: reference-color-space-transformations
title: Color Space Transformations
sidebar_label: Color Space Transformations
---

import { Editor } from './components.md';

## hue &#091;float&#093;

Adds the 'float' value to the hue color parameter for the current state. Hues are measured from 0 to 360 and wraps cyclicly - i.e. a hue of 400 is equal to a hue of 40.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVMgoTVUwNlOoVUjKrwAA"/>

notation is:

```jsx
{ x 1 h 36 } box
{ x 1 hue 36 } box
```

## saturation &#091;float&#093;

Multiplies the 'float' value with the saturation color parameter for the current state. Saturation is measured from 0 to 1 and is clamped to this interval (i.e. values larger then 1 are set to 1).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVChOLFHQs1SoVUjKrwAA"/>

notation is:

```jsx
{ x 1 sat .9 } box
{ x 1 saturation .9 } box
```

## brightness &#091;float&#093;

Multiples the 'float' value with the brightness color parameter for the current state. Brightness is measured from 0 to 1 and is clamped to this interval. Notice that parameter is sometimes called 'V' or 'Value' (and the color space is often refered to as &#091;HSV&#093;(https://en.wikipedia.org/wiki/HSL_and_HSV)).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVEhS0DNVqFVIyq8AAA=="/>

notation is:

```jsx
{ x 1 b .5 } box
{ x 1 brightness .5 } box
```

## color &#091;color&#093;

This commands sets the color to an absolut color (most other transformations are relative modifications on the current state). Colors are specified as text-strings parsed using Qt's &#091;color parsing&#093;(http://doc.trolltech.com/4.3/qcolor.html#setNamedColor), allowing for standard HTML RGB specifications (e.g. #F00 or #FF0000), but also SVG keyword names (e.g. red or even lightgoldenrodyellow)

<Editor src="https://after12am.github.io/eisenscript-editor/#B/q1ZIzs/JL1JQTrEwNjFNU6hVSMqvAAA="/>

notation is:

```jsx
{ color #00f } box      // 3-digit hex is ok
{ color #d8345f } box   // 6-digit hex is ok
{ color white } box     // css color is ok
```

## blend &#091;color&#093;&nbsp;&#091;strength&#093;

Blends the current color with the specified color. A strength of 1.0 will weight the current and new color evenly. Colors are mixed in HSV color space. Hue's will wrap around. Saturation and Value are clamped to &#091;0,1&#093;. Notice that since the mixing is performed in HSV space, the result may seems counterintuitive. For instance blending a red color into a blue color, may have intermediate green steps (since you are change the hue - so you will move around on the HSV color circle).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1TQUqhWSM7PyS9SUE4zMFCoVTAGC1UoGCok5aTmpSgoG6QZKOgZAmWS8isA"/>


notation is:

```jsx
{ x 1 blend #0f0 .1 } box
```

## random

Chooses a random color (using the current colorpool<!-- - see below -->).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVEjOz8kvUihKzEvJz1WoVUjKrwAA"/>

notation is:

```jsx
{ x 1 color random } box
```

<!--
set color random Chooses a random color (using the current colorpool - see below).
set colorpool &#091;scheme&#093;
Determines how random colors are drawn. The possible schemes are:
randomhue - chooses a random hue, with full brighness and saturation.
randomrgb - three independent random r,g, and b values.
greyscale - random r=g=b.
image:filename.png - color sampling. Chooses a random pixel from the specified image.
list:orange,white,grey - chooses from the specified list of colors. A color may appear multiple times to increase its weight.
-->
