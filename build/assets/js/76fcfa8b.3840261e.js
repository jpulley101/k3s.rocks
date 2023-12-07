"use strict";(self.webpackChunkk_3_s=self.webpackChunkk_3_s||[]).push([[479],{4777:(M,j,I)=>{I.r(j),I.d(j,{assets:()=>D,contentTitle:()=>L,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>e});var N=I(5893),g=I(1151);const i={sidebar_position:13,sidebar_label:"ArgoCD"},L=void 0,u={id:"Argocd",title:"Argocd",description:"Install ArgoCD",source:"@site/docs/Argocd.md",sourceDirName:".",slug:"/Argocd",permalink:"/Argocd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"ArgoCD"},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/logging"},next:{title:"Keel",permalink:"/keel"}},D={},e=[{value:"Install ArgoCD",id:"install-argocd",level:2},{value:"Install",id:"install",level:2},{value:"Either with the included manifest",id:"either-with-the-included-manifest",level:3},{value:"Or argocd manifest + patched deploy",id:"or-argocd-manifest--patched-deploy",level:3},{value:"ArgoCD UI",id:"argocd-ui",level:2},{value:"ArgoCD CLI",id:"argocd-cli",level:2}];function t(M){const j={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,g.a)(),...M.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(j.h2,{id:"install-argocd",children:"Install ArgoCD"}),"\n",(0,N.jsxs)(j.p,{children:[(0,N.jsx)(j.img,{alt:"argocd ui",src:I(1752).Z+"",width:"128",height:"128"}),"\n",(0,N.jsx)(j.a,{href:"https://argoproj.github.io/argo-cd/getting_started/",children:"docs"})]}),"\n",(0,N.jsx)(j.h2,{id:"install",children:"Install"}),"\n",(0,N.jsx)(j.h3,{id:"either-with-the-included-manifest",children:"Either with the included manifest"}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:"kubectl create namespace argocd\ncat argocd.yaml | envsubst | kubectl apply -n argocd -f -\n"})}),"\n",(0,N.jsx)(j.h3,{id:"or-argocd-manifest--patched-deploy",children:"Or argocd manifest + patched deploy"}),"\n",(0,N.jsx)(j.p,{children:"Or if you prefer the github repo and patching (the patched apply below was the only required change at the time of writing):"}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:'kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml  \nkubectl patch deploy argocd-server -n argocd --type json -p \'[{"op": "replace", "path": "/spec/template/spec/containers/0/command", "value": ["argocd-server", "--insecure", "--staticassets","/shared/app"]}]\'  \n'})}),"\n",(0,N.jsx)(j.h2,{id:"argocd-ui",children:"ArgoCD UI"}),"\n",(0,N.jsx)(j.p,{children:"Either use port forwarding or create an ingress:"}),"\n",(0,N.jsxs)(j.ul,{children:["\n",(0,N.jsx)(j.li,{children:"First we need the tmp one to create a tls (skip if you have a wildcard cert)"}),"\n"]}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:"cat argocd-tmp-ingress.yaml | envsubst | kubectl apply -n argocd -f -\n"})}),"\n",(0,N.jsxs)(j.ul,{children:["\n",(0,N.jsxs)(j.li,{children:["Wait until you see something appear before then deleting it(this actually works but it does not allow for grpc) you should see something appearing at ",(0,N.jsx)("a",{href:"https://argocd.dog.example.com",target:"_blank",children:(0,N.jsx)(j.a,{href:"https://argocd.dog.example.com",children:"https://argocd.dog.example.com"})})]}),"\n"]}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:"cat argocd-tmp-ingress.yaml | envsubst | kubectl delete -n argocd -f -\n"})}),"\n",(0,N.jsxs)(j.ul,{children:["\n",(0,N.jsx)(j.li,{children:"Now create the final ingressroute"}),"\n"]}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:"cat argocd-ingressroute.yaml | envsubst | kubectl apply -n argocd -f -\n"})}),"\n",(0,N.jsx)(j.p,{children:"Now goto argocd.yourdomain.com, type in admin and"}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo  \n'})}),"\n",(0,N.jsx)(j.h2,{id:"argocd-cli",children:"ArgoCD CLI"}),"\n",(0,N.jsx)(j.pre,{children:(0,N.jsx)(j.code,{className:"language-bash",children:"arkade get argocd\n"})})]})}function c(M={}){const{wrapper:j}={...(0,g.a)(),...M.components};return j?(0,N.jsx)(j,{...M,children:(0,N.jsx)(t,{...M})}):t(M)}},1752:(M,j,I)=>{I.d(j,{Z:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhcmdvY2Qtb3JpZ2luYWwtZSI+PHBhdGggZD0iTTQyIDQxaDQ0djUxSDQyem0wIDAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYXJnb2NkLW9yaWdpbmFsLWQiPjxwYXRoIGQ9Ik0wIDBoMTI4djEyOEgweiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJhcmdvY2Qtb3JpZ2luYWwtYyI+PHBhdGggZD0iTTAgMGgxMjh2MTI4SDB6Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImFyZ29jZC1vcmlnaW5hbC1mIj48cGF0aCBkPSJNODUuNjk1IDQxLjEzM2wtMi41NSA1OC4yMzhINDQuODg3bC0yLjEyNS01OC4yMzgiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYXJnb2NkLW9yaWdpbmFsLWIiPjxwYXRoIGQ9Ik0wIDBoMTI4djEyOEgweiIvPjwvY2xpcFBhdGg+PG1hc2sgaWQ9ImFyZ29jZC1vcmlnaW5hbC1sIj48ZyBmaWx0ZXI9InVybCgjYXJnb2NkLW9yaWdpbmFsLWEpIj48cGF0aCBkPSJNMCAwaDEyOHYxMjhIMHoiIGZpbGwtb3BhY2l0eT0iLjI1MSIvPjwvZz48L21hc2s+PG1hc2sgaWQ9ImFyZ29jZC1vcmlnaW5hbC1oIj48ZyBmaWx0ZXI9InVybCgjYXJnb2NkLW9yaWdpbmFsLWEpIj48cGF0aCBkPSJNMCAwaDEyOHYxMjhIMHoiIGZpbGwtb3BhY2l0eT0iLjIyIi8+PC9nPjwvbWFzaz48bWFzayBpZD0iYXJnb2NkLW9yaWdpbmFsLWoiPjxnIGZpbHRlcj0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtYSkiPjxwYXRoIGQ9Ik0wIDBoMTI4djEyOEgweiIgZmlsbC1vcGFjaXR5PSIuNTAyIi8+PC9nPjwvbWFzaz48ZyBpZD0iYXJnb2NkLW9yaWdpbmFsLWkiIGNsaXAtcGF0aD0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtYikiPjxwYXRoIGQ9Ik01OC40ODggMzAuNTA4YTIuOTc0IDIuOTc0IDAgMTEtNS45NDgtLjAwMyAyLjk3NCAyLjk3NCAwIDAxNS45NDguMDAzem0wIDAiIGZpbGw9IiNmYmRmYzMiLz48L2c+PGcgaWQ9ImFyZ29jZC1vcmlnaW5hbC1nIiBjbGlwLXBhdGg9InVybCgjYXJnb2NkLW9yaWdpbmFsLWMpIj48cGF0aCBkPSJNODQuNDIyIDY1LjM2M3MyLjU1LTIyLjUzMS0uODUyLTMxLjAzMUM3Ny4xOTUgMTkuNDUzIDYyLjMxNiAyMC43MyA2Mi4zMTYgMjAuNzNzOC41IDMuMzk5IDguOTI2IDE2LjE1M2MuNDI2IDguOTI2IDAgMjIuMTA1IDAgMjIuMTA1em0wIDAiIGZpbGw9IiNlMzRlM2IiLz48L2c+PGcgaWQ9ImFyZ29jZC1vcmlnaW5hbC1rIiBjbGlwLXBhdGg9InVybCgjYXJnb2NkLW9yaWdpbmFsLWQpIj48cGF0aCBkPSJNODMuMTQ1IDkwLjg2N1Y4Ny40N2MtNS45NSAzLjM5OC0xMi4zMjkgNi44LTE5Ljk3NyA2LjgtOC41MDQgMC0xNC4wMzEtMy44MjQtMTkuNTU1LTYuOGwuNDIyIDMuMzk4czYuMzggNi44MDUgMTkuNTU1IDYuODA1YzEyLjMyOC0uNDI2IDE5LjU1NS02LjgwNSAxOS41NTUtNi44MDV6bTAgMCIgZmlsbD0iI2U5NjU0YiIvPjwvZz48ZmlsdGVyIGlkPSJhcmdvY2Qtb3JpZ2luYWwtYSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VHcmFwaGljIiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNNDQuMDM1IDg5LjU5NHMtLjg0NyAyLjU1LTIuMTI1IDMuODI0YTMuODQ0IDMuODQ0IDAgMDEtMi45NzIgMS4yNzcgNDkuOTQ2IDQ5Ljk0NiAwIDAxLTYuMzggMS4yNzRzMi45NzcuNDI2IDYuMzguODUxYzEuMjczIDAgMS4yNzMgMCAyLjEyNC40MjYgMi4xMjYgMCAyLjk3My0xLjI3NyAyLjk3My0xLjI3N3ptMzkuMTEgMHMuODUxIDIuNTUgMi4xMjUgMy44MjRhMy44NTggMy44NTggMCAwMDIuOTc2IDEuMjc3IDQ5LjggNDkuOCAwIDAwNi4zNzUgMS4yNzRzLTIuOTczLjQyNi02LjguODUxYy0xLjI3NCAwLTEuMjc0IDAtMi4xMjYuNDI2LTIuNTUgMC0yLjk3Ni0xLjI3Ny0yLjk3Ni0xLjI3N3ptMCAwIiBmaWxsPSIjZTk2NTRiIi8+PHBhdGggZD0iTTEwOS45MjYgNDcuNTA4YzAgMjUuMzU1LTIwLjU1NSA0NS45MS00NS45MSA0NS45MS0yNS4zNTYgMC00NS45MS0yMC41NTUtNDUuOTEtNDUuOTEgMC0yNS4zNTIgMjAuNTU0LTQ1LjkwNiA0NS45MS00NS45MDYgMjUuMzU1IDAgNDUuOTEgMjAuNTU0IDQ1LjkxIDQ1LjkwNnptMCAwIiBmaWxsPSIjYjZjZmVhIi8+PHBhdGggZD0iTTEwOC4yMjcgNDcuNTA4YzAgMjQuNDE4LTE5Ljc5MyA0NC4yMS00NC4yMTEgNDQuMjEtMjQuNDE0IDAtNDQuMjA3LTE5Ljc5Mi00NC4yMDctNDQuMjFDMTkuODA5IDIzLjA5NCAzOS42MDIgMy4zIDY0LjAxNiAzLjNjMjQuNDE4IDAgNDQuMjEgMTkuNzkzIDQ0LjIxIDQ0LjIwN3ptMCAwIiBmaWxsPSIjZTZmNWY4Ii8+PHBhdGggZD0iTTEwMC4xNDggNDguMzZjMCAxOS45NTYtMTYuMTc1IDM2LjEzMi0zNi4xMzIgMzYuMTMyLTE5Ljk1NCAwLTM2LjEzMy0xNi4xNzYtMzYuMTMzLTM2LjEzMyAwLTE5Ljk1MyAxNi4xOC0zNi4xMzIgMzYuMTMzLTM2LjEzMiAxOS45NTcgMCAzNi4xMzIgMTYuMTggMzYuMTMyIDM2LjEzMnptMCAwIiBmaWxsPSIjZDBlOGYwIi8+PHBhdGggZD0iTTQyLjc2MiA2NS4zNjNzMi45NzYgNDguMDM1IDIuOTc2IDQ4Ljg4N2MwIC40MjIuNDI2IDEuMjczLTEuNzAzIDIuMTI1LTIuMTI1Ljg0OC04LjkyNiAyLjU1LTguOTI2IDIuNTVoMTAuMjAzYzQuNjc2IDAgNC42NzYtMy44MjcgNC42NzYtNC42NzUgMC0uODUyIDEuMjc0LTE5LjEyOSAxLjI3NC0xOS4xMjlzLjQyNSAyMS42OC40MjUgMjIuNTI3YzAgLjg1Mi0uNDI1IDIuMTI1LTMuMzk4IDIuOTc3LTIuMTI1LjQyNi04LjUwNCAxLjctOC41MDQgMS43aDkuNzc4YzUuOTUzIDAgNS45NTMtMy44MjUgNS45NTMtMy44MjVsMS4yNzMtMTkuMTI5cy40MjYgMTkuMTI5LjQyNiAyMS4yNTRjMCAxLjctMS4yNzQgMi45NzctNS45NTMgMy44MjQtMi45NzMuODUyLTYuODAxIDEuNzAzLTYuODAxIDEuNzAzaDExLjA1NWM1LjUyMy0uNDI1IDYuMzc1LTQuMjU0IDYuMzc1LTQuMjU0bDkuMzUxLTQ3LjYwOXptMCAwIiBmaWxsPSIjZWU3OTRiIi8+PHBhdGggZD0iTTg1LjI3IDY1LjM2M3MtMi45NzMgNDguMDM1LTIuOTczIDQ4Ljg4N2MwIC40MjItLjQyNiAxLjI3MyAxLjcgMi4xMjUgMi4xMjQuODQ4IDguOTI1IDIuNTUgOC45MjUgMi41NUg4Mi43MTljLTQuNjc2IDAtNC42NzYtMy44MjctNC42NzYtNC42NzUgMC0uODUyLTEuMjczLTE5LjEyOS0xLjI3My0xOS4xMjlzLS40MjYgMjEuNjgtLjQyNiAyMi41MjdjMCAuODUyLjQyNiAyLjEyNSAzLjQwMiAyLjk3N2w4LjUgMS43SDc4LjQ3Yy01Ljk1IDAtNS45NS0zLjgyNS01Ljk1LTMuODI1bC0xLjI3Ny0xOS4xMjlzLS40MjYgMTkuMTI5LS40MjYgMjEuMjU0YzAgMS43IDEuMjc4IDIuOTc3IDUuOTU0IDMuODI0IDIuOTc2Ljg1MiA2LjggMS43MDMgNi44IDEuNzAzSDcyLjUyYy01LjUyOC0uNDI1LTYuMzgtNC4yNTQtNi4zOC00LjI1NEw1Ni43OSA3NC4yOXptLjQyNS0yMy4zNzljMCAxMS45MDMtOS43NzcgMjEuMjU0LTIxLjI1NCAyMS4yNTQtMTEuNDc2IDAtMjEuMjU0LTkuNzc3LTIxLjI1NC0yMS4yNTQgMC0xMS40NzYgOS43NzgtMjEuMjU0IDIxLjI1NC0yMS4yNTQgMTEuNDc3IDAgMjEuMjU0IDkuMzUyIDIxLjI1NCAyMS4yNTR6bTAgMCIgZmlsbD0iI2VlNzk0YiIvPjxnIGNsaXAtcGF0aD0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtZSkiPjxnIGNsaXAtcGF0aD0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtZikiPjxwYXRoIGQ9Ik0xMDIuMjczIDUzLjQ2YzAgMjAuODk1LTE2LjkzNyAzNy44MzMtMzcuODMyIDM3LjgzMy0yMC44OTQgMC0zNy44MzItMTYuOTM4LTM3LjgzMi0zNy44MzIgMC0yMC44OTUgMTYuOTM4LTM3LjgzMiAzNy44MzItMzcuODMyIDIwLjg5NSAwIDM3LjgzMiAxNi45MzcgMzcuODMyIDM3LjgzMnptMCAwIiBmaWxsPSIjZWU3OTRiIi8+PC9nPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNhcmdvY2Qtb3JpZ2luYWwtZyIgbWFzaz0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtaCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhcmdvY2Qtb3JpZ2luYWwtaSIgbWFzaz0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtaikiLz48cGF0aCBkPSJNNzEuNjY4IDczLjg2M2MwIDcuMjI3LTMuNDAyIDExLjkwNy03LjY1MiAxMS45MDdzLTcuNjUzLTUuNTI4LTcuNjUzLTEyLjc1NGMwIDAgMy40MDMgNi44IDguMDc4IDYuOCA0LjY3NiAwIDcuMjI3LTUuOTUzIDcuMjI3LTUuOTUzem0wIDAiIGZpbGw9IiMwMTAxMDEiLz48cGF0aCBkPSJNNzEuNjY4IDczLjg2M2MwIDQuNjgtMy40MDIgNy4yMjctNy42NTIgNy4yMjdzLTcuMjI3LTMuMzk5LTcuMjI3LTcuNjQ5YzAgMCAzLjQwMiA0LjI1IDguMDc4IDQuMjUgNC42NzYgMCA2LjgwMS0zLjgyOCA2LjgwMS0zLjgyOHptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTkyLjA3IDUzLjg4N2MwIDcuMjc3LTUuODk4IDEzLjE3NS0xMy4xNzUgMTMuMTc1LTcuMjc4IDAtMTMuMTgtNS44OTgtMTMuMTgtMTMuMTc1IDAtNy4yNzggNS45MDItMTMuMTggMTMuMTgtMTMuMTggNy4yNzcgMCAxMy4xNzUgNS45MDIgMTMuMTc1IDEzLjE4em0tMjkuNzU0IDBjMCA3LjI3Ny01LjkwMiAxMy4xNzUtMTMuMTggMTMuMTc1LTcuMjc3IDAtMTMuMTc1LTUuODk4LTEzLjE3NS0xMy4xNzUgMC03LjI3OCA1Ljg5OC0xMy4xOCAxMy4xNzYtMTMuMTggNy4yNzcgMCAxMy4xOCA1LjkwMiAxMy4xOCAxMy4xOHptMCAwIiBmaWxsPSIjZTk2NTRiIi8+PHBhdGggZD0iTTg5LjA5OCA1My44ODdjMCA1LjYzMy00LjU3IDEwLjIwMy0xMC4yMDMgMTAuMjAzLTUuNjMzIDAtMTAuMjA0LTQuNTctMTAuMjA0LTEwLjIwMyAwLTUuNjM3IDQuNTctMTAuMjAzIDEwLjIwNC0xMC4yMDMgNS42MzIgMCAxMC4yMDMgNC41NjYgMTAuMjAzIDEwLjIwM3ptLTMwLjYxIDBjMCA1LjYzMy00LjU2NiAxMC4yMDMtMTAuMTk5IDEwLjIwMy01LjYzNyAwLTEwLjIwMy00LjU3LTEwLjIwMy0xMC4yMDNhMTAuMjAxIDEwLjIwMSAwIDAxMTAuMjAzLTEwLjIwM2M1LjYzMyAwIDEwLjIgNC41NjYgMTAuMiAxMC4yMDN6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01MS4yNjIgNTIuNjFhMi45NzUgMi45NzUgMCAxMS01Ljk1LjAwMyAyLjk3NSAyLjk3NSAwIDAxNS45NS0uMDA0em0zMC42MDkgMGEyLjk3NiAyLjk3NiAwIDExLTUuOTUxLjAwMSAyLjk3NiAyLjk3NiAwIDAxNS45NTEtLjAwMnptMCAwIiBmaWxsPSIjMDEwMTAxIi8+PHBhdGggZD0iTTE3LjI1OCA1OC45ODhhMi4wMDUgMi4wMDUgMCAwMS0yLjEyNS0yLjEyNVYzOS44NmEyLjAwOCAyLjAwOCAwIDAxLjU4Mi0xLjU0MyAyLjAwOCAyLjAwOCAwIDAxMS41NDMtLjU4MiAyLjAwNSAyLjAwNSAwIDAxMi4xMjUgMi4xMjV2MTcuMDA0Yy4wMzUuNTctLjE4IDEuMTMzLS41ODYgMS41NGEyLjAwOCAyLjAwOCAwIDAxLTEuNTQuNTg1em05Mi42NjggMGEyLjAwMyAyLjAwMyAwIDAxLTEuNTQtLjU4NiAyLjAwOCAyLjAwOCAwIDAxLS41ODUtMS41MzlWMzkuODZhMi4wMTEgMi4wMTEgMCAwMS41ODYtMS41NDMgMiAyIDAgMDExLjUzOS0uNTgyIDIgMiAwIDAxMS41MzkuNTgyYy40MS40MDcuNjIuOTcuNTg2IDEuNTQzdjE3LjAwNGExLjk5NCAxLjk5NCAwIDAxLS41ODYgMS41NCAyLjAwMyAyLjAwMyAwIDAxLTEuNTQuNTg1em0wIDAiIGZpbGw9IiNiNmNmZWEiLz48cGF0aCBkPSJNNTEuNjg4IDEzLjUwNGEyLjEyNSAyLjEyNSAwIDExLTQuMjUgMCAyLjEyNSAyLjEyNSAwIDAxNC4yNSAwek0zNC4yNjIgNzAuODlhMS41NTkgMS41NTkgMCAwMS0xLjI3OC0uNDI1Yy01LjEwMS02LjM3NS03LjY1Mi0xNC40NTMtNy42NTItMjIuNTMxYTM3LjkzMyAzNy45MzMgMCAwMTUuMTAyLTE5LjEzIDQxLjY0MSA0MS42NDEgMCAwMTEzLjYwMS0xMy42IDEuODczIDEuODczIDAgMDEyLjEzLjQyNSAxLjg3NCAxLjg3NCAwIDAxLS40MjcgMi4xMjUgMzQuMzA1IDM0LjMwNSAwIDAwLTE3LjQzIDI5Ljc1NCAzMy40ODcgMzMuNDg3IDAgMDA3LjIyNyAyMC44MzJjLjQyNi40MjYuNDI2IDEuNy0uNDI2IDIuMTI1LS40MjUuNDI2LS40MjUuNDI2LS44NDcuNDI2em0wIDAiIGZpbGw9IiNmZmYiLz48dXNlIHhsaW5rOmhyZWY9IiNhcmdvY2Qtb3JpZ2luYWwtayIgbWFzaz0idXJsKCNhcmdvY2Qtb3JpZ2luYWwtbCkiLz48L3N2Zz4K"},1151:(M,j,I)=>{I.d(j,{Z:()=>u,a:()=>L});var N=I(7294);const g={},i=N.createContext(g);function L(M){const j=N.useContext(i);return N.useMemo((function(){return"function"==typeof M?M(j):{...j,...M}}),[j,M])}function u(M){let j;return j=M.disableParentContext?"function"==typeof M.components?M.components(g):M.components||g:L(M.components),N.createElement(i.Provider,{value:j},M.children)}}}]);