(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(89)),o={id:"next",title:"Next",sidebar_label:"Next",description:"Next",slug:"/es/api/next"},s={unversionedId:"es/api/next",id:"es/api/next",isDocsHomePage:!1,title:"Next",description:"Next",source:"@site/docs\\es\\api\\next.md",slug:"/es/api/next",permalink:"/manual/es/api/next",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/es/api/next.md",version:"current",sidebar_label:"Next",sidebar:"docs",previous:{title:"Response",permalink:"/manual/es/api/response"},next:{title:"Middlewares",permalink:"/manual/es/api/middlewares"}},c=[],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"La clase ",Object(i.b)("inlineCode",{parentName:"p"},"Next")," permite pasar el control de la petici\xf3n al siguiente controlador. Con frecuencia se utiliza en el desarrollo de ",Object(i.b)("em",{parentName:"p"},"middlewares"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic import Request, Response, Next\nfrom retic.services.responses import error_response\nfrom retic.services.validations import validate_obligate_fields\n\n# Services\nfrom services.users.users as users\n\ndef oauth(req: Request, res: Response, next:Next):\n\n    """Autentificar usuario"""\n    _user = users.validate(req.headers.get(\'authorization\'))\n\n    if _user["valid"] is False:\n        return res.forbidden()\n\n    # Continuar con el siguiente middleware\n    next()\n\n')))}p.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||i;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);