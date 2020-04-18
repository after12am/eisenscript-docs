---
id: example-octopod
title: Octopod
sidebar_label: Octopod
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'docsite=1&doOptimize=1&show=0';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};

<Editor src="https://after12am.github.io/eisenscript-editor/#B/lY6xDsIwDER3f8XNlUqTVkVlQ2Jh4SNSNSgVpUVJCoGo/44VEEwMDLbO5/OTi4yArZq9mSwO/UnpAftr3/mjHjqPnbG983p0eqSsIKc9zip0+uINpBBEUiBDhL2jWsMpD7HaYMHXZsVjmgwqgZYTzTvZ8MpKIjsPmgVuKAUiPxThEsg+UPNZDRu4Beakg1dAcqTkqtlsp0DLb1Ai5R9U/g8rEi1P"/>

code:

```jsx
/*
  @author Mikael Hvidtfeldt Christensen
*/
set maxdepth 100

10 * { ry 36 sat 0.9 } 10 * { ry 10 } 1 * { h 30 b 0.8 sat 0.8 } r1

rule r1 w 20 {
  { s 0.9 rz 5 h 5 rx 5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 w 20 {
  { s 0.99 rz -5 h 5 rx -5 x 1 } r1
  { s 1 0.2 0.5 } box
}

rule r1 {

}
```
