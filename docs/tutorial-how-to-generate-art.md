---
id: tutorial-how-to-generate-art
title: How to Generate Art
sidebar_label: How to Generate Art
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=1&show=0';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};


It's creative because I can't imagine the goal from the beginning. You need to tweak again and again. Let's get to start from [Octopod](https://www.flickr.com/photos/syntopia/1278122565).

Octopod is like this.

![image](/eisenscript-docs/build/img/tutorial-how-to-generate-art-before.png)

Above will be like this.

![image](/eisenscript-docs/build/img/tutorial-how-to-generate-art-after.png)

Here is the starting point.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lYzBCsIwDIbveYr/LEzSjcp8nA0LO0yUtGK19N39qeJOHjwk5E++fDEknKd8Cte0wKmKOMUOBfbAcECcEnR/RMW25sTY0oJBMZMYP+TIkzkRu62BA+7oFUVANjaRPeH55mGZLdPTHt6AI9KzPJfzJUv9LWqm7qvq/nEVkfoC"/>

code is:

```jsx
set maxdepth 100

10 * { ry 36 sat 0.9 } 30 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 a 0.3 } r1

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {}
```

I generate an object while rotating it around the X-axis. Too close to the object.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lY7LCgIxDEX3+Yq7FkaaDpXxczpYmIWitBWrpf9umhl0J7gI5HHuISlkXHw5hVtewMYQscUOFbFgNGjwnijez0EaVIIw6/mJ8YDkM8z+KNh3zT3FOi1dMQsxbeQkp8jUNmVkPGCNeiuSquILToKuP+BQxKSRFWBBrJST5Xwtv0RqGj6q4R9XbW8="/>

code is:

```jsx {3-7}
set maxdepth 100

12 * { rx 30 } aa

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {}
```

I move away from the object. How is this? Is this better?

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lY7LCsIwEEX38xV3LbTMpETaz0kx0IWipBWjof/eSVLqTnA3j3MPd/YLbi5e/GOZIMxECTO4NVgxjkThefU6IBEgBickhIiO9e0crTvgXAW4Am90Z8xuUc+g4PcsOSdlm7JkVKLfyV5fQQ5lELxguHhrpQHhA6tBmytYRDWVSAWktObW5ub3+EtUTM2hav5xpXUD"/>

code is:

```jsx {3-7}
set maxdepth 100

{ s 0.2 } bb

rule bb {
  12 * { rx 30 } aa
}

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {}
```


<Editor src="https://after12am.github.io/eisenscript-editor/#B/lY7LCsIwEEX38xV3LbTMpETaz0kx0IWipBWjof/eSVLqTnA3j3MPd/YLbi5e/GOZIMxECTO4NVgxjkThefU6IBEgBickhIiO9e0crTvgXAW4Am90Z8xuUc+g4PcsOSdlm7JkVKLfyV5fQQ5lELxguHhrpQHhA6tBmytYRDWVSAWktObW5ub3+EtUTM2hav5xpXUD"/>

code is:

```jsx {3-7}
set maxdepth 100

{ x -10 s 0.2 } bb

rule bb {
  12 * { x 3 rx 30 } aa
}

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {}
```

Next, I sharpen the tips.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lc5BCoMwEAXQfU7x1wVlJjZFjxNRcFFpiZamFe/uJLFaCi10l8z8efyhHdFb37TXsQMTKTVhAOUaM+paKXc7t/LApADWOGCC8yhI1taqeQ1YmwKUAg8UJwx2FKeS4D7mcMfx1wWklkS5JktZOd5Ix7hDU3RTpQruCSOHJlQw8CLFkxTg2JpyE5pf/C8oStlGZf9YgXF6n2j0DY5vevkN1x+4fuEL"/>

code is:

```jsx {5}
set maxdepth 100

{ s 0.2 } bb

rule bb {
  12 * { rx 30 } aa
}

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {
  r2
}

rule r2 md 4 {
  { s 0.8 rz -5 h 5 rx -5 x 1 } r2
  { s 1 0.2 0.2 } box
}
```


I randamize color this time. Looks cool!

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lc/BDoIwDAbg+57iP5tAtuEMPM4QEg7gTME4Jby73aZgTDTx1nZ/v3RjO2GwvmnPUwclpRAzRshcY0FdC0GXvuUCswCUxg4zyKOQOLreEcieGjdw1lqxPNPWprRM6RuKA0Y7MVpxcBtzxW3suiDWnCifyZKfSK0kKVyhZXTTfRXoDsOLJtxj4FmKKymg4hdkbsI3nP8FRSlbqewfKzCkt4nG0GD/ppffcP2B6xf+AA=="/>

code is:

```jsx {23-30}
set maxdepth 100

{ s 0.2 } bb

rule bb {
  12 * { rx 30 color random } aa
}

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {
  r2
}

rule r2 md 4 {
  { s 0.8 rz -5 h 5 rx -5 x 1 } r2
  { s 1 0.2 0.2 } box
}
```

Put two objects and change the size.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lZBBDoIwEEX3PcVfm0DaYg0cpwgJC7BmwFhtuLtDi5CYaOJu5vfNy0zHdsJgfdNepw5KSiECPLIjRshcGcyo6xghRTolgm59ywWCAJTGAQHkUUicXe8IZC+NG5i1VswrbW2iZaIfKE4Y7cTSisE95orb2HWLsWaiXMmSn0htSlK4Q8voDXG/CvSE4UGz7GN4cZVGEqDiCTKPhzn/SxRN2abK/nEtGtJ7ojE0/IG7vfwm1x9y/Za/AA=="/>

code is:

```jsx {3-4}
set maxdepth 100

{ x -4 s 0.15 } bb
{ x  4 s 0.2 } bb

rule bb {
  12 * { rx 30 color random } aa
}

rule aa {
  10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1
}

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {
  r2
}

rule r2 md 4 {
  { s 0.8 rz -5 h 5 rx -5 x 1 } r2
  { s 1 0.2 0.2 } box
}
```
