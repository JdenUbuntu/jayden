"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[6897],{6645:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"GSTREAMER/architecture_gstreamer","title":"3.2 GStreamer Architecture for MOIL Implementation on Renesas RZ/G2L","description":"Gstreamer Flow","source":"@site/docs/GSTREAMER/architecture_gstreamer.md","sourceDirName":"GSTREAMER","slug":"/GSTREAMER/architecture_gstreamer","permalink":"/jayden/docs/GSTREAMER/architecture_gstreamer","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GSTREAMER/architecture_gstreamer.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"3.1 Introduction to GStreamer","permalink":"/jayden/docs/GSTREAMER/intro_gstreamer"},"next":{"title":"Working Principle of the Remap Operation on Renesas RZ/G2L","permalink":"/jayden/docs/GSTREAMER/working_pcp"}}');var s=r(4848),t=r(8453);const l={sidebar_position:2},o="3.2 GStreamer Architecture for MOIL Implementation on Renesas RZ/G2L",a={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"1. Preparation of the X, Y Mapping",id:"1-preparation-of-the-x-y-mapping",level:2},{value:"<strong>Calculation Process</strong>:",id:"calculation-process",level:3},{value:"2. Development of GStreamer in the Ubuntu Mini PC",id:"2-development-of-gstreamer-in-the-ubuntu-mini-pc",level:2},{value:"<strong>Development Steps</strong>:",id:"development-steps",level:3},{value:"3. Convert into Older GStreamer Version",id:"3-convert-into-older-gstreamer-version",level:2},{value:"<strong>Steps to Downgrade</strong>:",id:"steps-to-downgrade",level:3},{value:"4. Yocto Integration",id:"4-yocto-integration",level:2},{value:"<strong>Steps</strong>:",id:"steps",level:3},{value:"<strong>Post-Build Testing</strong>:",id:"post-build-testing",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"32-gstreamer-architecture-for-moil-implementation-on-renesas-rzg2l",children:"3.2 GStreamer Architecture for MOIL Implementation on Renesas RZ/G2L"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Gstreamer Flow",src:r(8911).A+"",width:"1536",height:"864"})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsx)(n.p,{children:"Before proceeding with the implementation, the camera parameters must be defined. These include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Center Point (Cx, Cy)"}),": The optical center of the fisheye lens."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Alpha Angle"}),": Horizontal field of view of the camera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Beta Angle"}),": Vertical field of view of the camera."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These parameters are essential for accurately mapping fisheye inputs to the equirectangular projection or any desired output format."}),"\n",(0,s.jsx)(n.h2,{id:"1-preparation-of-the-x-y-mapping",children:"1. Preparation of the X, Y Mapping"}),"\n",(0,s.jsx)(n.p,{children:"The first step involves generating the X, Y mapping for MOIL image processing. This mapping is calculated based on the fisheye lens distortion model and camera parameters."}),"\n",(0,s.jsxs)(n.h3,{id:"calculation-process",children:[(0,s.jsx)(n.strong,{children:"Calculation Process"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input"}),": Pixel location ",(0,s.jsx)(n.code,{children:"(u, v)"})," in the fisheye image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Formulas"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"r = sqrt((u - Cx)^2 + (v - Cy)^2)\n\u03b8 = atan2(v - Cy, u - Cx)\nx = r * cos(\u03b8)\ny = r * sin(\u03b8)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Here:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"})," is the radial distance from the center."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\u03b8"})," is the angular position."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," represent the mapped coordinates for rectification or projection."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This mapping table is precomputed and stored as a reference for real-time processing."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-development-of-gstreamer-in-the-ubuntu-mini-pc",children:"2. Development of GStreamer in the Ubuntu Mini PC"}),"\n",(0,s.jsx)(n.p,{children:"To streamline development:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.strong,{children:"GStreamer 1.19.2"})," on the Ubuntu mini PC for testing and pipeline design."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure modular implementation of GStreamer plugins tailored for MOIL processing, including:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fisheye correction."}),"\n",(0,s.jsx)(n.li,{children:"Conversion to equirectangular projection."}),"\n",(0,s.jsx)(n.li,{children:"RTSP streaming for output visualization."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"development-steps",children:[(0,s.jsx)(n.strong,{children:"Development Steps"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install GStreamer"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build and Test Pipelines"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Develop and test GStreamer pipelines using test data (images, videos) to validate the X, Y mapping integration."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ensure File Structure"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Place all necessary MOIL map generation and GStreamer files in a well-structured directory for ease of conversion later."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-convert-into-older-gstreamer-version",children:"3. Convert into Older GStreamer Version"}),"\n",(0,s.jsxs)(n.p,{children:["The Renesas RZ/G2L platform uses ",(0,s.jsx)(n.strong,{children:"GStreamer 1.16.3"}),", which may lack certain features present in 1.19.2. After development:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adapt the pipelines and plugins to the older version while ensuring compatibility."}),"\n",(0,s.jsx)(n.li,{children:"Identify and replace unsupported elements in the GStreamer pipeline with alternatives available in 1.16.3."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"steps-to-downgrade",children:[(0,s.jsx)(n.strong,{children:"Steps to Downgrade"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify which plugins or elements require changes:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gst-inspect-1.0\n"})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Modify the pipeline code to use equivalent functionality in 1.16.3."}),"\n",(0,s.jsx)(n.li,{children:"Test the adjusted pipeline on the PC with GStreamer 1.16.3 installed."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-yocto-integration",children:"4. Yocto Integration"}),"\n",(0,s.jsx)(n.p,{children:"After ensuring compatibility with GStreamer 1.16.3, integrate the adjusted pipeline into the Yocto build system for the Renesas RZ/G2L platform."}),"\n",(0,s.jsxs)(n.h3,{id:"steps",children:[(0,s.jsx)(n.strong,{children:"Steps"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prepare Yocto Layer"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Include the GStreamer 1.16.3 recipes in the Yocto meta-layer."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embed Pipeline Code"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add MOIL processing scripts and precomputed X, Y mapping files to the Yocto build."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Build Yocto"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bitbake core-image-qt\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"post-build-testing",children:[(0,s.jsx)(n.strong,{children:"Post-Build Testing"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy the built image to the RZ/G2L board."}),"\n",(0,s.jsx)(n.li,{children:"Test the pipeline's performance with real-time fisheye inputs."}),"\n",(0,s.jsx)(n.li,{children:"Use RTSP streaming to visualize the corrected output on the receiver PC with Pannellum."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"This architecture ensures:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accurate fisheye correction"})," using MOIL X, Y mappings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Efficient GStreamer pipelines"})," for image processing."]}),"\n",(0,s.jsxs)(n.li,{children:["Compatibility with ",(0,s.jsx)(n.strong,{children:"embedded hardware"})," like Renesas RZ/G2L."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Seamless RTSP streaming"})," for output visualization on external devices."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8911:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/gstreamer_1.1-915a3a24efa694eb928b926ec38aa219.png"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);