---
sidebar_position: 1
---
# Setup of Yocto Build Environment for Renesas RZ-G2L

This guide provides step-by-step instructions to set up a Yocto build environment for the Renesas RZ-G2L board.

---

## **1. Create a Working Folder**
```bash
mkdir -p ~/work/rzg
cd ~/work/rzg
```
- **Purpose**: Create a directory to house all necessary files and configurations for the Yocto build environment.

---

## **2. Download and Move `rzg.tar.gz`**
- Download the file from [here](http://192.168.113.104/rz/moil/rzg/).
- Drag the downloaded `rzg.tar.gz` file into the `~/work/rzg` folder using Visual Studio Code.
- **Purpose**: The `rzg.tar.gz` archive contains the pre-configured Yocto environment for the RZ-G2L.

---

## **3. Extract `rzg.tar.gz`**
```bash
tar xzvf rzg.tar.gz
```
- **Purpose**: Extract the Yocto project files and configurations into the working directory.

---

## **4. Open Folder in a Development Container**
- Open the `~/work/rzg` folder in a new development container using Visual Studio Code.
- **Purpose**: Use VS Code's development containers to ensure a consistent build environment.

---

## **5. Download Additional Packages**
- Download the following files (Graphics, Video Codec & VLP) from [here](http://192.168.113.104/rz/RZG/):
  - `RTK0EF0045Z0021AZJ-v3.0.6-update3.zip` (VLP files)
  - `RTK0EF0045Z13001ZJ-v1.2.2_EN.zip` (Graphics)
  - `RTK0EF0045Z15001ZJ-v1.2.2_EN.zip` (Video Codec)
- **Purpose**: These packages provide additional features, libraries, and patches required for the Yocto build.

---

## **6. Configure Git**
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
- **Purpose**: Set up Git to manage patches and code repositories effectively.

---

## **7. Unzip the 3 Packages**
```bash
unzip RTK0EF0045Z0021AZJ-v3.0.6-update3.zip
unzip RTK0EF0045Z13001ZJ-v1.2.2_EN.zip
unzip RTK0EF0045Z15001ZJ-v1.2.2_EN.zip
```
- **Purpose**: Extract the content of each package into their respective directories for further use.

---

## **8. Create and Navigate to `yocto` Folder**
```bash
mkdir -p ~/work/rzg/yocto
cd ~/work/rzg/yocto
```
- **Purpose**: Organize and separate the Yocto build environment from other project files.

---

## **9. Extract VLP, Graphics, and Video Codec Files**
```bash
tar zxvf ../RTK0EF0045Z0021AZJ-v3.0.6-update3/rzg_vlp_v3.0.6.tar.gz
tar zxvf ../RTK0EF0045Z13001ZJ-v1.2.2_EN/meta-rz-features_graphics_v1.2.2.tar.gz
tar zxvf ../RTK0EF0045Z15001ZJ-v1.2.2_EN/meta-rz-features_codec_v1.2.2.tar.gz
```
- **Purpose**: Extract the VLP, Graphics, and Video Codec features into the Yocto environment.

---

## **10. Apply VLP Update Patch**
```bash
patch -p1 < ../RTK0EF0045Z0021AZJ-v3.0.6-update3/vlpg306-to-vlpg306update3.patch
```
- **Purpose**: Update the VLP files to the latest version, fixing known issues or adding enhancements.

---

## **11. Apply Additional Patch Files**
- Download extra patches from [this source](https://m11158002.github.io/moil-renesas/docs/note/renesas/rzg).
- Apply the patches:
```bash
patch -p1 < ../extra/0001-rz-common-recipes-debian-buster-glibc-update-to-v2.2.patch
patch -p1 < ../extra/0001-rz-common-linux-update-linux-kernel-to-the-latest-re.patch
patch -p1 < ../extra/0001-rz-common-gst-plugins-bad-Depending-bayer2raw-if-lay.patch
patch -p1 < ../extra/0001-gstreamer-moil-plugin-91a25cd4d16fc479aefd2aa853466770.patch
patch -p1 < ../extra/0002-fix_qtsmarthome_url-db1d20dcf1b5af60dc7034e78271ddc2.patch
```
- **Purpose**: Ensure compatibility, add features, or fix bugs in the build environment.

---

## **12. Initialize Yocto Build Environment**
```bash
TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
```
- **Purpose**: Set up the environment for building Yocto images, including paths and configurations.

---

## **13. Add Necessary Layers**
Update `build/conf/bblayers.conf`:
```bash
bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics
bitbake-layers add-layer ../meta-rz-features/meta-rz-codecs
bitbake-layers add-layer ../meta-qt5
```
- **Purpose**: Add required layers for graphics, codecs, and Qt support.

---

## **14. Add Custom Configuration**
Append to `conf/local.conf`:
```bash
QT_DEMO = "1"
IMAGE_INSTALL_append = " kernel-module-uvcvideo "
EXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "
IMAGE_INSTALL_append = " curl graphviz "
IMAGE_INSTALL_append = " gst-instruments gst-shark "
PACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "
```
- **Purpose**: Customize the image for specific use cases like Qt demos, video handling, and remote access.

---

## **15. Build Weston Image**
```bash
MACHINE=smarc-rzg2l bitbake core-image-weston
```
- **Purpose**: Build the Weston compositor image for the RZ-G2L board.

---

## **16. Prepare SD Card**
1. Insert the SD card and find its device name:
   ```bash
   sudo fdisk -l
   ```
2. Unmount any mounted partitions:
   ```bash
   sudo umount /dev/sda
   ```
3. Write the image to the SD card:
   ```bash
   sudo bmaptool copy <wic image>.wic.gz /dev/sda
   ```
- **Purpose**: Flash the built image onto an SD card for booting.

---

## **17. Boot the Board**
1. Insert the SD card into the RZ-G2L board.
2. Power on the board.
3. Monitor the boot process using a serial console with a baud rate of `115200`.

---

## **Additional Notes**
- **`rzg.tar.gz`**: The main archive containing the initial Yocto setup and base configurations.
- **VLP Files**: Essential low-level platform files for hardware compatibility and optimizations.
- **Meta Layers (`meta-rz-features`, etc.)**: Directories containing recipes and configurations for specific features like graphics and codecs.
- **Patches**: Fixes and enhancements for software components like the Linux kernel or GStreamer plugins.

---
