"use strict";(self.webpackChunkk_3_s=self.webpackChunkk_3_s||[]).push([[908],{3076:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(5893),t=s(1151);const i={sidebar_position:4,sidebar_label:"First Deploy"},a=void 0,l={id:"First-deploy",title:"First-deploy",description:"Echo Test",source:"@site/docs/First-deploy.md",sourceDirName:".",slug:"/First-deploy",permalink:"/First-deploy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"First Deploy"},sidebar:"tutorialSidebar",previous:{title:"External Load Balancer",permalink:"/External-load-balancer"},next:{title:"HTTPS with Cert-Manager and Letsencrypt",permalink:"/https-cert-manager-letsencrypt"}},o={},d=[{value:"Echo Test",id:"echo-test",level:2},{value:"Deployment",id:"deployment",level:4},{value:"Service",id:"service",level:4},{value:"Ingress",id:"ingress",level:4},{value:"Note: Separate or combined yaml",id:"note-separate-or-combined-yaml",level:3},{value:"Time to test",id:"time-to-test",level:3},{value:"Adding HTTPS",id:"adding-https",level:2},{value:"Cert-manager",id:"cert-manager",level:3},{value:"Ingress",id:"ingress-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"echo-test",children:"Echo Test"}),"\n",(0,r.jsx)(n.p,{children:"Apply deployment, service and ingress, using the commands below. This will deploy and expose a docker container on a subdomain."}),"\n",(0,r.jsx)(n.h4,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'--8<-- "./scripts/whoami_deployment.txt"\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"whoami-deployment.yaml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--8<-- "./manifests/whoami/whoami-deployment.yaml"\n'})})]}),"\n",(0,r.jsx)(n.h4,{id:"service",children:"Service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'--8<-- "./scripts/whoami_service.txt"\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"whoami-service.yaml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--8<-- "./manifests/whoami/whoami-service.yaml"\n'})})]}),"\n",(0,r.jsx)(n.h4,{id:"ingress",children:"Ingress"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'--8<-- "./scripts/whoami_ingress.txt"\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"whoami-ingress.yaml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--8<-- "./manifests/whoami/whoami-ingress.yaml"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"note-separate-or-combined-yaml",children:"Note: Separate or combined yaml"}),"\n",(0,r.jsx)(n.p,{children:"Here we applied deployment, service and ingress separately. Sometimes this makes sense, but we can also combine them into a single file if we prefer. Just separate the sections with a line containing three dashes like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"<Deployment>\n---\n<Service>\n---\n<Ingress>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"time-to-test",children:"Time to test"}),"\n",(0,r.jsxs)(n.p,{children:["Use your browser curl to check ",(0,r.jsx)("a",{href:"https://example.com/foo",target:"_blank",children:(0,r.jsx)(n.a,{href:"http://example.com/foo",children:"http://example.com/foo"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://example.com/foo\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Hostname: whoami-667fc988f6-jn5f8\nIP: 127.0.0.1\nIP: ::1\nIP: 10.42.0.34\nIP: dd40::402e:d1ff:bde4:b8db\nRemoteAddr: 10.42.0.1:33686\nGET /bar HTTP/1.1\nHost: 12.344.200.233\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nAccept-Encoding: gzip, deflate\nAccept-Language: en-US,en;q=0.9\nUpgrade-Insecure-Requests: 1\nX-Forwarded-For: 11.255.13.126\nX-Forwarded-Host: 51.114.111.153\nX-Forwarded-Port: 80\nX-Forwarded-Proto: http\nX-Forwarded-Server: m1\nX-Real-Ip: 23.251.11.124\n"})}),"\n",(0,r.jsx)(n.h2,{id:"adding-https",children:"Adding HTTPS"}),"\n",(0,r.jsxs)(n.p,{children:["The examples below use http->https redirect using a traefik middleware. To utilize it you need to create it first. You can also remove it by removing the line ",(0,r.jsx)(n.code,{children:" traefik.ingress.kubernetes.io/router.middlewares: default-redirect-https@kubernetescrd"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'--8<-- "./scripts/apply_traefik_redirect_middleware.txt"\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"traefik-https-redirect-middleware"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--8<-- "./manifests/traefik-https-redirect-middleware.yaml"\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"To add https support, you need to either use cert-manager and add some tls-info to the ingress, or use a tls terminating load-balancer."}),"\n",(0,r.jsx)(n.h3,{id:"cert-manager",children:"Cert-manager"}),"\n",(0,r.jsxs)(n.p,{children:["You need first to deploy ",(0,r.jsx)(n.a,{href:"/https-cert-manager-letsencrypt",children:"cert-manager"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ingress-1",children:"Ingress"}),"\n",(0,r.jsx)(n.p,{children:"Then you can apply the ingress."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'--8<-- "./scripts/apply_https_ingress.txt"\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"whoami-ingress-tls.yaml"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--8<-- "./manifests/whoami/whoami-ingress-tls.yaml"\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(7294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);