---
id: reference-rule-modifiers
title: Rule Modifiers
sidebar_label: Rule Modifiers
---

import { Editor } from './components.md';

## maxdepth [integer]

Rule Retirement.Sets the maximum recursive for the rule. The rule would not execute any actions after this limit has been reached.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVKhVCDLk4ioqzUkFMhRyU4BC1VwKQMnk/Jz8IoWixLyU/FygqqT8Cq5aAA=="/>

notation is:

```jsx
rule R1 md 1 {
  box
}

rule R1 maxdepth 1 {
  box
}
```

## maxdepth [integer] > [rulename]

Rule Retirement with substitution. Sets the maximum recursive for the rule. After this limit has been reached [rulename] will be executed instead this rule.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/CzLk4ioqzUlVCDJUyE1RMFSwUwgyUqjmUlCoVqgAcmsVkvIrwLzk/Jz8IoWixLyU/FygcJAhVy1MK0xDJVADRJlyWloaVG8tAA=="/>

notation is:

```jsx
rule R1 md 1 > R2 {
  box
  R1
}

rule R1 maxdepth 1 > R2 {
  box
  R1
}
```

## w / weight [float]

Ambiguous rules.If several rules are defined with the same name, a random definition is chosen according to the weight specified here. If no weight is specified, the default weight of 1 is used.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/M1bQUqhWqFAwVKhVCDLk4ioqzUkFMhTKFQz0jBSquRQUkvIruGpRJSzAEtUKyfk5+UUKymlpaUDdYHUA"/>

notation is:

```jsx
rule R1 w 0.2 {
  box
}

rule R1 weight 0.8 {
  box
}
```
