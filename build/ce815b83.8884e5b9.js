(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),c=r(6),a=(r(0),r(89)),o={id:"architecture",title:"Arquitectura",sidebar_label:"Arquitectura",description:"Estructura inicial del proyecto",slug:"/es/concepts/architecture"},i={unversionedId:"es/concepts/architecture",id:"es/concepts/architecture",isDocsHomePage:!1,title:"Arquitectura",description:"Estructura inicial del proyecto",source:"@site/docs\\es\\concepts\\architecture.md",slug:"/es/concepts/architecture",permalink:"/manual/es/concepts/architecture",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/es/concepts/architecture.md",version:"current",sidebar_label:"Arquitectura",sidebar:"docs",previous:{title:"Aplicaciones externas",permalink:"/manual/es/tutorial/external-apps"},next:{title:"Enrutamiento",permalink:"/manual/es/concepts/routing"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Retic es un marco de trabajo para crear ",Object(a.b)("strong",{parentName:"p"},"aplicaci\xf3nes del lado del servidor"),". Retic est\xe1 escrito en Python. Utiliza Werkzeug como servidor."),Object(a.b)("p",null,"Una aplicaci\xf3n se define por ",Object(a.b)("strong",{parentName:"p"},"rutas, controladores y servicios"),". Retic provee la clase ",Object(a.b)("strong",{parentName:"p"},"Router")," que ayuda a definir los puntos de acceso de la aplicaci\xf3n."),Object(a.b)("p",null,"Retic recomienda la siguiente estructura de directorios para una f\xe1cil escalabilidad y mantenibilidad de la aplicaci\xf3n."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"\nretic-restapi-example\n\u2502\n\u2514\u2500\u2500\u2500apps\n\u2502   \u2502   urls.py\n\u2502   \u2502   ...\n|\n\u2514\u2500\u2500\u2500controllers\n\u2502   \u2502   controller1.py\n\u2502   \u2502   controller2.py\n\u2502   \u2502   ...\n\u2502\n\u2514\u2500\u2500\u2500models\n\u2502   \u2502   __init__.py\n\u2502   \u2502   model1.py\n|   \u2502   model2.py\n|   \u2502   ...\n\u2502\n\u2514\u2500\u2500\u2500routes\n\u2502   \u2502   routes.py\n|   \u2502   ...\n\u2502\n\u2514\u2500\u2500\u2500services\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500\u2500service1\n\u2502       \u2502   service1.py\n\u2502       \u2502   service2.py\n\u2502       \u2502   ...\n|   \u2502   ...\n\u2502\n\u2502   .env.development\n\u2502   .env.staging\n\u2502   .env.production\n\u2502   app.py\n\u2502   requirements.txt\n\u2502   settings.py\n\n")))}u.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||a;return r?c.a.createElement(m,i(i({ref:t},s),{},{components:r})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);