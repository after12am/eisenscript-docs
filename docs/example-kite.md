---
id: example-kite
title: Kite
sidebar_label: Kite
---

import { Editor } from './components.md';

<Editor src="https://after12am.github.io/eisenscript-editor/#B/vVZNb9swDL37VxDobUBS2flY3UNPQy897JDeAydmai2OFUhKE9vIfx8p2YmTJpiBDSvQ1rIe3yMpinTwkOJKFgg2kfk8xa3N5sbqRH5kFjVEUXADsJd5Spvh1SYeLBZGqmK+VLvCwuhyW8vio9mJguDx0aCFTXJQi1+4tAbCqRCC38NsiQU+01M0gW9QH0EnRao2+yRf8/Y7GktUz0EN+gCDWMBS5UrDQyzEEbYa19IibdLedyhhMIIKBlPQFUUzYZNxayDijkGgdzl2pKAO6gOEcCF/vI0a9IFVvciqfmRlL7KyB9kexFCIsA62SZmrJCWIxzRr5uGshU+CqMgKTwheeBkxnAAdIRNxyml5gt5EimEcx/eRzqcJGzA0ggxGnZM6uip5z5DKpyhBaYmFTSwVngGKy5+uAbWCN4b7YLytY54QLwXEtOGkS3sPOegLrXqRgof2YnXZ/yMscpQlcD1fpejNYaTN4J0SJb2tM6wDLJGrdzyke1H5fyW7RSHTrTIwIn06HZ3s5wUu13yB4fFxJbWxwAtvLJytAFdsrWk0jG+YGlwqOiBnG/LdBn/Dos6zf191nrMdAjvCXSQMuvvjLxzXdqG4MmRwBaOOZkfytqJLJj8anz33lluX64Z3OueLe+/i5iPkwo+nnJ6RL/8pLPi+RGAS69at2mGhDu0Z/53S4N9INd3+jkzFXfZ/yPRU4bqXBeVF77YWbOYlYVG6YmRafuf4uVfQooA14haM3OzyhCcLuEGWtli2PzvfeObUeD648g+/lL9zb9pegZMhOecvThtYE5MPgkQpAsL8UKSskRqc0k0Ap+HaKULCX6XyegS/ODnGtS57Yaf7/UKWdWlYS5NR51z5lmG4GTMDNVafzE+kNsMGfow05JdOdAZ9fd0izil66pGiMPKOUvdrpNhR/iHUT//h4D2hVubFoiH3Mv7rWpkhhWbav76+kpjZZqjxC3LkxtL5y0CI+9jxMGTw6EQ8Hp/BPpGdbsFpJ9fO1cldebYrVrnac0/eGZAGCmWBPnuobjGltINV8CnNLsmlQapnmM1gj1Ag7dLWRqVyVfrqpFFuVkpvmHqZJZQlRuBhq7QF+sZyFb3nMvfvXFmrkwdkCpoSi7qZvxctu/bfUcIHLlwWBu2wn7hfnj5HaMI7U1zc4v4UvwE="/>

code:

```jsx
// https://www.flickr.com/photos/33807726@N02/3258023102/in/photostream/

#define tail_depth_straighter 22
#define tail_depth_wilder 12
#define tail_extension_count 3
#define tail_ring_count 2

//set maxobjects 16000

// Scene:
//25 * {} randomwalk
// Testing:
{ rx -90 color #900} prekite
{ x -7 y -3 z -6 rz 225 rx 4 color #090} prekite

rule randomwalk {
{x 1 } randomwalk
}
rule randomwalk {
{x -1 } randomwalk
}
rule randomwalk {
{z 1 } randomwalk
}
rule randomwalk {
{z -1 } randomwalk
}
rule randomwalk {
{y 1 } randomwalk
}
rule randomwalk {
{y -1 } randomwalk
}
rule randomwalk w 0.001{
payload
}

rule payload {
{ rx 180 } dome
}

rule dome {
{y 0.5 s 1.001 y -0.5} dome
}
rule dome {
{y 0.5 s 0.999 y -0.5} dome
}
rule dome w 0.05 {
{s 0.2 h 30} prekite
}

// The many orientations and colors of Kite
rule prekite w 0.5{
{rx 2 h 15} prekite
}
rule prekite w 0.5{
{rx -2 h 15} prekite
}
rule prekite w 0.5{
{rz 2 h 15} prekite
}
rule prekite w 0.5 {
{rz -2 h 15} prekite
}
rule prekite w 0.5 {
{ h 15} prekite
}
rule prekite w 0.2 {
{ry 90} kite
}

// The Kite with Torii
rule kite {
eye
{x 4.25 z 4.25 y -2 rx 90 s 3.5 } draw_neckring //first ring
{x 4.0 z 4.0 y -1 rx 90 s 2.9 } draw_neckring //second ring
1 * { x 1 } 2 * { x 1 } 1 * { z 1 } 1 * { hue 5 } tail1
1 * { z 1 } 4 * { x 1 } 2 * { z 1 } 1 * { hue 10 } tail1
1 * { x 1 z 3} 2 * { x 1} 1 * { z 1} 1 * { hue 5 } tail1
}

//tails
rule tail1 maxdepth tail_depth_straighter > tailring {
{ y 0.96 rx 3 s 0.96 b 1.02 sat 0.96} tail1
xbox
}
rule tail1 maxdepth tail_depth_straighter > tailring {
{ y 0.96 rx -3 s 0.96 b 1.02 sat 0.96} tail1
xbox
}
rule tail1 maxdepth tail_depth_wilder > tailring {
{ y 0.96 rz -7 s 0.96 b 1.02 sat 0.96} tail1
xbox
}
rule tail1 maxdepth tail_depth_wilder > tailring {
{ y 0.96 rz 7 s 0.96 b 1.02 sat 0.96} tail1
xbox
}

// interrupt the tail by drawing the ring and then keep simulating extending the tail
rule tailring {
xbox
{x 1.0 z 1.0 y -1 rx 90 s 2 sat 6 } draw_tailring // ring
{ y 0.96 s 0.96 } tailend
}
// Do three more tail extensions
rule tailend maxdepth tail_extension_count > ringend {
xbox
{ y 0.9 s 0.7 } tailend
}

// finish off with some rings at the very end
rule ringend maxdepth tail_ring_count {
{x 4.0 z 4.0 y 1 rx 90 s 8 sat 6 } draw_tailring // ring
{ y 12 s 0.75} ringend
}





// Objects
rule eye {
{x 2.5 z 2.5 y -2 s 6 color #FFF } sphere
{x 2.5 z 2.5 y -3.5 s 4 color #000 } sphere
{x 2.5 z 2.5 y -4.15 s 3 color #F44 } sphere
}

// tails
rule xbox {
box
}

// The Sunflow Torus is not centered so to visualise in SS we need to modify the transform
// change to export setting when exporting to Sunflow for render
rule draw_neckring {
{ x -0.5 y -0.5 z -0.5 s 1.5 1.5 0.2 } box
}

rule draw_tailring {
{ x -0.5 y -0.5 z -0.5 s 1.5 1.5 0.2 } box
}
```
