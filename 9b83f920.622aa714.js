(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(116)),i={title:"Fieldset"},s={unversionedId:"components/fieldset",id:"components/fieldset",isDocsHomePage:!1,title:"Fieldset",description:"What is your address?",source:"@site/docs/components/fieldset.md",slug:"/components/fieldset",permalink:"/components/fieldset",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/fieldset.md",version:"current",sidebar:"someSidebar",previous:{title:"Error Summary",permalink:"/components/error-summary"},next:{title:"Radios",permalink:"/components/radios"}},l=[{value:"HTM",id:"htm",children:[]},{value:"Fieldset as page heading",id:"fieldset-as-page-heading",children:[{value:"HTM",id:"htm-1",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("fieldset",{class:"govuk-fieldset lbh-fieldset"},Object(a.b)("legend",{class:"govuk-fieldset__legend"},"What is your address?")),Object(a.b)("h3",{id:"htm"},"HTM"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<fieldset class="govuk-fieldset lbh-fieldset">\n  <legend class="govuk-fieldset__legend">What is your address?</legend>\n</fieldset>\n')),Object(a.b)("h2",{id:"fieldset-as-page-heading"},"Fieldset as page heading"),Object(a.b)("h3",{id:"htm-1"},"HTM"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<fieldset class="govuk-fieldset lbh-fieldset">\n  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">\n    <h1 class="govuk-fieldset__heading">What is your address?</h1>\n  </legend>\n</fieldset>\n')))}d.isMDXComponent=!0}}]);