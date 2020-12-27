---
id: reference-primitives
title: Primitives
sidebar_label: Primitives
---

import { Editor } from './components.md';

## Box

solid box.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/S8qvAAA="/>

notation is:

```jsx
box
```

## Grid

wireframe box.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Sy/KTAEA"/>

notation is:

```jsx
grid
```

## Sphere

the round thingy (as of now this primitive has some issues - e.g. ellipsoids are not working.).

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Ky7ISC1KBQA="/>

notation is:

```jsx
sphere
```

## Line

along x axis, centered in y,z plane.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/y8nMSwUA"/>

notation is:

```jsx
line
```

<!--
## Point

centered in coordinate system.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/y8nMSwUA"/>

notation is:

```jsx
point
```
-->

## Triangle

creates a custom polygon. Specify the coordinates as follows: Triangle[0,0,0;1,0,0;0.5,0.5,0.5]

<Editor src="https://after12am.github.io/eisenscript-editor/#B/KynKTMxLz0kFAA=="/>

notation is:

```jsx
triangle
triangle[0,0,0;1,0,0;0.5,0.5,0.5]
```

<!--
## Mesh

prototype mesh

<Editor src="https://after12am.github.io/eisenscript-editor/#B/y8nMSwUA"/>

notation is:

```jsx
mesh
```
-->

## Cylinder

the symmetry axis will be the current x axis. [Not implemented]

<Editor src="https://after12am.github.io/eisenscript-editor/#B/S67MycxLSS0CAA=="/>

notation is:

```jsx
cylinder
```

<!--
## Tube

polygonal cylinder (will be drawn smoothly as the coordinate system transforms). [Not implemented]

<Editor src="https://after12am.github.io/eisenscript-editor/#B/S67MycxLSS0CAA=="/>

notation is:

```jsx
tube
```
-->

## Squash

crushed shape.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/Ky4sTSzOAAA="/>

notation is:

```jsx
squash
```

