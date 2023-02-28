"use strict";(self.webpackChunkcict_document=self.webpackChunkcict_document||[]).push([[5407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={id:"nfs_provisioner",title:"Nfs Provisioner",sidebar_label:"Nfs Provisioner",sidebar_position:3},a=void 0,i={unversionedId:"deployments/nfs_provisioner",id:"deployments/nfs_provisioner",title:"Nfs Provisioner",description:"Introduction to NFS Provisioner in Kubernetes",source:"@site/docs/deployments/nfs_provisioner.md",sourceDirName:"deployments",slug:"/deployments/nfs_provisioner",permalink:"/cict-document-deploy/docs/deployments/nfs_provisioner",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployments/nfs_provisioner.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"nfs_provisioner",title:"Nfs Provisioner",sidebar_label:"Nfs Provisioner",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Nfs Server",permalink:"/cict-document-deploy/docs/deployments/nfs_server"},next:{title:"Strimzi",permalink:"/cict-document-deploy/docs/deployments/strimzi"}},l={},u=[{value:"Introduction to NFS Provisioner in Kubernetes",id:"introduction-to-nfs-provisioner-in-kubernetes",level:3},{value:"NFS Provisioner Overview",id:"nfs-provisioner-overview",level:3},{value:"Setting up NFS Provisioner",id:"setting-up-nfs-provisioner",level:3},{value:"Deploy the NFS provisioner",id:"deploy-the-nfs-provisioner",level:3},{value:"Test the NFS provisioner",id:"test-the-nfs-provisioner",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Resources",id:"resources",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction-to-nfs-provisioner-in-kubernetes"},"Introduction to NFS Provisioner in Kubernetes"),(0,o.kt)("p",null,"In Kubernetes, storage is a critical component for stateful workloads. NFS (Network File System) is a distributed file system protocol that allows you to mount remote directories on your local machine. NFS can be used as a storage solution for Kubernetes clusters. However, managing NFS volumes manually can be challenging, especially in large clusters. The NFS provisioner is a Kubernetes tool that automates the process of creating and managing NFS volumes in your cluster."),(0,o.kt)("p",null,"In this article, we will discuss the NFS provisioner in Kubernetes, its features, and how to set it up and use it in your Kubernetes cluster."),(0,o.kt)("h3",{id:"nfs-provisioner-overview"},"NFS Provisioner Overview"),(0,o.kt)("p",null,"The NFS provisioner is a dynamic provisioner that can create and manage NFS volumes in Kubernetes clusters. The provisioner is designed to work with a backend NFS server that provides the actual storage. The provisioner runs as a Kubernetes pod and communicates with the backend NFS server to create and manage NFS volumes."),(0,o.kt)("p",null,"The NFS provisioner provides the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dynamic provisioning"),": The NFS provisioner can create NFS volumes on demand when a Kubernetes pod requests them. This means that you don't have to manually create NFS volumes before using them in your cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic cleanup"),": The NFS provisioner can automatically delete NFS volumes when they are no longer needed. This ensures that your cluster doesn't accumulate unused volumes and helps you save storage space.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mount options customization"),": The NFS provisioner allows you to customize the mount options used to mount NFS volumes. This is useful when you need to mount NFS volumes with specific options, such as read-only access.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Volume access mode customization"),": The NFS provisioner allows you to customize the access mode for NFS volumes. This is useful when you need to restrict access to NFS volumes, such as allowing read-only access."))),(0,o.kt)("h3",{id:"setting-up-nfs-provisioner"},"Setting up NFS Provisioner"),(0,o.kt)("p",null,"Before you can use the NFS provisioner in your Kubernetes cluster, you need to set it up. Here are the steps to set up the NFS provisioner:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),": Set up the NFS server\nThe NFS server provides the actual storage for the NFS volumes created by the NFS provisioner. You can use an existing NFS server or set up a new one. To set up a new NFS server, follow these steps:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch a new Ubuntu 20.04 server instance on your preferred cloud provider or on-premises infrastructure.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the NFS server package on the Ubuntu server by running the following command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install nfs-kernel-server -y\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a directory to share over NFS. For example, you can create a directory called /var/nfs/share by running the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/nfs/share\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Grant access to the NFS share by editing the /etc/exports file. For example, you can add the following line to the /etc/exports file to grant read/write access to all clients:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/var/nfs/share *(rw,sync,no_subtree_check)\n")),(0,o.kt)("p",null,"Export the NFS share by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo exportfs -a\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),": Deploy the NFS provisioner")),(0,o.kt)("p",null,"Once you have set up the NFS server, you can deploy the NFS provisioner in your Kubernetes cluster. Here are the steps to deploy the NFS provisioner:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the NFS provisioner repository by running the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kubernetes-incubator/external-storage.git\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Change the directory to the NFS provisioner directory by running the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd external-storage/nfs\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a new file called `nfs-provisioner-values.yaml")),(0,o.kt)("p",null,"Now that we have the deployment manifest for the NFS provisioner, we can create a new file called nfs-provisioner-values.yaml to specify the values for the configuration variables used in the deployment."),(0,o.kt)("p",null,"In this file, we will define the following variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"storageClass.name"),": The name of the storage class to be created."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nfs.server"),": The IP address or hostname of the NFS server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nfs.path"),": The path to the NFS share."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"persistence.size"),": The size of the persistent volume to be created.")),(0,o.kt)("p",null,"Here is an example of the nfs-provisioner-values.yaml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"storageClass:\n  name: nfs-client\n\nnfs:\n  server: 192.168.1.100\n  path: /nfs/share\n\npersistence:\n  size: 1Gi\n")),(0,o.kt)("p",null,"You can customize the values in this file to match your own environment."),(0,o.kt)("h3",{id:"deploy-the-nfs-provisioner"},"Deploy the NFS provisioner"),(0,o.kt)("p",null,"To deploy the NFS provisioner in your Kubernetes cluster, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install nfs-provisioner stable/nfs-client-provisioner -f nfs-provisioner-values.yaml\n")),(0,o.kt)("p",null,"This command will install the NFS provisioner using the values specified in the nfs-provisioner-values.yaml file."),(0,o.kt)("h3",{id:"test-the-nfs-provisioner"},"Test the NFS provisioner"),(0,o.kt)("p",null,"To test the NFS provisioner, you can create a new PVC using the storage class created by the NFS provisioner. Here is an example of a PVC manifest that uses the nfs-client storage class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: nfs-client\n")),(0,o.kt)("p",null,"When you create this PVC, the NFS provisioner will create a new PV and mount the NFS share to the volume. You can then create a new pod that uses this PVC to store data."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this guide, we have shown you how to set up an NFS provisioner in your Kubernetes cluster using Helm. With the NFS provisioner, you can easily provision new volumes backed by an NFS share, making it easy to store and access persistent data in your Kubernetes applications."),(0,o.kt)("p",null,"We hope this guide has been helpful, and we encourage you to explore other storage options available in Kubernetes to find the best solution for your needs."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/nfs-client-provisioner"},"NFS Provisioner GitHub repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"Kubernetes documentation on storage classes"))))}m.isMDXComponent=!0}}]);