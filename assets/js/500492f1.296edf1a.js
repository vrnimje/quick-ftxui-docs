"use strict";(self.webpackChunkquick_ftxui=self.webpackChunkquick_ftxui||[]).push([[1490],{7189:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var t=s(5893),n=s(1151);const r={title:"Quick Start",description:"",summary:"",date:new Date("2023-09-07T14:04:48.000Z"),lastmod:new Date("2023-09-07T14:04:48.000Z"),draft:!1,images:[],menu:{docs:{parent:"",identifier:"example-6a1a6be4373e933280d78ea53de6158e"}},weight:10,toc:!0},a=void 0,d={id:"guides/quick-start",title:"Quick Start",description:"",source:"@site/docs/guides/01-quick-start.md",sourceDirName:"guides",slug:"/guides/quick-start",permalink:"/quick-ftxui-docs/docs/guides/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/01-quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",description:"",summary:"",date:"2023-09-07T14:04:48.000Z",lastmod:"2023-09-07T14:04:48.000Z",draft:!1,images:[],menu:{docs:{parent:"",identifier:"example-6a1a6be4373e933280d78ea53de6158e"}},weight:10,toc:!0},sidebar:"docs",previous:{title:"Guides",permalink:"/quick-ftxui-docs/docs/guides"},next:{title:"Using Quick-FTXUI",permalink:"/quick-ftxui-docs/docs/guides/use"}},c={},u=[{value:"1. Clone the Repository",id:"1-clone-the-repository",level:2},{value:"2. Build",id:"2-build",level:2},{value:"3. Run Examples",id:"3-run-examples",level:2},{value:"Further reading",id:"further-reading",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This page will guide you through setting up Quick-FTXUI's repository & running the examples"}),"\n",(0,t.jsx)(i.h2,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),"\n",(0,t.jsx)(i.p,{children:"First, clone the repository in your system"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"  git clone https://github.com/vrnimje/quick-ftxui.git\n  cd quick-ftxui\n"})}),"\n",(0,t.jsx)(i.h2,{id:"2-build",children:"2. Build"}),"\n",(0,t.jsxs)(i.p,{children:["Then, in the directory, create a ",(0,t.jsx)(i.code,{children:"build"})," folder and build the project, with examples, using CMake"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"  mkdir build\n  cd build\n  cmake .. -GNinja -DQUICK_FTXUI_FETCH_BOOST=On -DQUICK_FTXUI_EXAMPLES=On\n"})}),"\n",(0,t.jsx)(i.h2,{id:"3-run-examples",children:"3. Run Examples"}),"\n",(0,t.jsx)(i.p,{children:"To run the examples, execute the following command, for C++ examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"  ./examples/quick_ftxui_example\n"})}),"\n",(0,t.jsxs)(i.p,{children:["For QF examples (",(0,t.jsx)(i.code,{children:".qf"})," files), execute the following command"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"  ./quick-ftxui ../examples/[file_name].qf\n"})}),"\n",(0,t.jsx)(i.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(i.p,{children:["Read the ",(0,t.jsx)(i.a,{href:"/docs/user-manual",children:"docs"})," for understanding the Quick-FTXUI language"]})]})}function o(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);