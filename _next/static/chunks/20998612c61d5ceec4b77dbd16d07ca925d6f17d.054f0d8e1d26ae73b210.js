(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/h46":function(t,e,n){n("cHUd")("Map")},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var a,c=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=u(p);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new v(t,e)),1!==c.length||f||u(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},LX0d:function(t,e,n){t.exports=n("UDep")},NIBL:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;e.a=function(t){return o("div",{className:"body"},o("p",{style:{whiteSpace:"pre-wrap"}},t.children))}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},UD1s:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),u=o.a.createElement;e.a=function(){return u("div",{className:"header"},u(s.a,{href:"/posts",as:"".concat("/n","/posts")},u("a",null,"Posts")),u(s.a,{href:"/chat",as:"".concat("/n","/chat")},u("a",null,"Chat")))}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),s=n("2GTP"),u=n("EXMj"),a=n("oioR"),c=n("MPFp"),f=n("UO39"),l=n("TJWN"),p=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=p?"_s":"size",m=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,r){u(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,n,t[c],t)}));return i(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=m(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(v(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return v(this,e)[d]}}),f},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),u=n("N9n2"),a=n("LX0d"),c=n("KI45"),f=n("5Uuq");e.__esModule=!0,e.default=void 0;var l,p=n("CxY0"),h=f(n("q1tI")),v=c(n("nOHt")),d=n("g/15");function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new a,g=window.IntersectionObserver,w={};function _(){return l||(g?l=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var T=function(t){function e(t){var n;return r(this,e),(n=i(this,s(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:m(t),as:e?m(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,u=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var a=window.location.pathname;s=(0,p.resolve)(a,s),u=u?(0,p.resolve)(a,u):s,t.preventDefault();var c=n.props.scroll;null==c&&(c=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,u,{shallow:n.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return u(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=w[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var i=h.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch()},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),e}(h.Component);e.default=T},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},hMTg:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r).a.createElement;e.a=function(t){return o("div",{className:"head"},t.children,o("span",{className:"small"},"posted by ",t.author))}}}]);