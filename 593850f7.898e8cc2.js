(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(g,i(i({ref:t},l),{},{components:n})):a.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(111)),c={title:"Tag"},i={unversionedId:"components/tag",id:"components/tag",isDocsHomePage:!1,title:"Tag",description:"Use the tag component when it\u2019s possible for something to have more than one status and it\u2019s useful for the user to know about that status.",source:"@site/docs/components/tag.md",slug:"/components/tag",permalink:"/components/tag",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/tag.md",version:"current",sidebar:"someSidebar",previous:{title:"Fieldset",permalink:"/components/fieldset"},next:{title:"Tabs",permalink:"/components/tabs"}},s=[{value:"Tag",id:"tag",children:[{value:"HTML",id:"html",children:[]}]},{value:"Tag with html",id:"tag-with-html",children:[{value:"HTML",id:"html-1",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the tag component when it\u2019s possible for something to have more than one status and it\u2019s useful for the user to know about that status."),Object(o.b)("h2",{id:"tag"},"Tag"),Object(o.b)("strong",{class:"govuk-tag  lbh-tag"},"Alpha"),Object(o.b)("h3",{id:"html"},"HTML"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<strong class="govuk-tag  lbh-tag"> Alpha </strong>\n')),Object(o.b)("h2",{id:"tag-with-html"},"Tag with html"),Object(o.b)("strong",{class:"govuk-tag  lbh-tag"},Object(o.b)("span",null,"Beta")),Object(o.b)("h3",{id:"html-1"},"HTML"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<strong class="govuk-tag  lbh-tag">\n  <span>Beta</span>\n</strong>\n')))}u.isMDXComponent=!0}}]);