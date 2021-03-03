(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(g,i(i({ref:t},l),{},{components:n})):o.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(106)),c={title:"Tag"},i={unversionedId:"components/tag",id:"components/tag",isDocsHomePage:!1,title:"Tag",description:"Use the tag component when it\u2019s possible for something to have more than one status and it\u2019s useful for the user to know about that status.",source:"@site/docs/components/tag.md",slug:"/components/tag",permalink:"/components/tag",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/tag.md",version:"current",sidebar:"someSidebar",previous:{title:"Cookie Banner",permalink:"/components/cookie-banner"},next:{title:"Tabs",permalink:"/components/tabs"}},s=[{value:"Tag",id:"tag",children:[{value:"HTML",id:"html",children:[]}]},{value:"Tag with html",id:"tag-with-html",children:[{value:"HTML",id:"html-1",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the tag component when it\u2019s possible for something to have more than one status and it\u2019s useful for the user to know about that status."),Object(a.b)("h2",{id:"tag"},"Tag"),Object(a.b)("strong",{class:"govuk-tag  lbh-tag"},"Alpha"),Object(a.b)("h3",{id:"html"},"HTML"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<strong class="govuk-tag  lbh-tag"> Alpha </strong>\n')),Object(a.b)("h2",{id:"tag-with-html"},"Tag with html"),Object(a.b)("strong",{class:"govuk-tag  lbh-tag"},Object(a.b)("span",null,"Beta")),Object(a.b)("h3",{id:"html-1"},"HTML"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<strong class="govuk-tag  lbh-tag">\n  <span>Beta</span>\n</strong>\n')))}u.isMDXComponent=!0}}]);