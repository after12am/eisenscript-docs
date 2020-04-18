---
id: example-torus
title: Torus
sidebar_label: Torus
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=1&show=0&wireframe=1';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};

<Editor src="https://after12am.github.io/eisenscript-editor/#B/nY9LDoMwDET3PsVI7LpACahUHCcBQz+0kRKQoBF3rxPBBbqyPDN+tgPPeJvV2Sd3c4BulFJEEQaqrBHMLPWKHaN/fHr2FCRvTfcavVs+PYphGIj8MvGZQCSgbnBBhP9CK2yC0II4xS2J4pQVrFhtizt0JYHVupX2A5eazIqQszJANvRZSGM3dG5yHgUz52sT4S+AvHC8ewB+"/>

code:

```jsx
set maxobjects 16000

{ a 0.3 sat 0.5 } grinder
set background #fff

rule grinder {
  36 * { rz 10 y 0.1 } 36 * { ry 10 z 1.2 b 0.99 h 12 } xbox
}

rule xbox {
  { s 1.1 } grid
  { b 0.7 color #eee a 0.2 } box
}

rule xbox {
  { s 1.1 } grid
  { b 0.7 color #fff a 0.3 } box
}
```
