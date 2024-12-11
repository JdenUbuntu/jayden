---
sidebar_position: 2
---
# Installation and Setup of Qt Creator

## 1. Install Qt 5.6.3
Begin by installing Qt version **5.6.3** on your system. 

---

## 2. Set Up Environment Variables
Before running Qt Creator, always set the environment variables by executing the following commands:
```bash
unset LD_LIBRARY_PATH
source /opt/poky/3.1.31/environment-setup-aarch64-poky-linux
```

---

## 3. Launch Qt Creator
Navigate to the Qt Creator directory and run the application:
```bash
cd ~/Qt5.6.3/Tools/QtCreator/bin/
./qtcreator
```

---

## 4. Configure Devices
1. Go to **Tools > External > Configure > Devices**.
2. Input the IP address of the RZ/G2L device.
3. Click **Test** to verify the connection.

---

## 5. Configure Build & Run Settings
1. In Qt Creator, click on **Build & Run** from the left panel.
2. Under **Kits**, click **Add** to create a new configuration:
   - **Name**: Set the name as `RZ/G2L`.
   - Configure the following settings:

### **Paths to Configure**
- **Device**: Select the device configured in the previous step.
- **Sysroot**: 
  ```bash
  /opt/poky/3.1.31/sysroots/aarch64-poky-linux
  ```
- **C Compiler**: 
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gcc
  ```
- **C++ Compiler**: 
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-g++
  ```
- **Debugger**: 
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/aarch64-poky-linux/aarch64-poky-linux-gdb
  ```
- **Qt Version**: 
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/qt5/qmake
  ```
- **CMake**: 
  ```bash
  /opt/poky/3.1.31/sysroots/x86_64-pokysdk-linux/usr/bin/cmake
  ```

3. Alternatively, use the **Manager** tab on the right side to add and configure the settings.

---
