"use strict";(self.webpackChunkquick_ftxui=self.webpackChunkquick_ftxui||[]).push([[4814],{6222:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(5893),l=i(1151);const t={title:"Components",description:"",summary:"",date:new Date("2023-09-25T15:55:32.000Z"),lastmod:new Date("2023-09-25T15:55:32.000Z"),draft:!1,img:[],menu:{docs:{parent:"",identifier:"comps-83666302c7be7b5900da187f2f091dfb"}},weight:40,toc:!0},r=void 0,c={id:"user-manual/comps",title:"Components",description:"",source:"@site/docs/user-manual/02-comps.md",sourceDirName:"user-manual",slug:"/user-manual/comps",permalink:"/quick-ftxui-docs/docs/user-manual/comps",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-manual/02-comps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Components",description:"",summary:"",date:"2023-09-25T15:55:32.000Z",lastmod:"2023-09-25T15:55:32.000Z",draft:!1,img:[],menu:{docs:{parent:"",identifier:"comps-83666302c7be7b5900da187f2f091dfb"}},weight:40,toc:!0},sidebar:"docs",previous:{title:"An Overview",permalink:"/quick-ftxui-docs/docs/user-manual/overview"},next:{title:"DOM",permalink:"/quick-ftxui-docs/docs/user-manual/dom"}},o={},d=[{value:"1. Button",id:"1-button",level:2},{value:"2. Slider",id:"2-slider",level:2},{value:"3. Input",id:"3-input",level:2},{value:"4. Dropdown, Toggle and Menu",id:"4-dropdown-toggle-and-menu",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page describes the syntax, styles and variable usage with all the components supported in Quick-FTXUI"}),"\n",(0,s.jsx)(n.h2,{id:"1-button",children:"1. Button"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Button"})," can be used to execute commands, like to exit the TUI, or to execute shell commands (bash & ps supported).\nSyntax for defining a ",(0,s.jsx)(n.code,{children:"Button"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Button {\n  "[Button_label]",\n  [command],\n  [Button_style],\n  [variable_name]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"where,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color"})," is used to give color to the Button"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Button_label"})," is the label given to the button"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"command"}),", which can be ",(0,s.jsx)(n.code,{children:'"Exit"'}),", or a ",(0,s.jsx)(n.code,{children:"System()"})," call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Button_style"}),", which can be Animated or Ascii. Its an optional parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variable_name"}),", where the variable is of type",(0,s.jsx)(n.code,{children:"str"}),". If ",(0,s.jsx)(n.code,{children:"System()"})," call is used, then variable has to be defined necessarily."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now, lets take a look at some examples, which will depict all the styles and commands which we can execute"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Basic button, to exit the UI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'Button {\n  "Exit",\n  "Exit"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"which looks like this:"}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/button-1.png",alt:"Basic button"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Red Animated Button, to list the items in the current directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'str z = "init"\nRed Button {\n  "ls -l",\n  System("ls -l"),\n  Animated,\n  z\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/button-2.png",alt:"ls -l button"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Blue Ascii Button, to open chrome (in at least Ubuntu)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'str z = "init"\nBlueLight Button{\n  "chrome",\n  System("/usr/bin/google-chrome-stable"),\n  Ascii,\n  z\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/button-3.png",alt:"chrome button"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now we will see all these buttons in action:"}),"\n",(0,s.jsxs)("video",{width:"100%",height:"auto",controls:!0,children:[(0,s.jsx)("source",{src:"/quick-ftxui-docs/img/button-video.webm",type:"video/webm"}),(0,s.jsx)(n.p,{children:"Your browser does not support the video tag."})]}),"\n",(0,s.jsxs)(n.p,{children:["You can find the complete example here: ",(0,s.jsx)(n.a,{href:"https://github.com/vrnimje/quick-ftxui/blob/master/examples/Button.qf",children:"Button.qf"})]}),"\n",(0,s.jsxs)(n.p,{children:["Note: Since we used the same variables for both the ",(0,s.jsx)(n.code,{children:"Button"}),"s, the output from their commands were both reflected in ",(0,s.jsx)(n.code,{children:"z"}),"'s value."]}),"\n",(0,s.jsx)(n.h2,{id:"2-slider",children:"2. Slider"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Slider"})," is used to select a numerical value between a specified range.\nSyntax for defining a ",(0,s.jsx)(n.code,{children:"Slider"})," is"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Slider {\n  "[Slider_label]",\n  [variable_name],\n  [range_min],\n  [range_max],\n  [step]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"where,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color"})," is used to give color to the Slider"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Slider_label"}),", which provides the label for the slider"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variable_name"}),", where the variable is of type ",(0,s.jsx)(n.code,{children:"int"}),", and stores the selected value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"range_min"}),", which specifies the minimum value of the range"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"range_max"}),", which specifies the maximum value of the range"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"step"}),", which specifies the step value by which the slider's value will increase or decrease"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now, lets take a look at some examples, which will depict how ",(0,s.jsx)(n.code,{children:"Slider"}),"s can be configured and used"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A Blue Slider, for choosing any value between 0 and 100"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'int x = 5\nBlue Slider{\n  "Slider 1: ",\n  x,\n  0,\n  100,\n  1\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"which looks like:"}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/slider-1.png",alt:"0-100 1 step Slider"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A YellowLight Slider, for choosing any even number between 0 and 100"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'int y = 40\nYellowLight Slider{\n  "Slider 2: ",\n  y,\n  0,\n  100,\n  2\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"which looks like:"}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/slider-2.png",alt:"0-100 2 step Slider"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Lets look at these sliders we have defined in action:"}),"\n",(0,s.jsxs)("video",{width:"100%",height:"auto",controls:!0,children:[(0,s.jsx)("source",{src:"/quick-ftxui-docs/img/slider-video.webm",type:"video/webm"}),(0,s.jsx)(n.p,{children:"Your browser does not support the video tag."})]}),"\n",(0,s.jsxs)(n.p,{children:["As we can see, the YellowLight ",(0,s.jsx)(n.code,{children:"Slider"})," was progressing faster than the BlueLight one, as its step value was greater."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check out the full example here: ",(0,s.jsx)(n.a,{href:"https://github.com/vrnimje/quick-ftxui/blob/master/examples/Slider.qf",children:"Slider.qf"})]}),"\n",(0,s.jsxs)(n.p,{children:["Note: Avoid using ",(0,s.jsx)(n.code,{children:"Slider"}),"s in Horizontal blocks, as it results in its compaction like described below",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/slider-3.png",alt:"slider defect"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"(The slider is at its max range)"}),"\n",(0,s.jsx)(n.h2,{id:"3-input",children:"3. Input"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Input"})," is used to access textual inputs from the user.\nSyntax for defining an ",(0,s.jsx)(n.code,{children:"Input"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Input {\n  "[Placeholder]",\n  [Input_Option],\n  [variable_name]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"where"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color"})," colors the input field and the text inside (if any)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Input_Option"})," can either be ",(0,s.jsx)(n.code,{children:"None"})," or ",(0,s.jsx)(n.code,{children:"Password"}),". If not specified, defualt is ",(0,s.jsx)(n.code,{children:"None"}),". In ",(0,s.jsx)(n.code,{children:"Password"}),", the input text (while in the TUI) is hidden"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variable_name"}),", which is of type ",(0,s.jsx)(n.code,{children:"str"}),". If not specified, script will raise error"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now lets explore some examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'A GreenLight Input, with initial value of "John"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'str f = "John"\nGreenLight Input {\n    "First Name....",\n    f\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which renders like: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/input-1.png",alt:"defualt input"}),"\n",(0,s.jsx)("br",{}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A Red Password field"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'str p\nRed Input {\n    "Password....",\n    Password,\n    p\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks initially something like this:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/input-2.png",alt:"password w/out text"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["and with text looks like: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/input-3.png",alt:"password w/ text"}),"\n",(0,s.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now lets see an actual demo:"}),"\n",(0,s.jsxs)("video",{width:"100%",height:"auto",controls:!0,children:[(0,s.jsx)("source",{src:"/quick-ftxui-docs/img/input-video.webm",type:"video/webm"}),(0,s.jsx)(n.p,{children:"Your browser does not support the video tag."})]}),"\n",(0,s.jsxs)(n.p,{children:["You can check out the full example here: ",(0,s.jsx)(n.a,{href:"https://github.com/vrnimje/quick-ftxui/blob/master/examples/input.qf",children:"input.qf"})]}),"\n",(0,s.jsx)(n.h2,{id:"4-dropdown-toggle-and-menu",children:"4. Dropdown, Toggle and Menu"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Dropdown"}),"s, ",(0,s.jsx)(n.code,{children:"Toggle"}),"s & ",(0,s.jsx)(n.code,{children:"Menu"}),"s are used to present a list of options to the user to choose one from. They all have similar syntax, the only difference between them is their representation."]}),"\n",(0,s.jsxs)(n.p,{children:["Syntax for defining a ",(0,s.jsx)(n.code,{children:"Dropdown"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Dropdown {\n  ["list_item_1", "list_item_2", ... , "list_item_n", ],\n  [variable_name]\n} \n'})}),"\n",(0,s.jsx)(n.p,{children:"where,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color"})," will be applied to the ",(0,s.jsx)(n.code,{children:"Dropdown"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"list_item_i"})," refers to the options that will be given to the user"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variable_name"})," of type ",(0,s.jsx)(n.code,{children:"int"}),", to store option no. selected. Do note that the option numbers start from ",(0,s.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Syntax for defining a ",(0,s.jsx)(n.code,{children:"Toggle"})," is also same"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Toggle {\n  ["list_item_1", "list_item_2", ... , "list_item_n", ],\n  [variable_name]\n} \n'})}),"\n",(0,s.jsxs)(n.p,{children:["Syntax for defining a ",(0,s.jsx)(n.code,{children:"Menu"})," is same, except for Option for Menu"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'[color] Menu {\n  ["list_item_1", "list_item_2", ... , "list_item_n", ],\n  [Menu_Option],\n  [variable_name]\n} \n'})}),"\n",(0,s.jsx)(n.p,{children:"where,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Menu_Option"})," can be ",(0,s.jsx)(n.code,{children:"Vertical"}),", ",(0,s.jsx)(n.code,{children:"Horizontal"}),", ",(0,s.jsx)(n.code,{children:"HorizontalAnimated"})," and ",(0,s.jsx)(n.code,{children:"VerticalAnimated"}),". The ",(0,s.jsx)(n.code,{children:"Animated"})," options have transition while switching between the options."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Lets look at some examples for the same:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A Horizontal Red Menu, with animated tranistions between the options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'int x\nRed Menu{\n  [ "Physics", "Maths", "Chemistry", "Biology",],\n  HorizontalAnimated,\n  x\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/menu-1.png",alt:"animated menu"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A normal, Vertical Green Menu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'int a\nGreen Menu {\n  [ "Physics", "Maths", "Chemistry", "Biology",],\n  Vertical,\n  a\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/menu-2.png",alt:"animated menu"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A BlueLight Dropdown"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'int z\nBlueLight Dropdown {\n  [ "Zain", "Mahesh", "Alqama", "Vaidic", "Mundane", "Advait", ],\n  z\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/dropdown-1.png",alt:"animated menu"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A Cyan Toggle"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'int y\nCyan Toggle {\n  [ "On", "Off", ],\n  y\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["which looks like this: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("img",{src:"/quick-ftxui-docs/img/toggle-1.png",alt:"animated menu"}),"\n",(0,s.jsx)(n.p,{children:"Now lets take a look at how these components work:"}),"\n",(0,s.jsxs)("video",{width:"100%",height:"auto",controls:!0,children:[(0,s.jsx)("source",{src:"/quick-ftxui-docs/img/menu-video.webm",type:"video/webm"}),(0,s.jsx)(n.p,{children:"Your browser does not support the video tag."})]}),"\n",(0,s.jsxs)(n.p,{children:["You can check out the full example here: ",(0,s.jsx)(n.a,{href:"https://github.com/vrnimje/quick-ftxui/blob/master/examples/menu_toggle_dropdown.qf",children:"menu_toggle_dropdown.qf"})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);