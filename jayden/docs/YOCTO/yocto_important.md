---
sidebar_position: 3
---

# 2.3 Yocto Build Project Notes


## IMPORTANT FILES/FOLDERS IN YOCTO BUILD
### **Deployment of Output Files**
- **Location**:  
  `<work dir>/build/tmp/deploy/images/smarc-rzg2l/`

- **Files**:
  - `*.wic.bmap`: Binary map file used by `bmaptool` to efficiently write the disk image to an SD card.
  - `*.wic.gz`: Compressed disk image containing the final Linux system.

- **Importance**:
  - These files represent the final build output and are essential for deploying the system to the RZ/G2L board.
  - The `wic.gz` file is the image written to the SD card, while the `wic.bmap` file speeds up the process by skipping unnecessary blocks.

---

### **Configuration Directory**
- **Location**:  
  `<work dir>/build/conf/`

- **Files**:
  - `bblayers.conf`: Lists the layers included in the build.
  - `local.conf`: Contains build-specific settings like the machine type, image type, and additional packages.

- **Importance**:
  - **`bblayers.conf`**: Used to add or remove Yocto layers, such as `meta-qt5` for Qt applications.
  - **`local.conf`**: Customizes build settings, enabling features like SSH, additional packages, or specific image configurations.

---

### **Recipes and Build Artifacts**
- **Location**:  
  `<work dir>/build/tmp/work/aarch64-poky-linux/`

- **Contents**:
  - Intermediate build outputs, logs, and artifacts for recipes.
  - Temporary files and debugging data for software components.

- **Importance**:
  - Critical for troubleshooting build failures. If a recipe fails, logs in this directory can help diagnose the issue.

---

### **Root Filesystem of the Build**
- **Location**:  
  `<work dir>/build/tmp/work/smarc_rzg2l-poky-linux/core-image-qt/1.0-r0/rootfs/`

- **Contents**:
  - Represents the root filesystem (`/`) included in the final image.
  - Contains binaries, libraries, and configuration files.

- **Importance**:
  - Enables verification of built packages before writing the image to an SD card or booting the system.
  - Useful for quickly inspecting the Linux image's contents.

---

### **BitBake Recipes (`*.bb` Files)**
- **Purpose**:
  - Define steps, dependencies, and outputs for building software components or images.

- **Importance**:
  - Recipes are the core of the Yocto build system, instructing BitBake on how to fetch, compile, and package software.
  - Example: The `core-image-qt.bb` recipe specifies which components to include in a Qt-based image.

---
## IMPORTANT COMMANDS IN YOCTO BUILD

### **TEMPLATECONF Command**
- **Command**:
  ```bash
  TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
  ```

- **Importance**:
  - Sets up the Yocto build environment by loading the necessary templates and configurations.
  - Must be run each time the build environment is initialized.

---

### **SCP for File Transfers**
- **Command**:
  ```bash
  scp /path/to/local/file username@remote_host:/path/to/remote/destination
  ```

- **Importance**:
  - Simplifies transferring files (e.g., images, logs) between the build host and the target device or remote server.
  - Commonly used to upload the final image for deployment.

---
