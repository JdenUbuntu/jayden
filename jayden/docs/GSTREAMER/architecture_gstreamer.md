---
sidebar_position: 2
---
Here are the notes in **Markdown format**:

# 3.1 GStreamer Architecture for MOIL Implementation on Renesas RZ/G2L

![Gstreamer Flow](./images%20/gstreamer_1.1.png)
## Prerequisite
Before proceeding with the implementation, the camera parameters must be defined. These include:
- **Center Point (Cx, Cy)**: The optical center of the fisheye lens.
- **Alpha Angle**: Horizontal field of view of the camera.
- **Beta Angle**: Vertical field of view of the camera.

These parameters are essential for accurately mapping fisheye inputs to the equirectangular projection or any desired output format.


## 1. Preparation of the X, Y Mapping
The first step involves generating the X, Y mapping for MOIL image processing. This mapping is calculated based on the fisheye lens distortion model and camera parameters.

### **Calculation Process**:
- **Input**: Pixel location `(u, v)` in the fisheye image.
- **Formulas**:
  ```text
  r = sqrt((u - Cx)^2 + (v - Cy)^2)
  θ = atan2(v - Cy, u - Cx)
  x = r * cos(θ)
  y = r * sin(θ)
  ```
- Here:
  - `r` is the radial distance from the center.
  - `θ` is the angular position.
  - `x` and `y` represent the mapped coordinates for rectification or projection.

This mapping table is precomputed and stored as a reference for real-time processing.

---

## 2. Development of GStreamer in the Ubuntu Mini PC
To streamline development:
- Use **GStreamer 1.19.2** on the Ubuntu mini PC for testing and pipeline design.
- Ensure modular implementation of GStreamer plugins tailored for MOIL processing, including:
  - Fisheye correction.
  - Conversion to equirectangular projection.
  - RTSP streaming for output visualization.

### **Development Steps**:
1. **Install GStreamer**:
   ```bash
   sudo apt update
   sudo apt install gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good
   ```
2. **Build and Test Pipelines**:
   - Develop and test GStreamer pipelines using test data (images, videos) to validate the X, Y mapping integration.
3. **Ensure File Structure**:
   - Place all necessary MOIL map generation and GStreamer files in a well-structured directory for ease of conversion later.

---

## 3. Convert into Older GStreamer Version
The Renesas RZ/G2L platform uses **GStreamer 1.16.3**, which may lack certain features present in 1.19.2. After development:
- Adapt the pipelines and plugins to the older version while ensuring compatibility.
- Identify and replace unsupported elements in the GStreamer pipeline with alternatives available in 1.16.3.

### **Steps to Downgrade**:
1. Verify which plugins or elements require changes:
   ```bash
   gst-inspect-1.0
   ```
2. Modify the pipeline code to use equivalent functionality in 1.16.3.
3. Test the adjusted pipeline on the PC with GStreamer 1.16.3 installed.

---

## 4. Yocto Integration
After ensuring compatibility with GStreamer 1.16.3, integrate the adjusted pipeline into the Yocto build system for the Renesas RZ/G2L platform.

### **Steps**:
1. **Prepare Yocto Layer**:
   - Include the GStreamer 1.16.3 recipes in the Yocto meta-layer.
2. **Embed Pipeline Code**:
   - Add MOIL processing scripts and precomputed X, Y mapping files to the Yocto build.
3. **Build Yocto**:
   ```bash
   bitbake core-image-qt
   ```

### **Post-Build Testing**:
- Deploy the built image to the RZ/G2L board.
- Test the pipeline's performance with real-time fisheye inputs.
- Use RTSP streaming to visualize the corrected output on the receiver PC with Pannellum.

---

## Summary
This architecture ensures:
- **Accurate fisheye correction** using MOIL X, Y mappings.
- **Efficient GStreamer pipelines** for image processing.
- Compatibility with **embedded hardware** like Renesas RZ/G2L.
- **Seamless RTSP streaming** for output visualization on external devices.
```
