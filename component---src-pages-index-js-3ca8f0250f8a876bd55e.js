(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(126),c=function(e){var t=e.children;return a.a.createElement("div",{className:"container"},t)},u=function(e){var t=e.children;return a.a.createElement(c,null,a.a.createElement("h1",null,"Vocab search"),t)},o=(n(124),n(125),function(e){var t=e.text,n=e.term;return a.a.createElement("td",null,t.toLowerCase().includes(n.toLowerCase())?function(e,t){var n=e.toLowerCase().indexOf(t.toLowerCase());return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,e.substr(0,n)),a.a.createElement("span",null,a.a.createElement("strong",null,e.substr(n,t.length))),a.a.createElement("span",null,e.substr(n+t.length)))}(t,n):t)}),i=function(e){var t=e.nodes,n=e.term;return 0===t.length?null:a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{width:"40%"}},"Polish"),a.a.createElement("th",null,"English"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement(o,{text:e.data[0],term:n}),a.a.createElement(o,{text:e.data[1],term:n}))})))},s=function(e){var t=e.current,n=e.total,r=e.term;return a.a.createElement("small",null,0===t?n+" vocab items":"Showing "+t+" item"+(1===t?"":"s")+' matching "'+r+'"')},f=function(e){var t=e.children;return a.a.createElement("div",{className:"row"},t)},m=function(e){var t=e.percent,n=e.children;return t?a.a.createElement("div",{className:"column column-"+t},n):a.a.createElement("div",{className:"column"},n)},d=(n(27),n(130)),p=n.n(d),h=function(e){var t=e.children,n=p()(e,["children"]);return a.a.createElement("button",Object.assign({className:"button"},n),t)},v=function(e){var t=e.children;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"column"},t))};n.d(t,"query",function(){return E}),Object(l.setConfig)({pureSFC:!0});t.default=function(e){var t=e.data,n=Object(r.useState)(""),l=n[0],c=n[1],o=t.allCsvItem.edges.map(function(e){return e.node}),d=function(e,t){return"string"!=typeof e||e.length<2?[]:t.filter(function(t){return function e(t,n){return!(!n||0===n.length)&&(!!t((r=n,r[0]))||e(t,function(e){return e.slice(1)}(n)));var r}(function(t){return t.toLowerCase().includes(e.toLowerCase())},t.data)})}(l,o);return a.a.createElement(u,null,a.a.createElement(f,null,a.a.createElement(m,null,a.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){return c(e.target.value)},value:l})),a.a.createElement(m,{percent:"25"},a.a.createElement(h,{onClick:function(){return c("")},disabled:0===l.length},"Clear"))),a.a.createElement(v,{percent:"25"},a.a.createElement(s,{total:o.length,current:d.length,term:l})),a.a.createElement(v,null,a.a.createElement(i,{nodes:d,term:l})))};var E="3535948272"},124:function(e,t,n){"use strict";var r=n(20),a=n(63)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(44)("includes")},125:function(e,t,n){"use strict";var r=n(20),a=n(128);r(r.P+r.F*n(129)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},126:function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__(127)},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r,l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){function t(){return l(this,t),c(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return a.Children.only(this.props.children)},t}(a.Component);t.AppContainer=u,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},128:function(e,t,n){var r=n(64),a=n(21);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},129:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},130:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}}}]);
//# sourceMappingURL=component---src-pages-index-js-3ca8f0250f8a876bd55e.js.map