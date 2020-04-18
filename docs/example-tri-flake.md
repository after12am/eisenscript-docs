---
id: example-tri-flake
title: Tri Flake
sidebar_label: Tri Flake
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/jY5RCsIwEET/c4q5QONuKkWP0+JCBEVJUgyW3N2NkKIfYgNJYHiz+6IkXMd8knvyYDYmOL3zRRAcFgM9S3iiGwgh40jI6BgRbtfDz4I9oSi6gls5PvwEVy6wKU2GP2SGWmLlI8g6AtdPxz/8Ocl0y19LtpE9/SObSQuaTwRbLVd1soQ4phpgqm/Bu/kC"/>

code:

```jsx
// https://www.flickr.com/photos/groovelock/3206090371/in/pool-structuresynth/

set maxdepth 11

r2

rule r2 {
    {rz -60 rx 90 x -1 s 2/3 hue 40 } r2
    {rz 60 rx 90 x -1 s 2/3 hue 40 } r2
    {rz 180 rx 90 x -1 s 2/3 hue 40} r2
    r1
}

rule r1 {
    {rz 60 x 1/3 s 0.20 1 0.2 } whitebox
    {rz 180 x 1/3 s 0.20 1 0.2 } whitebox
    {rz 300 x 1/3 s 0.20 1 0.2 } whitebox
}

rule whitebox {
    {s 1.00 hue 0.0 sat 1.0 b 1.0} box
}
```
