/*! For license information please see common.278bcb11.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m}));var n=r(0),o=r.n(n);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=o.a.createContext({}),u=function(t){var e=o.a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i({},e,{},t)),r},l=function(t){var e=u(t.components);return o.a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,a=t.parentName,c=h(t,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||p[f]||s;return r?o.a.createElement(m,i({ref:e},c,{components:r})):o.a.createElement(m,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var h in e)hasOwnProperty.call(e,h)&&(i[h]=e[h]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},132:function(t,e,r){"use strict";var n=r(20),o=r(144),s=r(145);r(147)("search",1,(function(t,e,r,a){return[function(r){var n=t(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=a(r,t,this);if(e.done)return e.value;var i=n(t),h=String(this),c=i.lastIndex;o(c,0)||(i.lastIndex=0);var u=s(i,h);return o(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},133:function(t,e,r){"use strict";var n,o,s=r(149),a=RegExp.prototype.exec,i=String.prototype.replace,h=a,c=(n=/a/,o=/b*/g,a.call(n,"a"),a.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(h=function(t){var e,r,n,o,h=this;return u&&(r=new RegExp("^"+h.source+"$(?!\\s)",s.call(h))),c&&(e=h.lastIndex),n=a.call(h,t),c&&n&&(h.lastIndex=h.global?n.index+n[0].length:e),u&&n&&n.length>1&&i.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=h},134:function(t,e,r){"use strict";var n=r(150),o=r(152);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){o.isString(t)&&(t=b(t));return t instanceof s?t.format():s.prototype.format.call(t)},e.Url=s;var a=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),l=["%","/","?",";","#"].concat(u),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=r(153);function b(t,e,r){if(t&&o.isObject(t)&&t instanceof s)return t;var n=new s;return n.parse(t,e,r),n}s.prototype.parse=function(t,e,r){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var s=t.indexOf("?"),i=-1!==s&&s<t.indexOf("#")?"?":"#",c=t.split(i);c[0]=c[0].replace(/\\/g,"/");var b=t=c.join(i);if(b=b.trim(),!r&&1===t.split("#").length){var x=h.exec(b);if(x)return this.path=b,this.href=b,this.pathname=x[1],x[2]?(this.search=x[2],this.query=e?y.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var O=a.exec(b);if(O){var j=(O=O[0]).toLowerCase();this.protocol=j,b=b.substr(O.length)}if(r||O||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===b.substr(0,2);!w||O&&d[O]||(b=b.substr(2),this.slashes=!0)}if(!d[O]&&(w||O&&!g[O])){for(var C,E,I=-1,A=0;A<p.length;A++){-1!==(R=b.indexOf(p[A]))&&(-1===I||R<I)&&(I=R)}-1!==(E=-1===I?b.lastIndexOf("@"):b.lastIndexOf("@",I))&&(C=b.slice(0,E),b=b.slice(E+1),this.auth=decodeURIComponent(C)),I=-1;for(A=0;A<l.length;A++){var R;-1!==(R=b.indexOf(l[A]))&&(-1===I||R<I)&&(I=R)}-1===I&&(I=b.length),this.host=b.slice(0,I),b=b.slice(I),this.parseHost(),this.hostname=this.hostname||"";var P="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!P)for(var q=this.hostname.split(/\./),S=(A=0,q.length);A<S;A++){var U=q[A];if(U&&!U.match(f)){for(var T="",k=0,N=U.length;k<N;k++)U.charCodeAt(k)>127?T+="x":T+=U[k];if(!T.match(f)){var D=q.slice(0,A),F=q.slice(A+1),$=U.match(m);$&&(D.push($[1]),F.unshift($[2])),F.length&&(b="/"+F.join(".")+b),this.hostname=D.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),P||(this.hostname=n.toASCII(this.hostname));var M=this.port?":"+this.port:"",z=this.hostname||"";this.host=z+M,this.href+=this.host,P&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!v[j])for(A=0,S=u.length;A<S;A++){var L=u[A];if(-1!==b.indexOf(L)){var X=encodeURIComponent(L);X===L&&(X=escape(L)),b=b.split(L).join(X)}}var H=b.indexOf("#");-1!==H&&(this.hash=b.substr(H),b=b.slice(0,H));var J=b.indexOf("?");if(-1!==J?(this.search=b.substr(J),this.query=b.substr(J+1),e&&(this.query=y.parse(this.query)),b=b.slice(0,J)):e&&(this.search="",this.query={}),b&&(this.pathname=b),g[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){M=this.pathname||"";var K=this.search||"";this.path=M+K}return this.href=this.format(),this},s.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,a="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(a=y.stringify(this.query));var i=this.search||a&&"?"+a||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==s?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),e+s+(r=r.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(i=i.replace("#","%23"))+n},s.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},s.prototype.resolveObject=function(t){if(o.isString(t)){var e=new s;e.parse(t,!1,!0),t=e}for(var r=new s,n=Object.keys(this),a=0;a<n.length;a++){var i=n[a];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),c=0;c<h.length;c++){var u=h[c];"protocol"!==u&&(r[u]=t[u])}return g[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!g[t.protocol]){for(var l=Object.keys(t),p=0;p<l.length;p++){var f=l[p];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||d[t.protocol])r.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),r.pathname=m.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var v=r.pathname||"",y=r.search||"";r.path=v+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),x=t.host||t.pathname&&"/"===t.pathname.charAt(0),O=x||b||r.host&&t.pathname,j=O,w=r.pathname&&r.pathname.split("/")||[],C=(m=t.pathname&&t.pathname.split("/")||[],r.protocol&&!g[r.protocol]);if(C&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),O=O&&(""===m[0]||""===w[0])),x)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=m;else if(m.length)w||(w=[]),w.pop(),w=w.concat(m),r.search=t.search,r.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(C)r.hostname=r.host=w.shift(),(P=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=P.shift(),r.host=r.hostname=P.shift());return r.search=t.search,r.query=t.query,o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var E=w.slice(-1)[0],I=(r.host||t.host||w.length>1)&&("."===E||".."===E)||""===E,A=0,R=w.length;R>=0;R--)"."===(E=w[R])?w.splice(R,1):".."===E?(w.splice(R,1),A++):A&&(w.splice(R,1),A--);if(!O&&!j)for(;A--;A)w.unshift("..");!O||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),I&&"/"!==w.join("/").substr(-1)&&w.push("");var P,q=""===w[0]||w[0]&&"/"===w[0].charAt(0);C&&(r.hostname=r.host=q?"":w.length?w.shift():"",(P=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=P.shift(),r.host=r.hostname=P.shift()));return(O=O||r.host&&w.length)&&!q&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),o.isNull(r.pathname)&&o.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},s.prototype.parseHost=function(){var t=this.host,e=i.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},144:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},145:function(t,e,r){"use strict";var n=r(146),o=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var s=r.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},146:function(t,e,r){var n=r(53),o=r(11)("toStringTag"),s="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=Object(t),o))?r:s?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},147:function(t,e,r){"use strict";r(148);var n=r(21),o=r(8),s=r(37),a=r(38),i=r(11),h=r(133),c=i("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=i(t),f=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=f?!s((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!e})):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!l){var v=/./[p],d=r(a,p,""[t],(function(t,e,r,n,o){return e.exec===h?f&&!o?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),g=d[0],y=d[1];n(String.prototype,t,g),o(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},148:function(t,e,r){"use strict";var n=r(133);r(54)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},149:function(t,e,r){"use strict";var n=r(20);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},150:function(t,e,r){(function(t,n){var o;!function(s){e&&e.nodeType,t&&t.nodeType;var a="object"==typeof n&&n;a.global!==a&&a.window!==a&&a.self;var i,h=2147483647,c=/^xn--/,u=/[^\x20-\x7E]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,m=String.fromCharCode;function v(t){throw RangeError(p[t])}function d(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function g(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+d((t=t.replace(l,".")).split("."),e).join(".")}function y(t){for(var e,r,n=[],o=0,s=t.length;o<s;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<s?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function b(t){return d(t,(function(t){var e="";return t>65535&&(e+=m((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=m(t)})).join("")}function x(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function O(t,e,r){var n=0;for(t=r?f(t/700):t>>1,t+=f(t/e);t>455;n+=36)t=f(t/35);return f(n+36*t/(t+38))}function j(t){var e,r,n,o,s,a,i,c,u,l,p,m=[],d=t.length,g=0,y=128,x=72;for((r=t.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&v("not-basic"),m.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<d;){for(s=g,a=1,i=36;o>=d&&v("invalid-input"),((c=(p=t.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||c>f((h-g)/a))&&v("overflow"),g+=c*a,!(c<(u=i<=x?1:i>=x+26?26:i-x));i+=36)a>f(h/(l=36-u))&&v("overflow"),a*=l;x=O(g-s,e=m.length+1,0==s),f(g/e)>h-y&&v("overflow"),y+=f(g/e),g%=e,m.splice(g++,0,y)}return b(m)}function w(t){var e,r,n,o,s,a,i,c,u,l,p,d,g,b,j,w=[];for(d=(t=y(t)).length,e=128,r=0,s=72,a=0;a<d;++a)(p=t[a])<128&&w.push(m(p));for(n=o=w.length,o&&w.push("-");n<d;){for(i=h,a=0;a<d;++a)(p=t[a])>=e&&p<i&&(i=p);for(i-e>f((h-r)/(g=n+1))&&v("overflow"),r+=(i-e)*g,e=i,a=0;a<d;++a)if((p=t[a])<e&&++r>h&&v("overflow"),p==e){for(c=r,u=36;!(c<(l=u<=s?1:u>=s+26?26:u-s));u+=36)j=c-l,b=36-l,w.push(m(x(l+j%b,0))),c=f(j/b);w.push(m(x(c,0))),s=O(r,g,n==o),r=0,++n}++r,++e}return w.join("")}i={version:"1.3.2",ucs2:{decode:y,encode:b},decode:j,encode:w,toASCII:function(t){return g(t,(function(t){return u.test(t)?"xn--"+w(t):t}))},toUnicode:function(t){return g(t,(function(t){return c.test(t)?j(t.slice(4).toLowerCase()):t}))}},void 0===(o=function(){return i}.call(e,r,e,t))||(t.exports=o)}()}).call(this,r(151)(t),r(52))},151:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},152:function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},153:function(t,e,r){"use strict";e.decode=e.parse=r(154),e.encode=e.stringify=r(155)},154:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var h=1e3;s&&"number"==typeof s.maxKeys&&(h=s.maxKeys);var c=t.length;h>0&&c>h&&(c=h);for(var u=0;u<c;++u){var l,p,f,m,v=t[u].replace(i,"%20"),d=v.indexOf(r);d>=0?(l=v.substr(0,d),p=v.substr(d+1)):(l=v,p=""),f=decodeURIComponent(l),m=decodeURIComponent(p),n(a,f)?o(a[f])?a[f].push(m):a[f]=[a[f],m]:a[f]=m}return a};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},155:function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,i){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?s(a(t),(function(a){var i=encodeURIComponent(n(a))+r;return o(t[a])?s(t[a],(function(t){return i+encodeURIComponent(n(t))})).join(e):i+encodeURIComponent(n(t[a]))})).join(e):i?encodeURIComponent(n(i))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var a=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},93:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return i})),r.d(e,"rightToc",(function(){return h})),r.d(e,"Editor",(function(){return c})),r.d(e,"default",(function(){return l}));var n=r(1),o=r(6),s=(r(132),r(0),r(121)),a={},i={id:"components",title:"components",description:"export const Editor = ({src}) => {",source:"@site/docs/components.md",permalink:"/eisenscript-docs/build/docs/components",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components.md"},h=[],c=function(t){var e=t.src,n=r(134),o=n.parse(e);return o.search="docsite=1&doOptimize=0&show=0",Object(s.b)("iframe",{class:"demo",src:n.format(o)})},u={rightToc:h,Editor:c};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}))}l.isMDXComponent=!0}}]);