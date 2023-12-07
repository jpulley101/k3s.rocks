"use strict";(self.webpackChunkk_3_s=self.webpackChunkk_3_s||[]).push([[510],{7937:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(5893),n=s(1151);const t={sidebar_position:11,sidebar_label:"Metrics"},i=void 0,l={id:"metrics",title:"metrics",description:"Metrics",source:"@site/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/metrics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Metrics"},sidebar:"tutorialSidebar",previous:{title:"Private-registry",permalink:"/Private-registry"},next:{title:"Logging",permalink:"/logging"}},c={},o=[{value:"Metrics",id:"metrics",level:2},{value:"Install helm chart",id:"install-helm-chart",level:2},{value:"Prometheus-community stack",id:"prometheus-community-stack",level:2},{value:"Ingresses",id:"ingresses",level:2},{value:"Traefik service monitor",id:"traefik-service-monitor",level:2},{value:"Traefik dashboard service",id:"traefik-dashboard-service",level:2},{value:"Traefik grafana dashboard",id:"traefik-grafana-dashboard",level:2},{value:"Done",id:"done",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Grafana",src:s(1064).Z+"",width:"1197",height:"1179"})}),"\n",(0,r.jsx)(a.h2,{id:"install-helm-chart",children:"Install helm chart"}),"\n",(0,r.jsxs)(a.p,{children:["For settings see:\n",(0,r.jsx)(a.a,{href:"https://github.com/prometheus-community/helm-charts/blob/kube-prometheus-stack-16.0.1/charts/kube-prometheus-stack/values.yaml",children:"Helm Chart Values"})]}),"\n",(0,r.jsx)(a.h2,{id:"prometheus-community-stack",children:"Prometheus-community stack"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Add and update the prometheus-community repo"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts && \\\nhelm repo update\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Install / Deploy it with helm"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"# For new install\nhelm install prometheus-stack --version 35.3.1 -f prometheus-values.yaml prometheus-community/kube-prometheus-stack\n"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"# Or e.g. after updating values\nhelm upgrade prometheus-stack --version 35.3.1 -f prometheus-values.yaml prometheus-community/kube-prometheus-stack\n"})}),"\n",(0,r.jsx)(a.h2,{id:"ingresses",children:"Ingresses"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Alertmanager (alert-manager.dog.example.com)"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat alert-manager-ingress.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Prometheus (prometheus.dog.example.com)"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat prometheus-ingress.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Grafana (grafana.dog.example.com)"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat grafana-ingress.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsx)(a.h2,{id:"traefik-service-monitor",children:"Traefik service monitor"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat traefik-service-monitor.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsx)(a.h2,{id:"traefik-dashboard-service",children:"Traefik dashboard service"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"cat traefik-dashboard-service.yaml | envsubst | kubectl apply -f -\n"})}),"\n",(0,r.jsx)(a.h2,{id:"traefik-grafana-dashboard",children:"Traefik grafana dashboard"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"kubectl apply -f traefik-dashboard.yaml\n"})}),"\n",(0,r.jsx)(a.h2,{id:"done",children:"Done"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Check alert-manager, prometheus or grafana to see how it looks\n",(0,r.jsx)("a",{href:"http://grafana.dog.example.com",target:"_blank",children:(0,r.jsx)(a.a,{href:"http://grafana.dog.example.com",children:"http://grafana.dog.example.com"})})]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1064:(e,a,s)=>{s.d(a,{Z:()=>r});const r=s.p+"assets/images/grafana-traefik-2336fa00f9a26892c7e5dced2af8e429.webp"},1151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>i});var r=s(7294);const n={},t=r.createContext(n);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);