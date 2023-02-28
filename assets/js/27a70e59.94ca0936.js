"use strict";(self.webpackChunkcict_document=self.webpackChunkcict_document||[]).push([[7963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={id:"authentication_principle",title:"Authentication Principle",sidebar_label:"Authentication Principle",sidebar_position:1},s=void 0,o={unversionedId:"design_principles/authentication_principle",id:"design_principles/authentication_principle",title:"Authentication Principle",description:"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.",source:"@site/docs/design_principles/authentication_principle.md",sourceDirName:"design_principles",slug:"/design_principles/authentication_principle",permalink:"/cict-document-deploy/docs/next/design_principles/authentication_principle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design_principles/authentication_principle.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"authentication_principle",title:"Authentication Principle",sidebar_label:"Authentication Principle",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Design Principles",permalink:"/cict-document-deploy/docs/next/category/design-principles"},next:{title:"Topics",permalink:"/cict-document-deploy/docs/next/category/topics"}},c={},l=[{value:"There are four roles in the authentication service:",id:"there-are-four-roles-in-the-authentication-service",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.")),(0,i.kt)("p",null,"The authentication service is designed to provide secure and reliable authentication for users of a platform. The service is built using gRPC, a high-performance, open-source framework that enables efficient communication between distributed systems. The authentication service is deployed in a Kubernetes cluster, which provides scalability, reliability, and ease of management."),(0,i.kt)("p",null,"The authentication service is designed to use the concepts of workspace, scope, and user to manage authentication and access control. Each user is assigned to one or many workspaces, and each workspace has many scopes. A scope is a logical grouping of APIs that are related to each other, and each scope has a set of permissions associated with it. Users are granted access to scopes based on their roles."),(0,i.kt)("h3",{id:"there-are-four-roles-in-the-authentication-service"},"There are four roles in the authentication service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Super User"),": Super users have access to all workspaces and scopes. They are granted this role on an individual basis, and it is not tied to any specific workspace or scope. Super users have the ability to access any resource in any workspace or scope.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Workspace Owner"),": Workspace owners have access to the workspace they own, but not to other workspaces. They are granted this role on a per-workspace basis. Workspace owners have the ability to manage the resources within their workspace, including creating new scopes and adding users to those scopes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scope Admin"),": Scope admins have full access to the scope they are assigned to. They can manage the resources within that scope, including adding and removing users and managing permissions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scope User"),": Scope users have limited access to the resources within the scope they are assigned to. Their access is controlled by the permissions that are associated with that scope."))),(0,i.kt)("p",null,"The authentication service uses a set of APIs to manage workspaces, scopes, and users. These APIs are designed to be flexible and extensible, so that new workspaces, scopes, and roles can be added as needed. The authentication service also provides a set of libraries and SDKs that can be used by other services and applications to integrate with the authentication system."),(0,i.kt)("p",null,"To ensure the security and reliability of the authentication service, several design principles are followed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure Communication"),": All communication between the authentication service and other services and applications is secured using industry-standard encryption and authentication protocols.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Role-Based Access Control"),": Access to resources is granted based on the role of the user. This ensures that users only have access to the resources they need, and that they cannot access resources that they are not authorized to access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scalability and Performance"),": The authentication service is designed to be highly scalable and performant, so that it can handle large volumes of requests and provide fast response times.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fault Tolerance"),": The authentication service is designed to be fault-tolerant, so that it can continue to operate even in the event of hardware or software failures.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Auditability"),": All actions taken within the authentication service are logged and auditable, so that any security incidents or other issues can be traced back to their source."))),(0,i.kt)("p",null,"Overall, the design principles of the authentication service are focused on providing a secure, reliable, and scalable authentication system that can be easily integrated with other services and applications. By following these principles, the authentication service can help to ensure the security and privacy of users, while also enabling efficient and effective access control."))}d.isMDXComponent=!0}}]);