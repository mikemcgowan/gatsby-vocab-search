(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(145),u=n(139),i=(n(73),n(74),n(140)),l=function(e){var t=e.text,n=e.term,r=e.slug;return a.a.createElement("td",null,a.a.createElement(i.Link,{to:r},t.toLowerCase().includes(n.toLowerCase())?function(e,t){var n=e.toLowerCase().indexOf(t.toLowerCase());return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,e.substr(0,n)),a.a.createElement("span",null,a.a.createElement("strong",null,e.substr(n,t.length))),a.a.createElement("span",null,e.substr(n+t.length)))}(t,n):t))},c=function(e){var t=e.nodes,n=e.term;return 0===t.length?null:a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{width:"40%"}},"Polish"),a.a.createElement("th",null,"English"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement(l,{text:e.data[0],term:n,slug:e.fields.slug}),a.a.createElement(l,{text:e.data[1],term:n,slug:e.fields.slug}))})))},s=function(e){var t=e.current,n=e.total,r=e.term;return a.a.createElement("small",null,0===t?n+" vocab items":"Showing "+t+" item"+(1===t?"":"s")+' matching "'+r+'"')},f=function(e){var t=e.children;return a.a.createElement("div",{className:"row"},t)},d=function(e){var t=e.percent,n=e.children;return t?a.a.createElement("div",{className:"column column-"+t},n):a.a.createElement("div",{className:"column"},n)},p=(n(32),n(141)),h=n.n(p),m=function(e){var t=e.children,n=h()(e,["children"]);return a.a.createElement("button",Object.assign({className:"button"},n),t)},v=function(e){var t=e.children;return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"column"},t))};n.d(t,"query",function(){return g}),Object(o.setConfig)({pureSFC:!0});t.default=function(e){var t=e.data,n=Object(r.useState)(""),o=n[0],i=n[1],l=t.allCsvItem.edges.map(function(e){return e.node}),p=function(e,t){return"string"!=typeof e||e.length<3?[]:t.filter(function(t){return function e(t,n){return!(!n||0===n.length)&&(!!t((r=n,r[0]))||e(t,function(e){return e.slice(1)}(n)));var r}(function(t){return t.toLowerCase().includes(e.toLowerCase())},t.data)})}(o,l).slice(0,100);return a.a.createElement(u.a,null,a.a.createElement(f,null,a.a.createElement(d,null,a.a.createElement("input",{autoFocus:!0,type:"text",onChange:function(e){return i(e.target.value)},value:o})),a.a.createElement(d,{percent:"25"},a.a.createElement(m,{onClick:function(){return i("")},disabled:0===o.length},"Clear"))),a.a.createElement(v,{percent:"25"},a.a.createElement(s,{total:l.length,current:p.length,term:o})),a.a.createElement(v,null,a.a.createElement(c,{nodes:p,term:o})))};var g="208434284"},138:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(141)),o=r(n(143)),u=r(n(7)),i=r(n(51)),l=r(n(52)),c=r(n(4)),s=r(n(0)),f=n(22),d=n(140);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/gatsby-vocab-search/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,i.default)((0,i.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,i.default)((0,i.default)(n))),n}(0,u.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,u=void 0===r?this.defaultGetProps:r,i=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return s.default.createElement(f.Link,(0,o.default)({to:v,state:c,getProps:u,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},m))},t}(s.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},139:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(e){var t=e.children;return a.a.createElement("div",{className:"container"},t)};t.a=function(e){var t=e.children;return a.a.createElement(o,null,a.a.createElement("h1",null,"Vocab search"),t)}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),u=n.n(o),i=n(138),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(142),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var f=n(48);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},141:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},142:function(e,t,n){var r;e.exports=(r=n(144))&&r.default||r},143:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},144:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),o=n(4),u=n.n(o),i=n(68),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},145:function(module,exports,__webpack_require__){"use strict";var evalAllowed=!1;try{eval("evalAllowed = true")}catch(e){}var platformSupported=!!Object.setPrototypeOf&&evalAllowed;module.exports=__webpack_require__(146)},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r,o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return a.Children.only(this.props.children)},t}(a.Component);t.AppContainer=i,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}}}]);
//# sourceMappingURL=component---src-pages-index-js-03e8831cadbe8d194f06.js.map