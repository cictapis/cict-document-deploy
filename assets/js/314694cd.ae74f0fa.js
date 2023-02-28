"use strict";(self.webpackChunkcict_document=self.webpackChunkcict_document||[]).push([[3455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||i;return n?l.createElement(m,o(o({ref:t},d),{},{components:n})):l.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n(67294)},65488:(e,t,n)=>{n(67294),n(72389)},39141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));n(65488),n(85162);const i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",sidebar_position:2},o=void 0,r={unversionedId:"getting-started",id:"version-1.0.0/getting-started",title:"Getting Started",description:"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.",source:"@site/versioned_docs/version-1.0.0/getting_start.md",sourceDirName:".",slug:"/getting-started",permalink:"/cict-document-deploy/docs/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/getting_start.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cict-document-deploy/docs/intro"},next:{title:"Prerequisites",permalink:"/cict-document-deploy/docs/category/prerequisites"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"Install WSL2",id:"install-wsl2",level:4},{value:"Install Docker Desktop for Windows",id:"install-docker-desktop-for-windows",level:4},{value:"Install Minikube",id:"install-minikube",level:4},{value:"Install Bazelisk",id:"install-bazelisk",level:4},{value:"Install Golang",id:"install-golang",level:4},{value:"Linux",id:"linux",level:3},{value:"Install Docker",id:"install-docker",level:4},{value:"Install Minikube",id:"install-minikube-1",level:4},{value:"Install Bazelisk",id:"install-bazelisk-1",level:4},{value:"Install Golang",id:"install-golang-1",level:4},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Welcome to the CICT platform! This guide will help you set up your development environment on both Windows and Linux operating systems using Minikube. We will also install and configure Golang and Bazel using Bazelisk."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before starting the setup process, make sure you have the following software installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Git"),(0,a.kt)("li",{parentName:"ul"},"Docker"),(0,a.kt)("li",{parentName:"ul"},"Minikube"),(0,a.kt)("li",{parentName:"ul"},"Bazelisk"),(0,a.kt)("li",{parentName:"ul"},"Golang")),(0,a.kt)("p",null,"For Windows users, make sure you have WSL2 installed as well."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("h4",{id:"install-wsl2"},"Install WSL2"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the instructions to install ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL2")," on your Windows machine.")),(0,a.kt)("h4",{id:"install-docker-desktop-for-windows"},"Install Docker Desktop for Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and install ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows/"},"Docker Desktop for Windows"),".")),(0,a.kt)("h4",{id:"install-minikube"},"Install Minikube"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once downloaded, copy the binary to a location in your PATH environment variable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Minikube using the command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube start\n")),(0,a.kt)("h4",{id:"install-bazelisk"},"Install Bazelisk"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk/releases"},"Bazelisk"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once downloaded, copy the binary to a location in your PATH environment variable."))),(0,a.kt)("h4",{id:"install-golang"},"Install Golang"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Golang"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the instructions to install Golang on your Windows machine."))),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("h4",{id:"install-docker"},"Install Docker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the instructions to install ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," on your Linux machine.")),(0,a.kt)("h4",{id:"install-minikube-1"},"Install Minikube"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once downloaded, copy the binary to a location in your PATH environment variable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Minikube using the command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube start\n")),(0,a.kt)("h4",{id:"install-bazelisk-1"},"Install Bazelisk"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk/releases"},"Bazelisk"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once downloaded, copy the binary to a location in your PATH environment variable."))),(0,a.kt)("h4",{id:"install-golang-1"},"Install Golang"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the instructions to install Golang on your Linux machine.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You have successfully installed and configured your development environment for the CICT platform using Minikube. Happy coding!"))}p.isMDXComponent=!0}}]);