---
sidebar_position: 4
---
# Building Qt Projects on Ubuntu & RZG2L

## 1. Explore Examples and Existing Projects
- Open Qt Creator and click on **Examples** to browse sample projects and existing templates. 
- **Examples Directory**: The default examples can be found under:
  ```bash
  ~/Qt5.6.3/Examples/Qt-5.6.3/
  ```

---

## 2. Enable Design Mode
- Double-click on the file `MainForm.ui.qml` to open the design mode.
- **Design Mode**: In this mode, you can drag and drop UI components (e.g., buttons, labels) onto the central canvas to visually build your application.

---

## 3. Configure Build Settings
1. Click on **Projects** in the left sidebar of Qt Creator.
2. Select the **RZG2L Kit** that you configured during the setup process.

---

## 4. Build the Project
1. Click on the **Build** button located at the lower left of the Qt Creator interface.
2. The generated executables will be located in the specified build output folder.

---

## 5. Deploy to RZG2L
- Use the `scp` command to transfer the executable to the RZG2L device:
  ```bash
  scp <file> user@<rzg2l_ip>:/path/to/destination
  ```
- Log in to the RZG2L device via SSH and run the executable to verify its functionality.

---

## 6. Clone and Run the Coffee Machine Project
- Clone the Coffee Machine project by SKC:
  ```bash
  git clone https://github.com/yourskc/moil_coffee.git
  ```
- Build and run the project:
  - On **Ubuntu**: Use the configured Qt Creator environment.
  - On **RZG2L**: Transfer the project using `scp`, build it, and execute it on the device.

---

### Notes
- Ensure the **RZG2L Kit** is selected during the build process to create a compatible executable for the target device.
- If issues occur during deployment, check the IP address of the RZG2L and ensure proper permissions are set on the executable (`chmod +x <file>`).
