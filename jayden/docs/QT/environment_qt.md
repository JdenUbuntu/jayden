---
sidebar_position: 3
---
# Installation and Setup of Qt Creator

## Install Qt 5.6.3
Begin by installing Qt version **5.6.3** on your system. This version includes the tools necessary to develop Qt applications.

## Set Up Environment Variables
Before running Qt Creator, set the required environment variables to configure your build environment. This ensures the system uses the correct libraries and compilers for cross-compilation:

- **`LD_LIBRARY_PATH`**: This variable is cleared with `unset` to prevent conflicts with system libraries.
- **`environment-setup-aarch64-poky-linux`**: This script sets up the environment for cross-compiling applications for the RZ/G2L platform. It configures paths for the toolchain, sysroot, and other dependencies.

Run the following commands:
```bash
unset LD_LIBRARY_PATH
source /opt/poky/3.1.31/environment-setup-aarch64-poky-linux
```

---

## Launch Qt Creator
Navigate to the Qt Creator directory and run the application:
```bash
cd ~/Qt5.6.3/Tools/QtCreator/bin/
./qtcreator
```
- **`~/Qt5.6.3/Tools/QtCreator/bin/`**: This is the directory containing the Qt Creator executable (`qtcreator`). Adjust the path if you installed Qt in a different location.

---

## Configure Devices
1. Go to **Tools > External > Configure > Devices**.
2. Input the IP address of the RZ/G2L device. This is the network address of the target board running the application.
3. Click **Test** to verify the connection.

---

## Configure Build & Run Settings
### Access Build & Run
1. In Qt Creator, click on **Build & Run** from the left panel.
2. Under **Kits**, click **Add** to create a new configuration.

### Configure Paths and Tools
#### Key Configuration Parameters:
- **Device**: Select the device configured in the previous step. This connects Qt Creator to the target board for deploying and running applications.
- **Sysroot**:
  ```bash
  /opt/poky/3.1.31/sysroots/aarch64-poky-linux
  ```
  **Explanation**: The `sysroot` is a directory containing the libraries and headers of the target system. It acts as a "chroot" environment for cross-compiling.

- **C Compiler**:
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gcc
  ```
  **Explanation**: This is the GNU C compiler for the ARM64 (aarch64) architecture. It compiles C programs for the RZ/G2L platform.

- **C++ Compiler**:
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-g++
  ```
  **Explanation**: This is the GNU C++ compiler for the ARM64 architecture, used to compile C++ programs.

- **Debugger**:
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gdb
  ```
  **Explanation**: This is the GNU debugger for ARM64, allowing you to debug applications running on the RZ/G2L platform.

- **Qt Version**:
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/qt5/qmake
  ```
  **Explanation**: The `qmake` tool is used to generate Makefiles for building Qt applications. This version of `qmake` is tailored for cross-compiling to the RZ/G2L platform.

- **CMake**:
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/cmake
  ```
  **Explanation**: `CMake` is a build-system generator, used for managing project builds. This version is preconfigured for cross-compiling to the RZ/G2L.

### Notes
- The `/opt/poky/3.1.31/` directory is created during the Yocto SDK installation. It contains all necessary tools, libraries, and configurations for cross-compilation.
---

### Alternative Configuration via Manager
Instead of adding configurations step-by-step, you can use the **Manager** tab on the right side of Qt Creator:
1. Click **Add** and set the paths manually.
2. Use the tabs at the top to configure:
   - **Qt Version**
   - **Compiler**
   - **Debugger**

---





