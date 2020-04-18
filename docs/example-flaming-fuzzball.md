---
id: example-flaming-fuzzball
title: Flaming Fuzzball
sidebar_label: Flaming Fuzzball
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=1&show=0&wireframe=1';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};


<Editor src="https://after12am.github.io/eisenscript-editor/#B/lZBBjsIwDEX3OYXXlVK3gQwablOFQKoWEjnplFL17mNCFxXSSMMu3/7v2zEWwqUU4hFxHMfy3Lemo9L4Kwbnk494Ie9/bO9Nh7v91+GgKqU1tjcM3vcyJhpMGsjG6ZYcigKFmCFCVSpYoGmEoKG3/IBrcz/ZkBzsYRYAM0xQPy1kViW3kriruahy1jfQA3Ya3GChrl7BW5fc2OSbb1lXiKHtbB7NhoLhx4uYQK/wAhdqT/8A5McEL/PpjL8QvlAGVJWBZzifmgt11vf8cZY5Wiy/"/>

code:

```jsx
/*
https://www.flickr.com/photos/groovelock/3467720255/in/pool-structuresynth/
*/

{ s 0.2 } aa

rule aa maxdepth 4 {
  { y 1 } arc
  { y -1 } arc
  { ry 15 y 2 s 0.9 rz 35 hue 10 } aa
  { ry 15 y -2 s 0.9 rz -35 hue 10 } aa
}

rule spike {
  35 * { z 0.9 ry 5 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry -5 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry 10 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry -10 s 0.9 } grid
}

rule arc {
  20 * { ry 12 }
  1 * { x 10 }
  spike
}
```
