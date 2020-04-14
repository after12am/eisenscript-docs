---
id: reference-transformations
title: Geometrical Transformations
sidebar_label: Geometrical Transformations
---

import { Editor } from './components.md';


## x &#091;float&#093;

X axis translation. The float argument is the offset measured in units of the local coordinate system.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhQMFSoVUjKrwAA"/>

notation is:

```jsx
{ x 1 } box
{ x -.1 } box
{ x 2.1 } box
```

## y &#091;float&#093;

Y axis translation. The float argument is the offset measured in units of the local coordinate system.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhUMFSoVUjKrwAA"/>

notation is:

```jsx
{ y 1 } box
{ y -.1 } box
{ y 2.1 } box
```

## z &#091;float&#093;

Z axis translation. The float argument is the offset measured in units of the local coordinate system.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhSMFSoVUjKrwAA"/>

notation is:

```jsx
{ z 1 } box
{ z -.1 } box
{ z 2.1 } box
```

## rx &#091;float&#093;

Rotation about the x axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqUDAxVahVSMqvAAA="/>

notation is:

```jsx
{ rx 45 } box
{ rx 90.0 } box
```

## ry &#091;float&#093;

Rotation about the y axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqVDAxVahVSMqvAAA="/>

notation is:

```jsx
{ ry 45 } box
{ ry 90.0 } box
```

## rz &#091;float&#093;

Rotation about the z axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqUjAxVahVSMqvAAA="/>

notation is:

```jsx
{ rz 45 } box
{ rz 90.0 } box
```

## s &#091;float&#093;

Resizes the local coordinate system. Notice that the center for the resize is located at the center of the unit cube in the local system (at (0.5,0.5,0.5)

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVihW0DNVqFVIyq8AAA=="/>

notation is:

```jsx
{ x 2 s 2 } box
{ s .5 } box
```

## s &#091;float&#093;&nbsp;&#091;float&#093;&nbsp;&#091;float&#093;

Resizes the local coordinate system. As above but with separate scale for each dimension.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVihW0DOFolqFpPwKAA=="/>

notation is:

```jsx
{ s .5 1 1 } box
{ s 1 .5 1 } box
{ s 1 1 .5 } box
```

## m &#091;f1&#093; ... &#091;f9&#093;

Applies the specified 3x3 rotation matrix to the transformation matrix for the current state. About the argument order: [f1],[f2],[f3] defines the first row of the matrix.

A translation moves every point by a fixed distance in the same direction.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/q1bIVTBUMFAw4lIAAgMg2xDKArFrFZLyKwA="/>

notation is:

```jsx
// Unfortunately this doesn't work now.
{ m 1 0 2
    0 1 0
    0 0 1 } box
```

A rotation is a transformation that is performed by "spinning" the object around a fixed point.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/q1bIVTBUMFAw4FIAAgMFPVNjBV09C1MY18IULFSrkJRfAQA="/>

notation is:

```jsx
{ m 1 0 0
    0 .53 -.85
    0 .85 .53 } box
```

A scaling is a linear transformation that enlarges or diminishes object.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/q1bIVTBSMFAw4FIAAgMQG8oCsWsVkvIrAA=="/>

notation is:

```jsx
{ m 2 0 0
    0 2 0
    0 0 2 } box
```


<!--
fx
Mirrors the local coordinate system about the x-axis. As above the mirroring planes is centered at the cube.
fy
Mirrors the local coordinate system about the y-axis.
fz
Mirrors the local coordinate system about the z-axis.
-->
