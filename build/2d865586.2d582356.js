(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return s})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return d}));var o=a(1),i=a(6),n=(a(0),a(130)),r=a(93),s={id:"reference-transformations",title:"Geometrical Transformations",sidebar_label:"Geometrical Transformations"},c={id:"reference-transformations",title:"Geometrical Transformations",description:"import { Editor } from './components.md';",source:"@site/docs/reference-transformations.md",permalink:"/eisenscript-docs/build/docs/reference-transformations",editUrl:"https://github.com/after12am/eisenscript-docs/edit/master/docs/reference-transformations.md",sidebar_label:"Geometrical Transformations",sidebar:"someSidebar",previous:{title:"Primitives",permalink:"/eisenscript-docs/build/docs/reference-primitives"},next:{title:"Color Space Transformations",permalink:"/eisenscript-docs/build/docs/reference-color-space-transformations"}},l=[{value:"x [float]",id:"x-float",children:[]},{value:"y [float]",id:"y-float",children:[]},{value:"z [float]",id:"z-float",children:[]},{value:"rx [float]",id:"rx-float",children:[]},{value:"ry [float]",id:"ry-float",children:[]},{value:"rz [float]",id:"rz-float",children:[]},{value:"s [float]",id:"s-float",children:[]},{value:"s [float]\xa0[float]\xa0[float]",id:"s-float-float-float",children:[]},{value:"m [f1] ... [f9]",id:"m-f1--f9",children:[]}],b={rightToc:l};function d(t){var e=t.components,a=Object(i.a)(t,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"x-float"},"x ","[","float","]"),Object(n.b)("p",null,"X axis translation. The float argument is the offset measured in units of the local coordinate system."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhQMFSoVUjKrwAA",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ x 1 } box\n{ x -.1 } box\n{ x 2.1 } box\n")),Object(n.b)("h2",{id:"y-float"},"y ","[","float","]"),Object(n.b)("p",null,"Y axis translation. The float argument is the offset measured in units of the local coordinate system."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhUMFSoVUjKrwAA",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ y 1 } box\n{ y -.1 } box\n{ y 2.1 } box\n")),Object(n.b)("h2",{id:"z-float"},"z ","[","float","]"),Object(n.b)("p",null,"Z axis translation. The float argument is the offset measured in units of the local coordinate system."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVqhSMFSoVUjKrwAA",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ z 1 } box\n{ z -.1 } box\n{ z 2.1 } box\n")),Object(n.b)("h2",{id:"rx-float"},"rx ","[","float","]"),Object(n.b)("p",null,"Rotation about the x axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5)."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqUDAxVahVSMqvAAA=",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ rx 45 } box\n{ rx 90.0 } box\n")),Object(n.b)("h2",{id:"ry-float"},"ry ","[","float","]"),Object(n.b)("p",null,"Rotation about the y axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5)."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqVDAxVahVSMqvAAA=",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ ry 45 } box\n{ ry 90.0 } box\n")),Object(n.b)("h2",{id:"rz-float"},"rz ","[","float","]"),Object(n.b)("p",null,"Rotation about the z axis. The 'float' argument is the angle specified in degrees. The rotation axis is centered at the unit cube in the local coordinate system: that is the rotation axis contains the line segment from (0, 0.5, 0.5) -> (1, 0.5, 0.5)."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqViiqUjAxVahVSMqvAAA=",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ rz 45 } box\n{ rz 90.0 } box\n")),Object(n.b)("h2",{id:"s-float"},"s ","[","float","]"),Object(n.b)("p",null,"Resizes the local coordinate system. Notice that the center for the resize is located at the center of the unit cube in the local system (at (0.5,0.5,0.5)"),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVihW0DNVqFVIyq8AAA==",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ x 2 s 2 } box\n{ s .5 } box\n")),Object(n.b)("h2",{id:"s-float-float-float"},"s ","[","float","]","\xa0","[","float","]","\xa0","[","float","]"),Object(n.b)("p",null,"Resizes the local coordinate system. As above but with separate scale for each dimension."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/Sy/KTOGqVihW0DOFolqFpPwKAA==",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ s .5 1 1 } box\n{ s 1 .5 1 } box\n{ s 1 1 .5 } box\n")),Object(n.b)("h2",{id:"m-f1--f9"},"m ","[","f1","]"," ... ","[","f9","]"),Object(n.b)("p",null,"Applies the specified 3x3 rotation matrix to the transformation matrix for the current state. About the argument order: ","[f1]",",","[f2]",",","[f3]"," defines the first row of the matrix."),Object(n.b)("p",null,"A translation moves every point by a fixed distance in the same direction."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/q1bIVTBUMFAw4lIAAgMg2xDKArFrFZLyKwA=",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"// Unfortunately this doesn't work now.\n{ m 1 0 2\n    0 1 0\n    0 0 1 } box\n")),Object(n.b)("p",null,'A rotation is a transformation that is performed by "spinning" the object around a fixed point.'),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/q1bIVTBUMFAw4FIAAgMFPVNjBV09C1MY18IULFSrkJRfAQA=",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ m 1 0 0\n    0 .53 -.85\n    0 .85 .53 } box\n")),Object(n.b)("p",null,"A scaling is a linear transformation that enlarges or diminishes object."),Object(n.b)(r.Editor,{src:"https://after12am.github.io/eisenscript-editor/#B/q1bIVTBSMFAw4FIAAgMQG8oCsWsVkvIrAA==",mdxType:"Editor"}),Object(n.b)("p",null,"notation is:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"{ m 2 0 0\n    0 2 0\n    0 0 2 } box\n")))}d.isMDXComponent=!0}}]);