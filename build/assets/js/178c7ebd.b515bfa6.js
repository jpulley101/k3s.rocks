"use strict";(self.webpackChunkk_3_s=self.webpackChunkk_3_s||[]).push([[665],{4629:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),t=r(1151);const i={sidebar_position:10},a=void 0,l={id:"Private-registry",title:"Private-registry",description:"Private container registry",source:"@site/docs/Private-registry.md",sourceDirName:".",slug:"/Private-registry",permalink:"/Private-registry",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Persistant storage with localstorage and longhorn",permalink:"/Persistent-Storage-Longhorn"},next:{title:"Metrics",permalink:"/metrics"}},c={},d=[{value:"Private container registry",id:"private-container-registry",level:2},{value:"Using private registry",id:"using-private-registry",level:2},{value:"Create the secret",id:"create-the-secret",level:2},{value:"Configure the nodes to use the local registry",id:"configure-the-nodes-to-use-the-local-registry",level:2},{value:"Alternatively",id:"alternatively",level:2},{value:"Then create the middleware",id:"then-create-the-middleware",level:3},{value:"Test the registry",id:"test-the-registry",level:2},{value:"Add persistance",id:"add-persistance",level:2},{value:"Build, push and deploy to the registry",id:"build-push-and-deploy-to-the-registry",level:2},{value:"Install docker",id:"install-docker",level:3},{value:"Build the container",id:"build-the-container",level:3},{value:"Check",id:"check",level:3}];function h(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"private-container-registry",children:"Private container registry"}),"\n",(0,n.jsx)(s.h2,{id:"using-private-registry",children:"Using private registry"}),"\n",(0,n.jsxs)(s.p,{children:["Using a registry besides docker hub, requires us to create a file on each node that should access it. (Usually every node)",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/",children:"rancher docs"})]}),"\n",(0,n.jsx)(s.p,{children:"Since the registry will require inputting values into a file on each server, it could be a good idea for it to have its own credentials."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Install htpasswd if you do not have it"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"apt install apache2-utils -y\n"})}),"\n",(0,n.jsx)(s.h2,{id:"create-the-secret",children:"Create the secret"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# You should replace the username and password with more secure ones\nexport REGISTRY_USERNAME=username\nexport REGISTRY_PASSWORD=password\ncat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Secret\nmetadata:\n  name: registry-basic-auth-secret\n  namespace: default\ndata:\n  users: |2\n    $(htpasswd -Bbn $REGISTRY_USERNAME $REGISTRY_PASSWORD | base64)\nEOF\n"})}),"\n",(0,n.jsx)(s.h2,{id:"configure-the-nodes-to-use-the-local-registry",children:"Configure the nodes to use the local registry"}),"\n",(0,n.jsx)(s.p,{children:"**Note: ** This has to be done on every node that will pull containers"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'cat <<EOF > /etc/rancher/k3s/registries.yaml\nmirrors:\n  registry.${DOMAIN}:\n    endpoint:\n      - "https://registry.${DOMAIN}"\nconfigs:\n  "registry.${DOMAIN}":\n    auth:\n      username: ${REGISTRY_USERNAME}\n      password: ${REGISTRY_PASSWORD}\nEOF\n# check to see\ncat /etc/rancher/k3s/registries.yaml\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Restart K3S for this to take effect"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"systemctl restart k3s\n"})}),"\n",(0,n.jsx)(s.h2,{id:"alternatively",children:"Alternatively"}),"\n",(0,n.jsx)(s.p,{children:"You can add a secret like this and add it to the deployment"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'kubectl create secret docker-registry my-private-registry \\\n--docker-server=registry.${DOMAIN} \\\n--docker-username="username" \\\n--docker-password="password" \\\n--docker-email=something@randomhere.com\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: system-info-web\nspec:\n  selector:\n    matchLabels:\n      app: system-info-web\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: system-info-web\n    spec:\n      containers:\n      - name: system-info-web\n        image: registry.${DOMAIN}/system-info-web:latest\n        ports:\n        - containerPort: 8000\n      imagePullSecrets:\n      - name: secret-docker\n"})}),"\n",(0,n.jsx)(s.h3,{id:"then-create-the-middleware",children:"Then create the middleware"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat basic-auth-registry-middleware.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsx)(s.p,{children:"We are planning to use a simple registry-ui for the registry. That requires us to use a cors middleware. This could be done in the registry settings as well, but its convenient to use the traefik ingress to solve this."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat registry-cors-middleware.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsx)(s.p,{children:"Then we create the registry service with cors middleware. Authentication is handled by the registry auth. (We could optionally add basic auth on the UI itself, but it would require us to enter two sets of credentials. One for the UI and one for the registry)"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat registry-ephemeral.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsx)(s.p,{children:"Finally the registry-ui (optional)"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat registry-ui.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Registry UI",src:r(1468).Z+"",width:"1200",height:"295"}),"\nFor the registry UI, we will use the same basic auth middleware as for the registry, as the registry-ui forwards the credentials. If you use a different basic auth middleware here then you will best case have to enter two sets of credentials. So its better to just have the same as the registry."]}),"\n",(0,n.jsx)(s.h2,{id:"test-the-registry",children:"Test the registry"}),"\n",(0,n.jsx)(s.p,{children:"On any machine with docker:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker login registry.${DOMAIN}\n# Username: username\n# Password: password\n# (The registry credentials)\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker pull nginx:latest\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker tag nginx:latest registry.dog.example.com/nginy:later\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker push registry.dog.example.com/nginy:later\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"\nThe push refers to repository [registry.mydomain.com/nginy]\nf0f30197ccf94: Pushed\ne23424ff930d4: Pushed\nc9732d7567184: Pushed\n4b8db2d43325a: Pushed\n4312341684c4a: Pushed\n02c055fgh42f5: Pushed\nlatest: digest: sha256:eba373a0620f68ffdc3f4327041ad25e2342175b8feb35b992574cd83698e9e3c size: 1570\n"})}),"\n",(0,n.jsx)(s.h2,{id:"add-persistance",children:"Add persistance"}),"\n",(0,n.jsx)(s.p,{children:"If everything looks allright you might want to consider adding some persistance to that registry."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Delete the ephememeral deployment/service/ingress"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat registry-ephemeral.yaml | envsubst | kubectl delete -f -\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Create the longhorn (or localhost) PVC"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat pvc-registry-longhorn.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Create the longhorn (or localhost) deployment/service/ingress"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat registry-longhorn.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsx)(s.h2,{id:"build-push-and-deploy-to-the-registry",children:"Build, push and deploy to the registry"}),"\n",(0,n.jsx)(s.h3,{id:"install-docker",children:"Install docker"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Install Docker following ",(0,n.jsx)("a",{href:"https://docs.docker.com/install/",target:"_black",children:"the official guide"}),"..."]}),"\n",(0,n.jsx)(s.li,{children:"...or alternatively, run the official convenience script:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'# Download Docker\ncurl -fsSL get.docker.com -o get-docker.sh\n# Install Docker using the stable channel (instead of the default "edge")\nCHANNEL=stable sh get-docker.sh\n# Remove Docker install script\nrm get-docker.sh\n'})}),"\n",(0,n.jsx)(s.h3,{id:"build-the-container",children:"Build the container"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Go the the /apps/system-info-web folder"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd ../apps/system-info-web/\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Build the container"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker build -t registry.${DOMAIN}/system-info-web .\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Push the container"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker push registry.${DOMAIN}/system-info-web\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Deploy it"}),"\n",(0,n.jsx)(s.li,{children:"Go back to the manifests folder if neccesary"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd ../../manifests\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Deploy"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cat system-info-web.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,n.jsx)(s.h3,{id:"check",children:"Check"}),"\n",(0,n.jsxs)(s.p,{children:["Go to ",(0,n.jsx)("a",{href:"http://sysinfo.dog.example",target:"_blank",children:(0,n.jsx)(s.a,{href:"http://sysinfo.dog.example",children:"http://sysinfo.dog.example"})})," To see if it has worked."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," See the value under ",(0,n.jsx)(s.strong,{children:'"hostname"'})," which is the name of the pod running the service. In the deployment yaml it has been specified with 2 replicas. Try refreshing and see that this value will change as the ingress is now load balancing between the two replicas."]})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1468:(e,s,r)=>{r.d(s,{Z:()=>n});const n="data:image/webp;base64,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"},1151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>a});var n=r(7294);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);