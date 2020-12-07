(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return s}));var t=n(2),r=n(6),p=(n(0),n(89)),i={id:"app",title:"Archivo principal",sidebar_label:"Archivo principal",description:"Archivo principal de la Aplicaci\xf3n",slug:"/concepts/app"},o={unversionedId:"concepts/app",id:"concepts/app",isDocsHomePage:!1,title:"Archivo principal",description:"Archivo principal de la Aplicaci\xf3n",source:"@site/docs\\es\\concepts\\app.md",slug:"/concepts/app",permalink:"/manual/concepts/app",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/concepts/app.md",version:"current",sidebar_label:"Archivo principal",sidebar:"docs",previous:{title:"Configuraci\xf3n",permalink:"/manual/concepts/settings"},next:{title:"Request",permalink:"/manual/api/request"}},c=[{value:"Clase App",id:"clase-app",children:[{value:"Propiedades",id:"propiedades",children:[]},{value:"Funciones",id:"funciones",children:[]}]}],l={rightToc:c};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"clase-app"},"Clase App"),Object(p.b)("p",null,"La clase ",Object(p.b)("strong",{parentName:"p"},"App")," contiene la instancia principal de la aplicaci\xf3n."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"env"),": Variables de entorno de la aplicaci\xf3n.")),Object(p.b)("h3",{id:"propiedades"},"Propiedades"),Object(p.b)("h4",{id:"apps"},"apps"),Object(p.b)("p",null,"Contiene las referencias a las aplicaciones como: aplicaciones externas, etc."),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# apps/urls.py\n\n# Retic\nfrom retic import App as app\n\n"""Define otras aplicaciones"""\nBACKEND_EXAMPLE= {\n    u"base_url": app.config.get(\'APP_BACKEND_EXAMPLE\'),\n    u"users": "/users",\n}\n\n"""Crea el objeto referencia de las apps"""\nAPP_BACKEND = {\n    u"example": BACKEND_EXAMPLE,\n}\n\n"""Agrega las aplicaciones a Retic"""\napp.use(APP_BACKEND, "backend")\n\n')),Object(p.b)("p",null,"El codigo anterior guarda la referencias a las aplicaciones externas utilizadas en la aplicaci\xf3n. A continuaci\xf3n se muestra como obtener los valores."),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"\n# services\\users\\users.py\n\n\"\"\"Servicios para el controlador de usuarios\"\"\"\n\n# Retic\nfrom retic import App as app\n\n# Requests\nimport requests\n\n# Constants\nURL_USERS = app.apps['backend']['example']['base_url'] + \\\n    app.apps['backend']['example']['users']\n\n")),Object(p.b)("h4",{id:"config"},"config"),Object(p.b)("p",null,"Guarda la configuraci\xf3n de la apliacci\xf3n. Ver ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"./settings"}),"Configuraci\xf3n")," para m\xe1s detalles."),Object(p.b)("h4",{id:"router"},"router"),Object(p.b)("p",null,"Instancia de la clase ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"./routing"}),"Router"),"."),Object(p.b)("h3",{id:"funciones"},"Funciones"),Object(p.b)("h4",{id:"useitem-any-name-str--"},"use(",Object(p.b)("em",{parentName:"h4"},"item: any"),", ",Object(p.b)("em",{parentName:"h4"},"name: str"),' = "")'),Object(p.b)("p",null,"Configuraci\xf3n de los middleware de la apliacci\xf3n, y permite importar otras configuraci\xf3n como rutas de acceso de la aplicaci\xf3n."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"item"),": Elemento a importar a la apliaci\xf3n. Si es de tipo ",Object(p.b)("strong",{parentName:"p"},"Router")," se almacena en la propiedad ",Object(p.b)("strong",{parentName:"p"},"router")," de la aplicaci\xf3n. De lo contrario se almancena en la propiedad ",Object(p.b)("strong",{parentName:"p"},"apps"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"name"),": Nombre del elemento a guardar."))),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# apps/urls.py\n\n# Retic\nfrom retic import App as app\n\n"""Define otras aplicaciones"""\nBACKEND_EXAMPLE= {\n    u"base_url": app.config.get(\'APP_BACKEND_EXAMPLE\'),\n    u"users": "/users",\n}\n\n"""Crea el objeto referencia de las apps"""\nAPP_BACKEND = {\n    u"example": BACKEND_EXAMPLE,\n}\n\n"""Agrega las aplicaciones a Retic"""\napp.use(APP_BACKEND, "backend")\n\n')),Object(p.b)("h4",{id:"applicationenviron-start_response"},"application(environ, start_response)"),Object(p.b)("p",null,"Aplicaci\xf3n para enviar una respuesta a las peticiones del cliente. Se utiliza en despliegues de la aplicaci\xf3n con ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface"}),"WSGI"),"."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"environ"),": Define el ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"../api/request"}),"Request")," de la petici\xf3n.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"start_response"),": Define el ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"../api/response"}),"Response")," de la petici\xf3n."))),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# app.py\n\n"""Main app"""\n\n# Retic\nfrom retic import App as app\n\n# Settings\nimport settings\n\n# Apps\nfrom apps import urls\n\n# Routes\nfrom routes import router\n\n# Agregar las rutas a la aplicaci\xf3n\napp.use(router)\n\n\ndef application(req, res):\n    """Despliegue de la aplicaci\xf3n\n\n    Interface entre WSGI y la aplicaci\xf3n, utiliza passenger_wsgi.py\n    """\n    return app.application(req, res)\n\n\nif __name__ == "__main__":\n    # Create web server\n    app.listen(\n        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)\n        hostname=app.env("APP_HOSTNAME"),\n        # Obtener la variable de entorno APP_PORT en formato n\xfamerico. De no existir, retorna 1801.\n        port=app.env.int("APP_PORT", app.config.get("default_port"))\n    )\n\n')),Object(p.b)("h4",{id:"clear"},"clear()"),Object(p.b)("p",null,"Reinicia la aplicaci\xf3n a su estado inicial, borra la configuraci\xf3n, las rutas y las apps."),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# app.py\n\n"""Main app"""\n\n# Retic\nfrom retic import App as app\n\n# Settings\nimport settings\n\n# Apps\nfrom apps import urls\n\n# Routes\nfrom routes import router\n\n# Eliminar informaci\xf3n previa en la aplicaci\xf3n\napp.clear()\n\n# Agregar las rutas a la aplicaci\xf3n\napp.use(router)\n\nif __name__ == "__main__":\n    # Create web server\n    app.listen(\n        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)\n        hostname=app.env("APP_HOSTNAME"),\n        # Obtener la variable de entorno APP_PORT en formato n\xfamerico. De no existir, retorna 1801.\n        port=app.env.int("APP_PORT", app.config.get("default_port"))\n    )\n\n')),Object(p.b)("h4",{id:"listenhostname-str--localhost-port-int--1801-application-any--none-use_reloader-bool--false-use_debugger-bool--false-use_evalex-bool--true-extra_files-any--none-reloader_interval-int--1-reloader_type-str--auto-threaded-bool--false-processes-int--1-request_handler-any--none-static_files-any--none-passthrough_errorsfalse-ssl_context-any--none"},"listen(",Object(p.b)("em",{parentName:"h4"},"hostname: str"),' = "localhost", ',Object(p.b)("em",{parentName:"h4"},"port: int")," = 1801, ",Object(p.b)("em",{parentName:"h4"},"application: any")," = None, ",Object(p.b)("em",{parentName:"h4"},"use_reloader: bool")," = False, ",Object(p.b)("em",{parentName:"h4"},"use_debugger: bool")," = False, ",Object(p.b)("em",{parentName:"h4"},"use_evalex: bool")," = True, ",Object(p.b)("em",{parentName:"h4"},"extra_files: any")," = None, ",Object(p.b)("em",{parentName:"h4"},"reloader_interval: int")," = 1, ",Object(p.b)("em",{parentName:"h4"},"reloader_type: str")," = 'auto', ",Object(p.b)("em",{parentName:"h4"},"threaded: bool")," = False, ",Object(p.b)("em",{parentName:"h4"},"processes: int")," = 1, ",Object(p.b)("em",{parentName:"h4"},"request_handler: any")," = None, ",Object(p.b)("em",{parentName:"h4"},"static_files: any")," = None, ",Object(p.b)("em",{parentName:"h4"},"passthrough_errors=False"),", ",Object(p.b)("em",{parentName:"h4"},"ssl_context: any")," = None)"),Object(p.b)("p",null,"Crea un servidor web basado en parametros de configuracion."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"environ"),": Define el ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"../api/request"}),"Request")," de la petici\xf3n.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"hostname"),": El host a enlazar, por ejemplo ",Object(p.b)("inlineCode",{parentName:"p"},"localhost"),". Si inicia con ",Object(p.b)("inlineCode",{parentName:"p"},"unix://")," se utiliza un socket de Unix en lugar de un socket de tipo TCP.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"port"),": Puerto del servidor. Ejemplo: ",Object(p.b)("inlineCode",{parentName:"p"},"8080"),".")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"application"),": Aplicaci\xf3n WSGI a ejecutar.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"use_reloader"),": Reinicia el servidor automaticamente si se realizan cambios en la aplicaci\xf3n.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"use_debugger"),": Crea el servidor en modo debugger.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"use_evalex"),": Habilita la evaluaci\xf3n de excepsiones de la aplicaci\xf3n.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"extra_files"),": Una lista de archivos a cargar al inicio del servidor. Por ejemplo configuraci\xf3n extras del servidor.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"reloader_interval"),": Asigna el intervalo de reinico del servidor en segundos.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"reloader_type"),": El tipo de reinicio. Por defecto utiliza la detecci\xf3n automatica. Otros valores: ",Object(p.b)("inlineCode",{parentName:"p"},"stat")," y ",Object(p.b)("inlineCode",{parentName:"p"},"watchdog"),".")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"threaded"),": Aislas las peticiones en hilos individuales.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"processes"),": Si es mayor que 1, maneja cada solicitud en un nuevo proceso hasta el n\xfamero m\xe1ximo de procesos concurrentes definido.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"request_handler"),": Par\xe1metro opcional que se puede utilizar para anular la clase ",Object(p.b)("strong",{parentName:"p"},"Request")," predeterminada.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"static_files"),": Una lista o diccionario de rutas para archivos estaticos.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"passthrough_errors"),": Deshabilita el manejo de excepciones, lo que significa que el servidor dejar\xe1 de funcionar cuando suceda un error.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("strong",{parentName:"p"},"ssl_context"),": Un contexto SSL para la conexi\xf3n. Puede ser una clase ",Object(p.b)("inlineCode",{parentName:"p"},"ssl.SSLContext"),", una tupla con el formato",Object(p.b)("inlineCode",{parentName:"p"},"(cert_file, pkey_file)"),", una cadena",Object(p.b)("inlineCode",{parentName:"p"}," 'adhoc'")," si el servidor debe crear uno autom\xe1ticamente, o ",Object(p.b)("inlineCode",{parentName:"p"},"None")," para deshabilitar SSL (que es el defecto)."))),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'\n# app.py\n\n"""Main app"""\n\n# Retic\nfrom retic import App as app\n\n# Settings\nimport settings\n\n# Apps\nfrom apps import urls\n\n# Routes\nfrom routes import router\n\n# Agregar las rutas a la aplicaci\xf3n\napp.use(router)\n\nif __name__ == "__main__":\n    # Create web server\n    app.listen(\n        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)\n        hostname=app.env("APP_HOSTNAME"),\n        # Obtener la variable de entorno APP_PORT en formato n\xfamerico. De no existir, retorna 1801.\n        port=app.env.int("APP_PORT", app.config.get("default_port"))\n    )\n\n')))}s.isMDXComponent=!0},89:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},b=function(e){var a=s(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=t,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||p;return n?r.a.createElement(d,o(o({ref:a},l),{},{components:n})):r.a.createElement(d,o({ref:a},l))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);