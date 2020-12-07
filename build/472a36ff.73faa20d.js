(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),s=(t(0),t(89)),i={id:"services",title:"Servicios",sidebar_label:"Servicios",description:"Servicios",slug:"/api/services"},o={unversionedId:"api/services",id:"api/services",isDocsHomePage:!1,title:"Servicios",description:"Servicios",source:"@site/docs\\es\\api\\services.md",slug:"/api/services",permalink:"/manual/api/services",editUrl:"https://github.com/reticpy/retic-land-docusaurus/edit/master/docs/api/services.md",version:"current",sidebar_label:"Servicios",sidebar:"docs",previous:{title:"Middlewares",permalink:"/manual/api/middlewares"}},c=[{value:"Servicios de respuesta",id:"servicios-de-respuesta",children:[{value:"success_response(<em>data: any</em> = None, <em>msg: str</em> = &quot;&quot;)",id:"success_responsedata-any--none-msg-str--",children:[]},{value:"error_response(<em>msg: str</em> = &quot;&quot;)",id:"error_responsemsg-str--",children:[]}]},{value:"Servicios generales",id:"servicios-generales",children:[{value:"Servicios de URLs",id:"servicios-de-urls",children:[]},{value:"Servicios del Tiempo",id:"servicios-del-tiempo",children:[]}]},{value:"Sericios de validaci\xf3n",id:"sericios-de-validaci\xf3n",children:[{value:"validate_obligate_fields(<em>fields: any</em> = None)",id:"validate_obligate_fieldsfields-any--none",children:[]}]},{value:"Servicios JSON",id:"servicios-json",children:[{value:"jsonify(<em>object: any</em>)",id:"jsonifyobject-any",children:[]},{value:"parse(<em>content: str</em>)",id:"parsecontent-str",children:[]}]}],l={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Retic cuenta con un conjunto de servicios para apoyarte en cierto tipo de funcionalidades que tu aplicacion necesita."),Object(s.b)("h2",{id:"servicios-de-respuesta"},"Servicios de respuesta"),Object(s.b)("p",null,"Es importante definir un estandar de respuesta a una petici\xf3n del cliente, para la mantenibilidad de una aplicaci\xf3n. Retic recomienda seguir una estructura de 3 atributos."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "valid": bool,\n  "msg": str,\n  "data": dict\n}\n')),Object(s.b)("p",null,"Donde:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"valid"),": Representa que una petici\xf3n se ha realizado correctamente cuando su valor es ",Object(s.b)("inlineCode",{parentName:"p"},"True"),", o en caso contrario contiene errores, su valor es ",Object(s.b)("inlineCode",{parentName:"p"},"False"),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"msg"),": Mensaje que describe el resultado de la petici\xf3n.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"data"),": Informaci\xf3n de respuesta a la petici\xf3n del cliente."))),Object(s.b)("h3",{id:"success_responsedata-any--none-msg-str--"},"success_response(",Object(s.b)("em",{parentName:"h3"},"data: any")," = None, ",Object(s.b)("em",{parentName:"h3"},"msg: str"),' = "")'),Object(s.b)("p",null,"Define la estructura de una respuesta a una petici\xf3n del cliente en formato JSON e indica que todo finaliz\xf3 correctamente."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"data"),": Informaci\xf3n a enviar al cliente.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"msg"),": Mensaje que indica que la petici\xf3n se complet\xf3 correctamente."))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic import Request, Response\nfrom retic.services.responses import success_response\n\ndef upload(req: Request, res: Response):\n    """Upload to Storage"""\n    res.ok(success_response(\n        data={u\'msg\': \'say hi!\'},\n        msg="The upload finishied."\n    ))\n\n')),Object(s.b)("p",null,"A continuaci\xf3n se presenta el resulta de la petici\xf3n en formato JSON."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "valid": true,\n  "msg": "The upload finishied.",\n  "data": {\n    "msg": "say hi!"\n  }\n}\n')),Object(s.b)("h3",{id:"error_responsemsg-str--"},"error_response(",Object(s.b)("em",{parentName:"h3"},"msg: str"),' = "")'),Object(s.b)("p",null,"Define la estructura de una respuesta a una petici\xf3n del cliente en formato JSON la cual contiene errores."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"msg"),": Mensaje que indica que la petici\xf3n no s\xe9 completo correctamente porque contiene errores.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic import Request, Response\nfrom retic.services.responses import error_response\n\ndef upload(req: Request, res: Response):\n\n    """Return a error message."""\n    return res.bad_request(\n        error_response(\n            "The param files is necesary."\n        )\n    )\n\n')),Object(s.b)("p",null,"A continuaci\xf3n se presenta el resulta de la petici\xf3n en formato JSON."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "valid": false,\n  "msg": "The param files is necesary."\n}\n')),Object(s.b)("h2",{id:"servicios-generales"},"Servicios generales"),Object(s.b)("p",null,"Retic proporciona una variedad de servicios generalizados, con enfoque en validaci\xf3n de par\xe1metros obligatorios y otras funcionalidades."),Object(s.b)("h3",{id:"servicios-de-urls"},"Servicios de URLs"),Object(s.b)("h4",{id:"urlencodeurl-str"},"urlencode(",Object(s.b)("em",{parentName:"h4"},"url: str"),")"),Object(s.b)("p",null,"Esta funci\xf3n es conveniente cuando se codifica una cadena para usar parte de una URL en una consulta como una forma conveniente de pasar variables a la p\xe1gina siguiente."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"url"),": URL a codificar.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic.services.general.urls import urlencode\n\ndef get_from_req(url):\n    """Codificar la url"""\n    url_encode = urlencode(url)\n\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# Entrada\n"http://example.com/"\n\n# Salida\n"http%3A%2F%2Fexample.com%2F"\n\n')),Object(s.b)("h4",{id:"slugifytext-str--"},"slugify(",Object(s.b)("em",{parentName:"h4"},"text: str"),' = "")'),Object(s.b)("p",null,"Simplifica las cadenas feas en URL amigables."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"text"),": Texto a simplificar de tipo ",Object(s.b)("inlineCode",{parentName:"li"},"str"),".")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic.services.general.urls import slugify\n\ndef get_slug_from_title(title):\n    """Get slug from a title"""\n    return slugify(title)\n\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# Entrada\n"This Alpha\u2019s Pheromones Are Exploding"\n\n# Salida\n"this-alphas-pheromones-are-exploding"\n\n')),Object(s.b)("h3",{id:"servicios-del-tiempo"},"Servicios del Tiempo"),Object(s.b)("h4",{id:"sleepseconds-int--0"},"sleep(",Object(s.b)("em",{parentName:"h4"},"seconds: int")," = 0)"),Object(s.b)("p",null,"El m\xe9todo de tiempo Python sleep() suspende la ejecuci\xf3n por el n\xfamero de segundos dado. El argumento puede ser un n\xfamero de coma flotante para indicar un tiempo de descanso m\xe1s preciso."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"seconds"),": Total de segundos que el programa estar\xe1 durmiendo.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic.services.general.time import sleep\n\n# Contantes\nSLEEP_TIME=2\n\ndef download_from_url(url):\n    """Dormir el programa durante un tiempo especifico"""\n    sleep(SLEEP_TIME)\n\n')),Object(s.b)("h2",{id:"sericios-de-validaci\xf3n"},"Sericios de validaci\xf3n"),Object(s.b)("p",null,"Retic ofrece la capacidad de validar ciertos requisitos en una petici\xf3n de forma nativa. Por ejemplo que los par\xe1metros obligatorios en una petici\xf3n sean v\xe1lidos."),Object(s.b)("h3",{id:"validate_obligate_fieldsfields-any--none"},"validate_obligate_fields(",Object(s.b)("em",{parentName:"h3"},"fields: any")," = None)"),Object(s.b)("p",null,"La mayor\xeda de las veces existen valores que son obligatorios, Retic ofrece el servicio ",Object(s.b)("inlineCode",{parentName:"p"},"validate_obligate_fields(...)")," que verifica si una lista de par\xe1metros obligatorios son validos."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"fields"),": Diccionario que contiene todos los par\xe1metros que son obligatorios, esos valores pueden ser de tipo ",Object(s.b)("inlineCode",{parentName:"li"},"list")," o simples valores.")),Object(s.b)("p",null,"El siguiente ejemplo valida que exista el parametro ",Object(s.b)("inlineCode",{parentName:"p"},"files")," el cual se obtiene cuando se envia un archivo en una petici\xf3n."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic import Request, Response\n\n# Services\nfrom retic.services.validations import validate_obligate_fields\nfrom retic.services.responses import error_response\n\ndef upload(req: Request, res: Response):\n    """Obtener una lsita desde la petici\xf3n, si no existe, retorna una lista vacia por defecto.\n    """\n\n    _files = req.files.getlist(\'files\') or list()\n\n    """Validar si todos los campos obligatorios son validos"""\n    _validate = validate_obligate_fields({\n        u\'files\': _files,\n        u\'source\': req.headers[\'source\'] if "source" in req.headers else None\n    })\n\n    """Si existe alg\xfan campo invalido, retorna un mensaje de error y una respuesta de tipo 400 Bad request.\n    """\n    if _validate["valid"] is False:\n        return res.bad_request(\n            error_response(\n                "The param {} is necesary.".format(_validate["error"])\n            )\n        )\n\n')),Object(s.b)("h2",{id:"servicios-json"},"Servicios JSON"),Object(s.b)("p",null,"Servicios para la manipulaci\xf3n de objetos tipo JSON y su equivalente en otros formatos."),Object(s.b)("h3",{id:"jsonifyobject-any"},"jsonify(",Object(s.b)("em",{parentName:"h3"},"object: any"),")"),Object(s.b)("p",null,"Convierte un diccionario JSON a su equivalente en cadena de texto."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"object"),": Es el objeto de respuesta del cliente, si el objeto es str, devuelve su valor sin transformaci\xf3n, de lo contrario crea una representaci\xf3n del objeto en formato JSON.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"\n# Retic\nfrom retic import Request, Response\nfrom retic.services.general.json import jsonify\n\ndef upload(req: Request, res: Response):\n    text = jsonify({u'msg': 'say hi!'})\n\n")),Object(s.b)("p",null,"A continuaci\xf3n se presenta el resulta de la petici\xf3n en cadena de texto."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'\ntext: \'{"msg": "say hi!"}\'\n\n')),Object(s.b)("h3",{id:"parsecontent-str"},"parse(",Object(s.b)("em",{parentName:"h3"},"content: str"),")"),Object(s.b)("p",null,"Deserializar (una instancia de str, bytes o bytearray que contiene un documento JSON) a un objeto Python."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Par\xe1metros:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"object"),": Contenido de type str, bytes o bytearray que contiene un JSON v\xe1lido.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'\n# Retic\nfrom retic import Request, Response\nfrom retic.services.general.json import parse\n\ndef upload(req: Request, res: Response):\n    text_json = parse(\'{"msg": "say hi!"}\')\n\n')),Object(s.b)("p",null,"A continuaci\xf3n se presenta el resulta de la petici\xf3n en formato JSON."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'\ntext_json: {"msg": "say hi!"}\n\n')))}p.isMDXComponent=!0},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);