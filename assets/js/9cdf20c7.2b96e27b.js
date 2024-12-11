"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[5037],{9271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"YOCTO/yocto_build","title":"Setup of Yocto Build Environment for Renesas RZ-G2L","description":"This guide provides step-by-step instructions to set up a Yocto build environment for the Renesas RZ-G2L board.","source":"@site/docs/YOCTO/yocto_build.md","sourceDirName":"YOCTO","slug":"/YOCTO/yocto_build","permalink":"/jayden/docs/YOCTO/yocto_build","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/YOCTO/yocto_build.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"RENESAS RZ-G2L","permalink":"/jayden/docs/category/renesas-rz-g2l"},"next":{"title":"2.2 Prompting a \\"Hello World\\" Program on the RZG2L Board Using Yocto Project","permalink":"/jayden/docs/YOCTO/helloworld_ttl"}}');var i=r(4848),o=r(8453);const t={sidebar_position:1},a="Setup of Yocto Build Environment for Renesas RZ-G2L",d={},l=[{value:"<strong>1. Create a Working Folder</strong>",id:"1-create-a-working-folder",level:2},{value:"<strong>2. Download and Move <code>rzg.tar.gz</code></strong>",id:"2-download-and-move-rzgtargz",level:2},{value:"<strong>3. Extract <code>rzg.tar.gz</code></strong>",id:"3-extract-rzgtargz",level:2},{value:"<strong>4. Open Folder in a Development Container</strong>",id:"4-open-folder-in-a-development-container",level:2},{value:"<strong>5. Download Additional Packages</strong>",id:"5-download-additional-packages",level:2},{value:"<strong>6. Configure Git</strong>",id:"6-configure-git",level:2},{value:"<strong>7. Unzip the 3 Packages</strong>",id:"7-unzip-the-3-packages",level:2},{value:"<strong>8. Create and Navigate to <code>yocto</code> Folder</strong>",id:"8-create-and-navigate-to-yocto-folder",level:2},{value:"<strong>9. Extract VLP, Graphics, and Video Codec Files</strong>",id:"9-extract-vlp-graphics-and-video-codec-files",level:2},{value:"<strong>10. Apply VLP Update Patch</strong>",id:"10-apply-vlp-update-patch",level:2},{value:"<strong>11. Apply Additional Patch Files</strong>",id:"11-apply-additional-patch-files",level:2},{value:"<strong>12. Initialize Yocto Build Environment</strong>",id:"12-initialize-yocto-build-environment",level:2},{value:"<strong>13. Add Necessary Layers</strong>",id:"13-add-necessary-layers",level:2},{value:"<strong>14. Add Custom Configuration</strong>",id:"14-add-custom-configuration",level:2},{value:"<strong>15. Build Weston Image</strong>",id:"15-build-weston-image",level:2},{value:"<strong>16. Prepare SD Card</strong>",id:"16-prepare-sd-card",level:2},{value:"<strong>17. Boot the Board</strong>",id:"17-boot-the-board",level:2},{value:"<strong>Additional Notes</strong>",id:"additional-notes",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setup-of-yocto-build-environment-for-renesas-rz-g2l",children:"Setup of Yocto Build Environment for Renesas RZ-G2L"})}),"\n",(0,i.jsx)(n.p,{children:"This guide provides step-by-step instructions to set up a Yocto build environment for the Renesas RZ-G2L board."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-create-a-working-folder",children:(0,i.jsx)(n.strong,{children:"1. Create a Working Folder"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/work/rzg\ncd ~/work/rzg\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Create a directory to house all necessary files and configurations for the Yocto build environment."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-download-and-move-rzgtargz",children:(0,i.jsxs)(n.strong,{children:["2. Download and Move ",(0,i.jsx)(n.code,{children:"rzg.tar.gz"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the file from ",(0,i.jsx)(n.a,{href:"http://192.168.113.104/rz/moil/rzg/",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Drag the downloaded ",(0,i.jsx)(n.code,{children:"rzg.tar.gz"})," file into the ",(0,i.jsx)(n.code,{children:"~/work/rzg"})," folder using Visual Studio Code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The ",(0,i.jsx)(n.code,{children:"rzg.tar.gz"})," archive contains the pre-configured Yocto environment for the RZ-G2L."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-extract-rzgtargz",children:(0,i.jsxs)(n.strong,{children:["3. Extract ",(0,i.jsx)(n.code,{children:"rzg.tar.gz"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tar xzvf rzg.tar.gz\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Extract the Yocto project files and configurations into the working directory."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-open-folder-in-a-development-container",children:(0,i.jsx)(n.strong,{children:"4. Open Folder in a Development Container"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"~/work/rzg"})," folder in a new development container using Visual Studio Code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Use VS Code's development containers to ensure a consistent build environment."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-download-additional-packages",children:(0,i.jsx)(n.strong,{children:"5. Download Additional Packages"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the following files (Graphics, Video Codec & VLP) from ",(0,i.jsx)(n.a,{href:"http://192.168.113.104/rz/RZG/",children:"here"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RTK0EF0045Z0021AZJ-v3.0.6-update3.zip"})," (VLP files)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RTK0EF0045Z13001ZJ-v1.2.2_EN.zip"})," (Graphics)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RTK0EF0045Z15001ZJ-v1.2.2_EN.zip"})," (Video Codec)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": These packages provide additional features, libraries, and patches required for the Yocto build."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-configure-git",children:(0,i.jsx)(n.strong,{children:"6. Configure Git"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Set up Git to manage patches and code repositories effectively."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-unzip-the-3-packages",children:(0,i.jsx)(n.strong,{children:"7. Unzip the 3 Packages"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"unzip RTK0EF0045Z0021AZJ-v3.0.6-update3.zip\nunzip RTK0EF0045Z13001ZJ-v1.2.2_EN.zip\nunzip RTK0EF0045Z15001ZJ-v1.2.2_EN.zip\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Extract the content of each package into their respective directories for further use."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-create-and-navigate-to-yocto-folder",children:(0,i.jsxs)(n.strong,{children:["8. Create and Navigate to ",(0,i.jsx)(n.code,{children:"yocto"})," Folder"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/work/rzg/yocto\ncd ~/work/rzg/yocto\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Organize and separate the Yocto build environment from other project files."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"9-extract-vlp-graphics-and-video-codec-files",children:(0,i.jsx)(n.strong,{children:"9. Extract VLP, Graphics, and Video Codec Files"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tar zxvf ../RTK0EF0045Z0021AZJ-v3.0.6-update3/rzg_vlp_v3.0.6.tar.gz\ntar zxvf ../RTK0EF0045Z13001ZJ-v1.2.2_EN/meta-rz-features_graphics_v1.2.2.tar.gz\ntar zxvf ../RTK0EF0045Z15001ZJ-v1.2.2_EN/meta-rz-features_codec_v1.2.2.tar.gz\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Extract the VLP, Graphics, and Video Codec features into the Yocto environment."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"10-apply-vlp-update-patch",children:(0,i.jsx)(n.strong,{children:"10. Apply VLP Update Patch"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"patch -p1 < ../RTK0EF0045Z0021AZJ-v3.0.6-update3/vlpg306-to-vlpg306update3.patch\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Update the VLP files to the latest version, fixing known issues or adding enhancements."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"11-apply-additional-patch-files",children:(0,i.jsx)(n.strong,{children:"11. Apply Additional Patch Files"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download extra patches from ",(0,i.jsx)(n.a,{href:"https://m11158002.github.io/moil-renesas/docs/note/renesas/rzg",children:"this source"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Apply the patches:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"patch -p1 < ../extra/0001-rz-common-recipes-debian-buster-glibc-update-to-v2.2.patch\npatch -p1 < ../extra/0001-rz-common-linux-update-linux-kernel-to-the-latest-re.patch\npatch -p1 < ../extra/0001-rz-common-gst-plugins-bad-Depending-bayer2raw-if-lay.patch\npatch -p1 < ../extra/0001-gstreamer-moil-plugin-91a25cd4d16fc479aefd2aa853466770.patch\npatch -p1 < ../extra/0002-fix_qtsmarthome_url-db1d20dcf1b5af60dc7034e78271ddc2.patch\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Ensure compatibility, add features, or fix bugs in the build environment."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"12-initialize-yocto-build-environment",children:(0,i.jsx)(n.strong,{children:"12. Initialize Yocto Build Environment"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Set up the environment for building Yocto images, including paths and configurations."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"13-add-necessary-layers",children:(0,i.jsx)(n.strong,{children:"13. Add Necessary Layers"})}),"\n",(0,i.jsxs)(n.p,{children:["Update ",(0,i.jsx)(n.code,{children:"build/conf/bblayers.conf"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics\nbitbake-layers add-layer ../meta-rz-features/meta-rz-codecs\nbitbake-layers add-layer ../meta-qt5\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Add required layers for graphics, codecs, and Qt support."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"14-add-custom-configuration",children:(0,i.jsx)(n.strong,{children:"14. Add Custom Configuration"})}),"\n",(0,i.jsxs)(n.p,{children:["Append to ",(0,i.jsx)(n.code,{children:"conf/local.conf"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'QT_DEMO = "1"\nIMAGE_INSTALL_append = " kernel-module-uvcvideo "\nEXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "\nIMAGE_INSTALL_append = " curl graphviz "\nIMAGE_INSTALL_append = " gst-instruments gst-shark "\nPACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Customize the image for specific use cases like Qt demos, video handling, and remote access."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"15-build-weston-image",children:(0,i.jsx)(n.strong,{children:"15. Build Weston Image"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"MACHINE=smarc-rzg2l bitbake core-image-weston\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Build the Weston compositor image for the RZ-G2L board."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"16-prepare-sd-card",children:(0,i.jsx)(n.strong,{children:"16. Prepare SD Card"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Insert the SD card and find its device name:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo fdisk -l\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Unmount any mounted partitions:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo umount /dev/sda\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Write the image to the SD card:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo bmaptool copy <wic image>.wic.gz /dev/sda\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Flash the built image onto an SD card for booting."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"17-boot-the-board",children:(0,i.jsx)(n.strong,{children:"17. Boot the Board"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Insert the SD card into the RZ-G2L board."}),"\n",(0,i.jsx)(n.li,{children:"Power on the board."}),"\n",(0,i.jsxs)(n.li,{children:["Monitor the boot process using a serial console with a baud rate of ",(0,i.jsx)(n.code,{children:"115200"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"additional-notes",children:(0,i.jsx)(n.strong,{children:"Additional Notes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"rzg.tar.gz"})}),": The main archive containing the initial Yocto setup and base configurations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VLP Files"}),": Essential low-level platform files for hardware compatibility and optimizations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Meta Layers (",(0,i.jsx)(n.code,{children:"meta-rz-features"}),", etc.)"]}),": Directories containing recipes and configurations for specific features like graphics and codecs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Patches"}),": Fixes and enhancements for software components like the Linux kernel or GStreamer plugins."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(6540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);