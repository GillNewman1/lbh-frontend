(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(t,n,e){"use strict";e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return m}));var o=e(0),u=e.n(o);function b(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){b(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,o,u=function(t,n){if(null==t)return{};var e,o,u={},b=Object.keys(t);for(o=0;o<b.length;o++)e=b[o],n.indexOf(e)>=0||(u[e]=t[e]);return u}(t,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(o=0;o<b.length;o++)e=b[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(u[e]=t[e])}return u}var c=u.a.createContext({}),i=function(t){var n=u.a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},d=function(t){var n=i(t.components);return u.a.createElement(c.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return u.a.createElement(u.a.Fragment,{},n)}},p=u.a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,b=t.originalType,r=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=i(e),p=o,m=d["".concat(r,".").concat(p)]||d[p]||s[p]||b;return e?u.a.createElement(m,a(a({ref:n},c),{},{components:e})):u.a.createElement(m,a({ref:n},c))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var b=e.length,r=new Array(b);r[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=t,a.mdxType="string"==typeof t?t:o,r[1]=a;for(var c=2;c<b;c++)r[c]=e[c];return u.a.createElement.apply(null,r)}return u.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},92:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return r})),e.d(n,"metadata",(function(){return a})),e.d(n,"toc",(function(){return l})),e.d(n,"default",(function(){return i}));var o=e(3),u=e(7),b=(e(0),e(104)),r={title:"Button"},a={unversionedId:"components/button",id:"components/button",isDocsHomePage:!1,title:"Button",description:"Button",source:"@site/docs/components/button.md",slug:"/components/button",permalink:"/components/button",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/button.md",version:"current",sidebar:"someSidebar",previous:{title:"Breadcrumbs",permalink:"/components/breadcrumbs"},next:{title:"Contact block",permalink:"/components/contacts-block"}},l=[{value:"Button",id:"button",children:[{value:"HTML",id:"html",children:[]},{value:"Nunjucks",id:"nunjucks",children:[]}]},{value:"Button disabled",id:"button-disabled",children:[{value:"HTML",id:"html-1",children:[]},{value:"Nunjucks",id:"nunjucks-1",children:[]}]},{value:"Button link",id:"button-link",children:[{value:"HTML",id:"html-2",children:[]},{value:"Nunjucks",id:"nunjucks-2",children:[]}]},{value:"Button link disabled",id:"button-link-disabled",children:[{value:"HTML",id:"html-3",children:[]},{value:"Nunjucks",id:"nunjucks-3",children:[]}]}],c={toc:l};function i(t){var n=t.components,e=Object(u.a)(t,["components"]);return Object(b.b)("wrapper",Object(o.a)({},c,e,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"button"},"Button"),Object(b.b)("button",{class:"govuk-button  lbh-button","data-module":"govuk-button"},"Save and continue"),Object(b.b)("h3",{id:"html"},"HTML"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<button class="govuk-button  lbh-button" data-module="govuk-button">\n  Save and continue\n</button>\n')),Object(b.b)("h3",{id:"nunjucks"},"Nunjucks"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'{% from "lbh-button/macro.njk" import lbhButton %}\n\n{{ lbhButton({\n  "text": "Save and continue"\n}) }}\n')),Object(b.b)("h2",{id:"button-disabled"},"Button disabled"),Object(b.b)("button",{disabled:"disabled","aria-disabled":"true",class:"govuk-button  lbh-button lbh-button--disabled govuk-button--disabled","data-module":"govuk-button"},"Disabled button"),Object(b.b)("h3",{id:"html-1"},"HTML"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<button\n  disabled="disabled"\n  aria-disabled="true"\n  class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled"\n  data-module="govuk-button"\n>\n  Disabled button\n</button>\n')),Object(b.b)("h3",{id:"nunjucks-1"},"Nunjucks"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'{% from "lbh-button/macro.njk" import lbhButton %}\n\n{{ lbhButton({\n  "text": "Disabled button",\n  "disabled": true\n}) }}\n')),Object(b.b)("h2",{id:"button-link"},"Button link"),Object(b.b)("a",{href:"/",role:"button",draggable:"false",class:"govuk-button  lbh-button","data-module":"govuk-button"},"Link button"),Object(b.b)("h3",{id:"html-2"},"HTML"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<a\n  href="/"\n  role="button"\n  draggable="false"\n  class="govuk-button  lbh-button"\n  data-module="govuk-button"\n>\n  Link button\n</a>\n')),Object(b.b)("h3",{id:"nunjucks-2"},"Nunjucks"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'\n{% from "lbh-button/macro.njk" import lbhButton %}\n\n{{ lbhButton({\n  "text": "Link button",\n  "href": "/"\n}) }}\n')),Object(b.b)("h2",{id:"button-link-disabled"},"Button link disabled"),Object(b.b)("a",{href:"/",role:"button",draggable:"false",class:"govuk-button  lbh-button lbh-button--disabled govuk-button--disabled","data-module":"govuk-button"},"Disabled link button"),Object(b.b)("h3",{id:"html-3"},"HTML"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'<a href="/" role="button" draggable="false" class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">\n  Disabled link button\n</a>\n')),Object(b.b)("h3",{id:"nunjucks-3"},"Nunjucks"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},'{% from "lbh-button/macro.njk" import lbhButton %}\n\n{{ lbhButton({\n  "text": "Disabled link button",\n  "href": "/",\n  "disabled": true\n}) }}\n')))}i.isMDXComponent=!0}}]);