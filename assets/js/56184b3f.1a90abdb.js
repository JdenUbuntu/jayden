"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[4836],{881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"QT/build_qt","title":"Building Qt Projects on Ubuntu & RZG2L","description":"1. Explore Examples and Existing Projects","source":"@site/docs/QT/build_qt.md","sourceDirName":"QT","slug":"/QT/build_qt","permalink":"/jayden/docs/QT/build_qt","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/QT/build_qt.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Installation and Setup of Qt Creator","permalink":"/jayden/docs/QT/environment_qt"}}');var i=t(4848),l=t(8453);const r={sidebar_position:4},o="Building Qt Projects on Ubuntu & RZG2L",d={},c=[{value:"1. Explore Examples and Existing Projects",id:"1-explore-examples-and-existing-projects",level:2},{value:"2. Enable Design Mode",id:"2-enable-design-mode",level:2},{value:"3. Configure Build Settings",id:"3-configure-build-settings",level:2},{value:"4. Build the Project",id:"4-build-the-project",level:2},{value:"5. Deploy to RZG2L",id:"5-deploy-to-rzg2l",level:2},{value:"6. Clone and Run the Coffee Machine Project",id:"6-clone-and-run-the-coffee-machine-project",level:2},{value:"Notes",id:"notes",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"building-qt-projects-on-ubuntu--rzg2l",children:"Building Qt Projects on Ubuntu & RZG2L"})}),"\n",(0,i.jsx)(n.h2,{id:"1-explore-examples-and-existing-projects",children:"1. Explore Examples and Existing Projects"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open Qt Creator and click on ",(0,i.jsx)(n.strong,{children:"Examples"})," to browse sample projects and existing templates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Examples Directory"}),": The default examples can be found under:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Qt5.6.3/Examples/Qt-5.6.3/\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-enable-design-mode",children:"2. Enable Design Mode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Double-click on the file ",(0,i.jsx)(n.code,{children:"MainForm.ui.qml"})," to open the design mode."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Design Mode"}),": In this mode, you can drag and drop UI components (e.g., buttons, labels) onto the central canvas to visually build your application."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-configure-build-settings",children:"3. Configure Build Settings"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Projects"})," in the left sidebar of Qt Creator."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"RZG2L Kit"})," that you configured during the setup process."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-build-the-project",children:"4. Build the Project"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Build"})," button located at the lower left of the Qt Creator interface."]}),"\n",(0,i.jsx)(n.li,{children:"The generated executables will be located in the specified build output folder."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-deploy-to-rzg2l",children:"5. Deploy to RZG2L"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"scp"})," command to transfer the executable to the RZG2L device:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scp <file> user@<rzg2l_ip>:/path/to/destination\n"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Log in to the RZG2L device via SSH and run the executable to verify its functionality."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-clone-and-run-the-coffee-machine-project",children:"6. Clone and Run the Coffee Machine Project"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the Coffee Machine project by SKC:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/yourskc/moil_coffee.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Build and run the project:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On ",(0,i.jsx)(n.strong,{children:"Ubuntu"}),": Use the configured Qt Creator environment."]}),"\n",(0,i.jsxs)(n.li,{children:["On ",(0,i.jsx)(n.strong,{children:"RZG2L"}),": Transfer the project using ",(0,i.jsx)(n.code,{children:"scp"}),", build it, and execute it on the device."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the ",(0,i.jsx)(n.strong,{children:"RZG2L Kit"})," is selected during the build process to create a compatible executable for the target device."]}),"\n",(0,i.jsxs)(n.li,{children:["If issues occur during deployment, check the IP address of the RZG2L and ensure proper permissions are set on the executable (",(0,i.jsx)(n.code,{children:"chmod +x <file>"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);