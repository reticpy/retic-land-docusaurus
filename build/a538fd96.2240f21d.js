(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(89)),s={id:"requirements",title:"Paquetes necesarios",sidebar_label:"Paquetes necesarios",description:"Instalar paquetes necesarios",slug:"/getting-started/requirements"},o={unversionedId:"getting-started/requirements",id:"getting-started/requirements",isDocsHomePage:!1,title:"Paquetes necesarios",description:"Instalar paquetes necesarios",source:"@site/docs\\es\\getting-started\\requirements.md",slug:"/getting-started/requirements",permalink:"/manual/getting-started/requirements",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/getting-started/requirements.md",version:"current",sidebar_label:"Paquetes necesarios",sidebar:"docs",previous:{title:"Introducci\xf3n",permalink:"/manual/introduction"},next:{title:"Entorno virtual",permalink:"/manual/getting-started/virtual-environments"}},c=[{value:"Instalar Python",id:"instalar-python",children:[]},{value:"Instalar Pip",id:"instalar-pip",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"instalar-python"},"Instalar Python"),Object(i.b)("p",null,"Retic es compatible con la versi\xf3n 2.7 de ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.python.org/downloads/"}),"Python")," y superiores, sin embargo, se recomienda utilizar la \xfaltima versi\xf3n de Python 3."),Object(i.b)("h2",{id:"instalar-pip"},"Instalar Pip"),Object(i.b)("p",null,"Pip es un instalador de paquetes para Python. A continuaci\xf3n se muestra c\xf3mo instalarlo en los sistemas operativos m\xe1s populares."),Object(i.b)("p",null,"Instalaci\xf3n en MacOS:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\n# Instalaci\xf3n del paquete\nsudo easy_install pip\n\n# Ver la versi\xf3n instalada\npip --version\n\n")),Object(i.b)("p",null,"Instalaci\xf3n en Linux:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\n# Instalaci\xf3n del paquete\nsudo apt-get install python-pip\nsudo apt-get install python3-pip\n\n# Ver la versi\xf3n instalada\npip --version\n\n")),Object(i.b)("p",null,"Instalaci\xf3n en Windows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Descarga la ultima versi\xf3n desde ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://bootstrap.pypa.io/get-pip.py"}),"get-pip.py")),Object(i.b)("li",{parentName:"ul"},"Dentro de la carpeta donde se encuentre el archivo ",Object(i.b)("strong",{parentName:"li"},"get-pip.py")," ejecuta:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\n# Instalaci\xf3n del paquete\npython get-pip.py\n\n# Ver la versi\xf3n instalada\npip --version\n\n")))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);