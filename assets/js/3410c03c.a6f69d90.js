"use strict";(self.webpackChunkcict_document=self.webpackChunkcict_document||[]).push([[8892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"envoy",title:"Envoy Proxy",sidebar_label:"Envoy Proxy",sidebar_position:5},o=void 0,s={unversionedId:"prerequisites/envoy",id:"version-1.0.0/prerequisites/envoy",title:"Envoy Proxy",description:"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.",source:"@site/versioned_docs/version-1.0.0/prerequisites/envoy.md",sourceDirName:"prerequisites",slug:"/prerequisites/envoy",permalink:"/cict-document-deploy/docs/prerequisites/envoy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/prerequisites/envoy.md",tags:[],version:"1.0.0",sidebarPosition:5,frontMatter:{id:"envoy",title:"Envoy Proxy",sidebar_label:"Envoy Proxy",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Bazel Integration",permalink:"/cict-document-deploy/docs/prerequisites/bazel_integration"},next:{title:"Open Telemetry",permalink:"/cict-document-deploy/docs/prerequisites/opentelemetry"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Traffic Management",id:"traffic-management",level:3},{value:"Observability",id:"observability",level:3},{value:"Security",id:"security",level:3},{value:"Extensibility",id:"extensibility",level:3},{value:"References:",id:"references",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.")),(0,i.kt)("p",null,"Envoy is an open-source edge and service proxy, designed for cloud-native applications. It provides a scalable and high-performance solution for handling traffic management, observability, security, and more."),(0,i.kt)("p",null,"With its modular architecture, Envoy offers a flexible platform for integrating with different systems and technologies. It supports various protocols and can be configured using a declarative configuration file."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Envoy provides a rich set of features to handle modern application requirements:"),(0,i.kt)("h3",{id:"traffic-management"},"Traffic Management"),(0,i.kt)("p",null,"Envoy's traffic management features include load balancing, routing, retries, and circuit breaking. These features enable Envoy to handle traffic efficiently, optimize resource usage, and provide an excellent user experience."),(0,i.kt)("p",null,"Envoy supports various load balancing algorithms such as round-robin, least connections, and consistent hash. It also provides advanced routing capabilities such as header-based routing, URL matching, and path rewriting."),(0,i.kt)("p",null,"In addition, Envoy can automatically retry failed requests, helping to improve application availability. It can also break circuits if a downstream service is not responsive, preventing cascading failures."),(0,i.kt)("h3",{id:"observability"},"Observability"),(0,i.kt)("p",null,"Envoy provides rich observability features to help monitor and debug applications. It exposes a variety of metrics, logs, and traces that can be used to gain insight into the system's behavior."),(0,i.kt)("p",null,"Envoy integrates with popular observability tools such as Prometheus, Grafana, and Jaeger. It also provides its own built-in statistics dashboard and supports dynamic logging configuration."),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"Envoy provides robust security features to protect applications. It supports TLS termination, authentication, and authorization, ensuring secure communication between services."),(0,i.kt)("p",null,"Envoy can terminate TLS connections and verify client certificates before forwarding requests to upstream services. It also provides various authentication mechanisms such as OAuth2, JWT, and LDAP."),(0,i.kt)("p",null,"In addition, Envoy supports access control policies that can be used to enforce authorization rules for incoming requests."),(0,i.kt)("h3",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,"Envoy's extensibility is one of its strongest features. It provides a rich set of APIs and interfaces that can be used to extend its functionality."),(0,i.kt)("p",null,"Envoy's filters are a powerful way to extend its functionality. Filters can be used to implement custom load balancing algorithms, routing logic, authentication and authorization mechanisms, and more."),(0,i.kt)("p",null,"In addition, Envoy supports a plugin-based architecture that enables developers to add new features and functionality easily."),(0,i.kt)("h3",{id:"references"},"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.envoyproxy.io/"},"Envoy Proxy official website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/envoyproxy/envoy"},"Envoy Proxy GitHub repository")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.envoyproxy.io/docs/envoy/latest/"},"Envoy Proxy documentation"))))}p.isMDXComponent=!0}}]);