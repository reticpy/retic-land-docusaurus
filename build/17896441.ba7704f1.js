(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(98),i=a(90),c=a(93),s=a(92);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(96);var d=function(){const{siteConfig:{title:e}}=Object(i.a)(),{pluginId:t}=Object(m.useActivePlugin)({failfast:!0}),a=Object(m.useActiveVersion)(t),{latestDocSuggestion:n,latestVersionSuggestion:r}=Object(m.useDocVersionSuggestions)(t);if(!r)return l.a.createElement(l.a.Fragment,null);const c=null!=n?n:(o=r).docs.find((e=>e.id===o.mainDocId));var o;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:c.path},"latest version"))," ","(",r.label,")."))};var u=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{let n,i;function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(i=document.getElementsByClassName(e);a<i.length&&!n;){const e=i[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));c.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},g=a(53),E=a.n(g);const v="table-of-contents__link";function p({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:v,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(p,{isChild:!0,headings:e.children}))))):null}var b=function({headings:e}){return u(v,"table-of-contents__link--active",100),l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(p,{headings:e}))},f=a(91),h=a(54),N=a.n(h);t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n,titleDelimiter:s}=t,{content:u}=e,{metadata:g}=u,{description:E,title:v,permalink:p,editUrl:h,lastUpdatedAt:_,lastUpdatedBy:w}=g,{frontMatter:{image:y,keywords:O,hide_title:k,hide_table_of_contents:j}}=u,{pluginId:C}=Object(m.useActivePlugin)({failfast:!0}),x=Object(m.useVersions)(C),I=Object(m.useActiveVersion)(C),L=x.length>1,A=v?`${v} ${s} ${n}`:n,S=Object(c.a)(y,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),O&&O.length&&l.a.createElement("meta",{name:"keywords",content:O.join(",")}),y&&l.a.createElement("meta",{property:"og:image",content:S}),y&&l.a.createElement("meta",{property:"twitter:image",content:S}),y&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),p&&l.a.createElement("meta",{property:"og:url",content:a+p}),p&&l.a.createElement("link",{rel:"canonical",href:a+p})),l.a.createElement("div",{className:Object(f.a)("container padding-vert--lg",N.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(f.a)("col",{[N.a.docItemCol]:!j})},l.a.createElement(d,null),l.a.createElement("div",{className:N.a.docItemContainer},l.a.createElement("article",null,L&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:N.a.docTitle},v)),l.a.createElement("div",{className:"markdown"},l.a.createElement(u,null))),(h||_||w)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||w)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:N.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),w&&" "),w&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,w)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:g})))),!j&&u.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(b,{headings:u.rightToc})))))}}}]);