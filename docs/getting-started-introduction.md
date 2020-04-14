---
id: getting-started-introduction
title: Introduction
sidebar_label: Introduction
---

export const Editor = ({src}) => {
  var ss = require('url');
  var parsed = ss.parse(src);
  parsed.search = 'doOptimize=1&show=0';
  return (
    <iframe class="demo" src={ss.format(parsed)}></iframe>
  )
};


EisenScript is a programming language designed by Mikael Hvidtfeldt for generating 3d structures. This language shows you that even a simple system has a big possibility to generate surprising and complex structures, and then brings a big amazing to you.

<Editor src="https://after12am.github.io/eisenscript-editor/#B/hZDtCsIgFIb/exXvDSg6kOpyjFkLGoTbwCbee0dblMvaD784j895NaCbLCQGM0KKPQYooRHhGsbcdLW0QW98a29jh0YiMCAQJcVOw81QEkc6HLKG6gYked4HTs70lsXFlE8fAkWtVF49oDGnKeLsLu1vhP9F+LaFl5aFUULmehr3epgKsg5TItUwFeQrzKue2NzJV9+0Qmo/80b4toWXlvgA"/>

A set of those structures, you would get, has often been called ”generative art” for having both organic and mechanical in itself. If you want to create ”generative art” intuitively, this powerful language will be your best friend.

Here are a couple of deliverables.

![image](/img/octopod.png)

![image](/img/flaming-fuzzball.png)

Did you feel excited? I introduce you the world of EisenScript.


# Notes

This is a javascript implementation for generating in real time in your browser. Original implementation is included in Structure Synth authored by Mikael Hvidtfeldt.

# License

© 2013-2020, Satoshi Okami. Released under the MIT License.
