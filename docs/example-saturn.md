---
id: example-saturn
title: Saturn
sidebar_label: Saturn
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=1&show=0';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};

<Editor src="https://after12am.github.io/eisenscript-editor/#B/jY9NDoIwEIX3PcVL3JnYtICEc3ADok1cIJhBEqDp3ZlW5C8aTRedmff19Y1FgxgOTfFsqRKC2tJMDawANI6w6HGSZ6ZeXYOMJ0qqDLjUZU04GOUPvNHjZshsXiagAZFiMU7DkHpoNdt1SGTEpkr6ILkWboqR61WEjm83m0beLNRDmPOvK3JR+6B+J+Odp9qR7yhchyw25MymtamorvV9WfoznW7pX3jyHy7cCA=="/>

notation is:

```jsx
{ s 3 } saturn

rule saturn {
  1 * { y -.5 } 1 * { s 8 y 0.08  color #e0e0e0  } sphere
  1 * { y -.4 rz 20 } 36 * { ry 10 } 1 * { x 4.2 s 0.3 } R1
}

rule R1 {
  1 * { x 1 } 1 * { y 2 } 3 * { z 1 } sph
  1 * { x 2 } 3 * { y 1 } 3 * { z 1 } sph
  1 * { x 3 } 1 * { y 2 } 0 * { z 1 } sph
}

rule sph {
  { s 0.8 color random } sphere
}

rule sph {
  { s 0.6 color random  } sphere
}

rule sph {
  { s 0.4 color random  } sphere
}

rule sph {

}
```
