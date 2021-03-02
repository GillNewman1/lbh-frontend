(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return f})),t.d(n,"metadata",(function(){return g})),t.d(n,"toc",(function(){return k})),t.d(n,"default",(function(){return x}));var o=t(3),a=t(7),i=t(0),c=t.n(i),l=t(105),s=t(110),r=t(116),d=t(108),u=t(79),m=t.n(u),h=37,b=39;var p=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,a=e.values,l=e.groupId,s=e.className,u=Object(r.a)(),p=u.tabGroupChoices,v=u.setTabGroupChoices,f=Object(i.useState)(o),g=f[0],k=f[1],_=i.Children.toArray(e.children);if(null!=l){var x=p[l];null!=x&&x!==g&&a.some((function(e){return e.value===x}))&&k(x)}var y=function(e){k(e),null!=l&&v(l,e)},A=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(d.a)("tabs",{"tabs--block":t},s)},a.map((function(e){var n=e.value,t=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(d.a)("tabs__item",m.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case h:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(A,e.target,e)},onFocus:function(){return y(n)},onClick:function(){y(n)}},t)}))),n?Object(i.cloneElement)(_.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},_.map((function(e,n){return Object(i.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))};var v=function(e){var n=e.children,t=e.hidden,o=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)},f={title:"Accordion"},g={unversionedId:"components/accordion",id:"components/accordion",isDocsHomePage:!1,title:"Accordion",description:"Section A",source:"@site/docs/components/accordion.md",slug:"/components/accordion",permalink:"/components/accordion",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/accordion.md",version:"current",sidebar:"someSidebar",previous:{title:"Supporting Internet Explorer 8",permalink:"/developing/supporting-ie8"},next:{title:"Text input",permalink:"/components/input"}},k=[],_={toc:k};function x(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},_,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(s.a,{mdxType:"InitAll"},Object(l.b)("div",{class:"govuk-accordion myClass lbh-accordion","data-module":"govuk-accordion",id:"default-example","data-attribute":"value"},Object(l.b)("div",{class:"govuk-accordion__section "},Object(l.b)("div",{class:"govuk-accordion__section-header"},Object(l.b)("h5",{class:"govuk-accordion__section-heading"},Object(l.b)("span",{class:"govuk-accordion__section-button",id:"default-example-heading-1"},"Section A"))),Object(l.b)("div",{id:"default-example-content-1",class:"govuk-accordion__section-content","aria-labelledby":"default-example-heading-1"},Object(l.b)("ul",{class:"lbh-list lbh-list--bullet"},Object(l.b)("li",null,"Example item 1")))),Object(l.b)("div",{class:"govuk-accordion__section "},Object(l.b)("div",{class:"govuk-accordion__section-header"},Object(l.b)("h5",{class:"govuk-accordion__section-heading"},Object(l.b)("span",{class:"govuk-accordion__section-button",id:"default-example-heading-2"},"Section B"))),Object(l.b)("div",{id:"default-example-content-2",class:"govuk-accordion__section-content","aria-labelledby":"default-example-heading-2"},Object(l.b)("ul",{class:"lbh-list lbh-list--bullet"},Object(l.b)("li",null,"Example item 2"))))),Object(l.b)(p,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"Create React App",value:"cra"},{label:"Next.js",value:"next"}],mdxType:"Tabs"},Object(l.b)(v,{value:"html",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div\n  class="govuk-accordion myClass lbh-accordion"\n  data-module="govuk-accordion"\n  id="default-example"\n  data-attribute="value"\n>\n  <div class="govuk-accordion__section ">\n    <div class="govuk-accordion__section-header">\n      <h5 class="govuk-accordion__section-heading">\n        <span\n          class="govuk-accordion__section-button"\n          id="default-example-heading-1"\n        >\n          Section A\n        </span>\n      </h5>\n    </div>\n    <div\n      id="default-example-content-1"\n      class="govuk-accordion__section-content"\n      aria-labelledby="default-example-heading-1"\n    >\n      <ul class="lbh-list lbh-list--bullet">\n        <li>Example item 1</li>\n      </ul>\n    </div>\n  </div>\n  <div class="govuk-accordion__section ">\n    <div class="govuk-accordion__section-header">\n      <h5 class="govuk-accordion__section-heading">\n        <span\n          class="govuk-accordion__section-button"\n          id="default-example-heading-2"\n        >\n          Section B\n        </span>\n      </h5>\n    </div>\n    <div\n      id="default-example-content-2"\n      class="govuk-accordion__section-content"\n      aria-labelledby="default-example-heading-2"\n    >\n      <ul class="lbh-list lbh-list--bullet">\n        <li>Example item 2</li>\n      </ul>\n    </div>\n  </div>\n</div>\n'))),Object(l.b)(v,{value:"cra",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import { useEffect, useRef } from "react"\nimport { Accordion } from "lbh-frontend"\n\nconst MyAccordion = () => {\n  const ref = useRef(null)\n\n  useEffect(() => {\n    new Accordion(ref.current).init()\n  }, [])\n\n  return (\n    <div\n      className="govuk-accordion lbh-accordion"\n      id="default-example"\n      data-attribute="value"\n      ref={ref}\n    >\n      <div className="govuk-accordion__section ">\n        <div className="govuk-accordion__section-header">\n          <h5 className="govuk-accordion__section-heading">\n            <span\n              className="govuk-accordion__section-button"\n              id="default-example-heading-1"\n            >\n              Section A\n            </span>\n          </h5>\n        </div>\n        <div\n          id="default-example-content-1"\n          className="govuk-accordion__section-content"\n          aria-labelledby="default-example-heading-1"\n        >\n          <ul className="lbh-list lbh-list--bullet">\n            <li>Example item 1</li>\n          </ul>\n        </div>\n      </div>\n      <div className="govuk-accordion__section ">\n        <div className="govuk-accordion__section-header">\n          <h5 className="govuk-accordion__section-heading">\n            <span\n              className="govuk-accordion__section-button"\n              id="default-example-heading-2"\n            >\n              Section B\n            </span>\n          </h5>\n        </div>\n        <div\n          id="default-example-content-2"\n          className="govuk-accordion__section-content"\n          aria-labelledby="default-example-heading-2"\n        >\n          <ul className="lbh-list lbh-list--bullet">\n            <li>Example item 2</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default MyAccordion\n'))),Object(l.b)(v,{value:"next",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import { useEffect, useRef } from "react"\n\nconst MyAccordion = () => {\n  const ref = useRef(null)\n\n  useEffect(() => {\n    if (window !== undefined) {\n      const Accordion = require("lbh-frontend").Accordion\n      new Accordion(ref.current).init()\n    }\n  }, [])\n\n  return (\n    <div\n      className="govuk-accordion lbh-accordion"\n      id="default-example"\n      data-attribute="value"\n      ref={ref}\n    >\n      <div className="govuk-accordion__section ">\n        <div className="govuk-accordion__section-header">\n          <h5 className="govuk-accordion__section-heading">\n            <span\n              className="govuk-accordion__section-button"\n              id="default-example-heading-1"\n            >\n              Section A\n            </span>\n          </h5>\n        </div>\n        <div\n          id="default-example-content-1"\n          className="govuk-accordion__section-content"\n          aria-labelledby="default-example-heading-1"\n        >\n          <ul className="lbh-list lbh-list--bullet">\n            <li>Example item 1</li>\n          </ul>\n        </div>\n      </div>\n      <div className="govuk-accordion__section ">\n        <div className="govuk-accordion__section-header">\n          <h5 className="govuk-accordion__section-heading">\n            <span\n              className="govuk-accordion__section-button"\n              id="default-example-heading-2"\n            >\n              Section B\n            </span>\n          </h5>\n        </div>\n        <div\n          id="default-example-content-2"\n          className="govuk-accordion__section-content"\n          aria-labelledby="default-example-heading-2"\n        >\n          <ul className="lbh-list lbh-list--bullet">\n            <li>Example item 2</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default MyAccordion\n'))))))}x.isMDXComponent=!0},108:function(e,n,t){"use strict";function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}},110:function(e,n,t){"use strict";var o=t(0);n.a=function(e){var n=e.children;return Object(o.useEffect)((function(){"undefined"!=typeof window&&t(111).initAll()}),[]),n}},111:function(e,n,t){"use strict";t.r(n),t.d(n,"initAll",(function(){return I})),t.d(n,"Accordion",(function(){return c})),t.d(n,"BackToTop",(function(){return r})),t.d(n,"Button",(function(){return u})),t.d(n,"CharacterCount",(function(){return h})),t.d(n,"Checkboxes",(function(){return p})),t.d(n,"CookieBanner",(function(){return k})),t.d(n,"Details",(function(){return x})),t.d(n,"ErrorSummary",(function(){return A})),t.d(n,"Map",(function(){return E})),t.d(n,"Radios",(function(){return S})),t.d(n,"Tabs",(function(){return B}));var o=t(119),a=t.n(o),i=t(120),c=t.n(i).a,l=t(128);function s(e){this.$module=e}s.prototype.checkScrollPosition=function(e){var n=window.innerHeight,t=n>480?480:n;window.scrollY>t?e.classList.add("lbh-back-to-top--visible"):e.classList.remove("lbh-back-to-top--visible")},s.prototype.init=function(){if(this.$module){var e=Object(l.a)(this.checkScrollPosition,200),n=this.$module;window.addEventListener("scroll",(function(){e(n)}))}};var r=s,d=t(121),u=t.n(d).a,m=t(122),h=t.n(m).a,b=t(123),p=t.n(b).a,v="seen_cookie_message",f=void 0===window.dropCookie||window.dropCookie;function g(e){this.$module=e,this.$button=this.$module.querySelector('[data-behavior="lbh-cookie-close"]')}g.prototype.checkCookies=function(){for(var e=v+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var o=n[t];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null},g.prototype.showCookieBanner=function(){this.$module.style.display="block",this.bindAcceptButton()},g.prototype.bindAcceptButton=function(){var e=this.$module;this.$button.addEventListener("click",(function(){var n=new Date;n.setTime(n.getTime()+31536e6);var t="; expires="+n.toGMTString();f&&(document.cookie=v+"=true"+t+"; path=/"),e.style.display="none"}))},g.prototype.init=function(){return!!this.$module&&("true"!==this.checkCookies()&&void this.showCookieBanner())};var k=g,_=t(124),x=t.n(_).a,y=t(125),A=t.n(y).a;if(window.L=window.L||{},L!=={})var w=L.map,j=L.control,O=L.tileLayer,N=L.icon,C=L.marker;function T(e){this.$module=e,this.moduleId=this.$module.getAttribute("id"),this.accessToken=this.$module.getAttribute("data-access-token"),this.map=null,this.markerLat=this.$module.getAttribute("data-marker-lat")||null,this.markerLng=this.$module.getAttribute("data-marker-lng")||null,this.centreLat=this.$module.getAttribute("data-centre-lat")||this.markerLat||51.549,this.centreLng=this.$module.getAttribute("data-centre-lng")||this.markerLng||-.077928,this.maxZoom=this.$module.getAttribute("data-max-zoom")||19,this.minZoom=this.$module.getAttribute("data-min-zoom")||12,this.initialZoom=this.$module.getAttribute("data-initial-zoom")||15,this.showZoomControl=this.$module.getAttribute("data-show-zoom-control")||!0,this.minLat=this.$module.getAttribute("data-min-lat")||51.491112,this.minLng=this.$module.getAttribute("data-min-lng")||-.275464,this.maxLat=this.$module.getAttribute("data-max-lat")||51.607351,this.maxLng=this.$module.getAttribute("data-max-lng")||.096129}T.prototype.initLeaflet=function(){this.map=w(this.moduleId,{zoomControl:!1,maxZoom:this.maxZoom,minZoom:this.minZoom,center:[this.centreLat,this.centreLng],zoom:this.initialZoom}),this.showZoomControl&&j.zoom({position:"topright"}).addTo(this.map)},T.prototype.setBounds=function(){this.map.setMaxBounds([[this.minLat,this.minLng],[this.maxLat,this.maxLng]])},T.prototype.initMapboxTiles=function(){var e=O("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{fadeAnimation:!1,opacity:1,attribution:'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://mapbox.com">Mapbox</a>',maxZoom:this.maxZoom,id:"mapbox.streets",accessToken:this.accessToken});this.map.addLayer(e)},T.prototype.addMarker=function(){if(null!==this.markerLat&&null!==this.markerLng){var e=N({iconUrl:"../../../assets/images/contact/map-marker.svg",iconSize:[48,48],iconAnchor:[24,48]});C([this.markerLat,this.markerLng],{icon:e}).addTo(this.map)}},T.prototype.init=function(){this.$module&&L!={}&&(this.initLeaflet(),this.setBounds(),this.initMapboxTiles(),this.addMarker())};var E=T,$=t(126),S=t.n($).a,M=t(127),B=t.n(M).a;function I(e){e=void 0!==e?e:{},a.a.initAll();var n=void 0!==e.scope?e.scope:document,t=n.querySelector('[data-module="lbh-cookie-banner"]');t&&new k(t).init(),function(e,n){if(window.NodeList.prototype.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n.call(window,e[t],t,e)}(n.querySelectorAll('[data-module="lbh-map"]'),(function(e){new E(e).init()}));var o=n.querySelector('[data-module="lbh-back-to-top"]');o&&new r(o).init()}},116:function(e,n,t){"use strict";var o=t(0),a=t(117);n.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,n,t){"use strict";var o=t(0),a=Object(o.createContext)(void 0);n.a=a}}]);