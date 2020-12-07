(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return p}));var t=n(2),a=n(6),i=(n(0),n(89)),o={id:"services",title:"Servicios",sidebar_label:"Servicios",description:"Servicios de la aplicaci\xf3n",slug:"/concepts/services"},s={unversionedId:"concepts/services",id:"concepts/services",isDocsHomePage:!1,title:"Servicios",description:"Servicios de la aplicaci\xf3n",source:"@site/docs\\es\\concepts\\services.md",slug:"/concepts/services",permalink:"/manual/concepts/services",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/concepts/services.md",version:"current",sidebar_label:"Servicios",sidebar:"docs",previous:{title:"Controladores",permalink:"/manual/concepts/controllers"},next:{title:"Configuraci\xf3n",permalink:"/manual/concepts/settings"}},c=[],u={rightToc:c};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Retic recomienda estructurar la aplicaci\xf3n de forma modular. Independizar el funcionamiento de los controladores de los servicios que realizan su acci\xf3n. F\xe1cilitando la integraci\xf3n con las diferentes pruebas que la aplicaci\xf3n requiera. Adem\xe1s, de minimizar el c\xf3digo repetido."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# services/users/users.py\n\n"""Servicios para el controlador de usuarios"""\n\n# Retic\nfrom retic import App as app\n\n# Requests\nimport requests\n\n# Constants\nURL_USERS = app.apps[\'backend\'][\'example\'][\'base_url\'] + \\\n    app.apps[\'backend\'][\'example\'][\'users\']\n\n\ndef get_by_id_db(user_id):\n    """Encontrar un usuario en base a un identificador\n\n    :param user_id: Identificador del usuario\n    """\n\n    """Declarar variables"""\n    user = None\n\n    """Obtener todos los usuarios"""\n    users_req = requests.get(URL_USERS)\n\n    """Transformar en json"""\n    users = users_req.json()\n\n    """Realizar la busqueda"""\n    for _user in users:\n        if _user["id"] == user_id:\n            user = _user\n\n    """Retornar informaci\xf3n"""\n    return user\n\n')))}p.isMDXComponent=!0},89:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=t,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||i;return n?a.a.createElement(m,s(s({ref:r},u),{},{components:n})):a.a.createElement(m,s({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);