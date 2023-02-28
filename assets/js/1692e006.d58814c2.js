"use strict";(self.webpackChunkcict_document=self.webpackChunkcict_document||[]).push([[7024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=i(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[d]="string"==typeof e?e:l,s[1]=r;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var a=n(7462),l=(n(7294),n(3905));const o={id:"platform_installation",title:"Platform Installation",sidebar_label:"Platform Installation",sidebar_position:1},s=void 0,r={unversionedId:"deployments/platform_installation",id:"deployments/platform_installation",title:"Platform Installation",description:"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.",source:"@site/docs/deployments/platform_installation.md",sourceDirName:"deployments",slug:"/deployments/platform_installation",permalink:"/cict-document-deploy/docs/deployments/platform_installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deployments/platform_installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"platform_installation",title:"Platform Installation",sidebar_label:"Platform Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployments",permalink:"/cict-document-deploy/docs/category/deployments"},next:{title:"Nfs Server",permalink:"/cict-document-deploy/docs/deployments/nfs_server"}},u={},i=[{value:"Lab Setup",id:"lab-setup",level:3},{value:"Step 1) Set hostname and add entries in the hosts file",id:"step-1-set-hostname-and-add-entries-in-the-hosts-file",level:4},{value:"Step 2) Disable swap &amp; add kernel settings",id:"step-2-disable-swap--add-kernel-settings",level:4},{value:"Step 3) Install containerd run time",id:"step-3-install-containerd-run-time",level:4},{value:"Step 4) Add apt repository for Kubernetes",id:"step-4-add-apt-repository-for-kubernetes",level:4},{value:"Step 5) Install Kubernetes components Kubectl, kubeadm &amp; kubelet",id:"step-5-install-kubernetes-components-kubectl-kubeadm--kubelet",level:4},{value:"Step 6) Initialize Kubernetes cluster with Kubeadm command",id:"step-6-initialize-kubernetes-cluster-with-kubeadm-command",level:4},{value:"Step 6) Install Calico Pod Network Add-on",id:"step-6-install-calico-pod-network-add-on",level:4},{value:"Step 7) Test Kubernetes Installation",id:"step-7-test-kubernetes-installation",level:4},{value:"References",id:"references",level:3}],p={toc:i},d="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This guide was generated by ChatGPT. All content in this guide was generated by ChatGPT and should not be considered as professional advice or recommendations. Use at your own risk.")),(0,l.kt)("p",null,"Are you looking for an easy guide on how to install Kubernetes Cluster on Ubuntu 22.04 (Jammy Jellyfish)?"),(0,l.kt)("p",null,"The step-by-step guide on this page will show you how to install Kubernetes cluster on Ubuntu 22.04 using Kubeadm command step by step."),(0,l.kt)("p",null,"Kubernetes is a free and open-source container orchestration tool, it also known as k8s. With the help of Kubernetes, we can achieve automated deployment, scaling and management of containerized application."),(0,l.kt)("p",null,"A Kubernetes cluster consists of worker nodes on which application workload is deployed and a set up master nodes which are used to manage worker nodes and pods in the cluster."),(0,l.kt)("p",null,"In this guide, we are using one master node and two worker nodes. Following are system requirements on each node,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minimal install Ubuntu 22.04"),(0,l.kt)("li",{parentName:"ul"},"Minimum 2GB RAM or more"),(0,l.kt)("li",{parentName:"ul"},"Minimum 2 CPU cores / or 2 vCPU"),(0,l.kt)("li",{parentName:"ul"},"20 GB free disk space on /var or more"),(0,l.kt)("li",{parentName:"ul"},"Sudo user with admin rights"),(0,l.kt)("li",{parentName:"ul"},"Internet connectivity on each node")),(0,l.kt)("h3",{id:"lab-setup"},"Lab Setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Master Node:  192.168.1.173 \u2013 k8smaster.example.net"),(0,l.kt)("li",{parentName:"ul"},"First Worker Node:  192.168.1.174 \u2013 k8sworker1.example.net"),(0,l.kt)("li",{parentName:"ul"},"Second Worker Node:  192.168.1.175 \u2013 k8sworker2.example.net")),(0,l.kt)("p",null,"Without any delay, let\u2019s jump into the installation steps of Kubernetes cluster"),(0,l.kt)("h4",{id:"step-1-set-hostname-and-add-entries-in-the-hosts-file"},"Step 1) Set hostname and add entries in the hosts file"),(0,l.kt)("p",null,"Login to to master node and set hostname using hostnamectl command,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo hostnamectl set-hostname "k8smaster.example.net"\n$ exec bash\n')),(0,l.kt)("p",null,"On the worker nodes, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo hostnamectl set-hostname "k8sworker1.example.net"   // 1st worker node\n$ sudo hostnamectl set-hostname "k8sworker2.example.net"   // 2nd worker node\n$ exec bash\n')),(0,l.kt)("p",null,"Add the following entries in /etc/hosts file on each node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"192.168.1.173   k8smaster.example.net k8smaster\n192.168.1.174   k8sworker1.example.net k8sworker1\n192.168.1.175   k8sworker2.example.net k8sworker2\n")),(0,l.kt)("h4",{id:"step-2-disable-swap--add-kernel-settings"},"Step 2) Disable swap & add kernel settings"),(0,l.kt)("p",null,"Execute beneath swapoff and sed command to disable swap. Make sure to run the following commands on all the nodes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo swapoff -a\n$ sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab\n")),(0,l.kt)("p",null,"Load the following kernel modules on all the nodes,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tee /etc/modules-load.d/containerd.conf <<EOF\noverlay\nbr_netfilter\nEOF\n$ sudo modprobe overlay\n$ sudo modprobe br_netfilter\n")),(0,l.kt)("p",null,"Set the following Kernel parameters for Kubernetes, run beneath tee command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tee /etc/sysctl.d/kubernetes.conf <<EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n")),(0,l.kt)("p",null,"Reload the above changes, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo sysctl --system\n")),(0,l.kt)("h4",{id:"step-3-install-containerd-run-time"},"Step 3) Install containerd run time"),(0,l.kt)("p",null,"In this guide, we are using containerd run time for our Kubernetes cluster. So, to install containerd, first install its dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates\n")),(0,l.kt)("p",null,"Enable docker repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg\n$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n')),(0,l.kt)("p",null,"Now, run following apt command to install containerd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt update\n$ sudo apt install -y containerd.io\n")),(0,l.kt)("p",null,"Configure containerd so that it starts using systemd as cgroup."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ containerd config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1\n$ sudo sed -i 's/SystemdCgroup \\= false/SystemdCgroup \\= true/g' /etc/containerd/config.toml\n")),(0,l.kt)("p",null,"Restart and enable containerd service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl restart containerd\n$ sudo systemctl enable containerd\n")),(0,l.kt)("h4",{id:"step-4-add-apt-repository-for-kubernetes"},"Step 4) Add apt repository for Kubernetes"),(0,l.kt)("p",null,"Execute following commands to add apt repository for Kubernetes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\n$ sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"\n')),(0,l.kt)("p",null,"Note: At time of writing this guide, Xenial is the latest Kubernetes repository but when repository is available for Ubuntu 22.04 (Jammy Jellyfish) then you need replace xenial word with \u2018jammy\u2019 in \u2018apt-add-repository\u2019 command."),(0,l.kt)("h4",{id:"step-5-install-kubernetes-components-kubectl-kubeadm--kubelet"},"Step 5) Install Kubernetes components Kubectl, kubeadm & kubelet"),(0,l.kt)("p",null,"Install Kubernetes components like kubectl, kubelet and Kubeadm utility on all the nodes. Run following set of commands,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt update\n$ sudo apt install -y kubelet kubeadm kubectl\n$ sudo apt-mark hold kubelet kubeadm kubectl\n")),(0,l.kt)("h4",{id:"step-6-initialize-kubernetes-cluster-with-kubeadm-command"},"Step 6) Initialize Kubernetes cluster with Kubeadm command"),(0,l.kt)("p",null,"Now, we are all set to initialize Kubernetes cluster. Run the following Kubeadm command from the master node only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo kubeadm init --control-plane-endpoint=k8smaster.example.net\n")),(0,l.kt)("p",null,"Output of above command,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Kubeadm-initialize-kubernetes-ubuntu-22-04\n")),(0,l.kt)("p",null,"As the output above confirms that control-plane has been initialize successfully. In output also we are getting set of commands for interacting the cluster and also the command for worker node to join the cluster."),(0,l.kt)("p",null,"So, to start interacting with cluster, run following commands from the master node,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir -p $HOME/.kube\n$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,l.kt)("p",null,"Now, try to run following kubectl commands to view cluster and node status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl cluster-info\n$ kubectl get nodes\n")),(0,l.kt)("p",null,"Output,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Initial-k8s-cluster-information\n")),(0,l.kt)("p",null,"Join both the worker nodes to the cluster, command is already there is output, just copy paste on the worker nodes,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo kubeadm join k8smaster.example.net:6443 --token vt4ua6.wcma2y8pl4menxh2 \\\n   --discovery-token-ca-cert-hash sha256:0494aa7fc6ced8f8e7b20137ec0c5d2699dc5f8e616656932ff9173c94962a36\n")),(0,l.kt)("p",null,"Output from both the worker nodes,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Woker1-Join-kubernetes-Cluster\n\nWoker2-Join-kubernetes-Cluster\n")),(0,l.kt)("p",null,"Check the nodes status from master node using kubectl command,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNode-Status-K8s-Before-CNI\n")),(0,l.kt)("p",null,"As we can see nodes status is \u2018NotReady\u2019, so to make it active. We must install CNI (Container Network Interface) or network add-on plugins like Calico, Flannel and Weave-net."),(0,l.kt)("h4",{id:"step-6-install-calico-pod-network-add-on"},"Step 6) Install Calico Pod Network Add-on"),(0,l.kt)("p",null,"Run following kubectl command to install Calico network plugin from the master node,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml\n")),(0,l.kt)("p",null,"Output of above commands would look like below,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Install-Calico-Network-Add-on-k8s\n")),(0,l.kt)("p",null,"Verify the status of pods in kube-system namespace,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n kube-system\n")),(0,l.kt)("p",null,"Output,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Kube-System-Pods-after-calico-installation\n")),(0,l.kt)("p",null,"Perfect, check the nodes status as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNodes-Status-after-Calico-Network-Add-on\n")),(0,l.kt)("p",null,"Great, above confirms that nodes are active node. Now, we can say that our Kubernetes cluster is functional."),(0,l.kt)("h4",{id:"step-7-test-kubernetes-installation"},"Step 7) Test Kubernetes Installation"),(0,l.kt)("p",null,"To test Kubernetes installation, let\u2019s try to deploy nginx based application and try to access it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create deployment nginx-app --image=nginx --replicas=2\n")),(0,l.kt)("p",null,"Check the status of nginx-app deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployment nginx-app\nNAME        READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-app   2/2     2            2           68s\n$\nExpose the deployment as NodePort,\n\n$ kubectl expose deployment nginx-app --type=NodePort --port=80\nservice/nginx-app exposed\n$\nRun following commands to view service status\n\n$ kubectl get svc nginx-app\n$ kubectl describe svc nginx-app\n")),(0,l.kt)("p",null,"Output of above commands,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Deployment-Service-Status-k8s\n")),(0,l.kt)("p",null,"Use following command to access nginx based application,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://<woker-node-ip-addres>:31246\n\n$ curl http://192.168.1.174:31246\n")),(0,l.kt)("p",null,"Output,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Curl-Command-Access-Nginx-Kubernetes\n")),(0,l.kt)("p",null,"Great, above output confirms that nginx based application is accessible."),(0,l.kt)("p",null,"That\u2019s all from this guide, I hope you have found this guide useful. Kindly do post your queries and feedback in below comments section."),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.linuxtechi.com/install-kubernetes-on-ubuntu-22-04/"},"How to Install Kubernetes Cluster on Ubuntu 22.04")))}c.isMDXComponent=!0}}]);