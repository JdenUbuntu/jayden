---
sidebar_position: 3
---
Here’s a breakdown of the **working principle of the remap operation** under the given conditions, formatted in **Markdown**:

# Working Principle of the Remap Operation on Renesas RZ/G2L

The **remap operation** is used to correct fisheye distortion and project the input image (from a fisheye source) into a different format (e.g., equirectangular projection). On the Renesas RZ/G2L, this is optimized by **precomputing mapping tables** and performing only the remap operation at runtime. Below is a detailed breakdown of the working principle.

---

## **1. Input Sources**
The system receives input from a fisheye video source, which could be:
- **Image files**
- **Video files**
- **Live camera feed**

The fisheye source contains distorted images due to the wide-angle lens. The goal is to remap the distorted pixels to a corrected format.

---

## **2. Pre-Computed Mapping Tables**
Mapping tables contain the pre-calculated coordinates `(X, Y)` for each pixel in the corrected image:
- **Purpose**:
  - Map each pixel in the output frame to its corresponding position in the input fisheye frame.
- **Generated During Development**:
  - Based on camera parameters (e.g., optical center, field of view, lens distortion characteristics).
  - Stored in a binary file or arrays for runtime use.

---

## **3. Runtime Remap Process**
At runtime, the remap operation applies the precomputed mappings to the input frames to produce the corrected output.

### **Steps**:
1. **Load Mapping Tables**:
   - Mapping tables are loaded into memory during application startup.

2. **For Each Input Frame**:
   - **Pixel Remapping**:
     - For each pixel `(u, v)` in the output image:
       - Look up the corresponding `(x, y)` coordinates from the mapping table.
       - Retrieve the pixel value from the input fisheye frame at `(x, y)`.
     - Interpolate pixel values if the mapped coordinates `(x, y)` are non-integer.

3. **Output Corrected Frame**:
   - The output frame is constructed pixel by pixel using the remapped values.

---

## **4. Hardware Acceleration on Renesas RZ/G2L**
The Renesas RZ/G2L platform uses hardware acceleration to enhance the performance of the remap operation:
- **Efficient Memory Access**:
  - Mapping tables are stored in fast memory for quick lookups.
- **Multimedia Hardware Support**:
  - The RZ/G2L's graphics and multimedia capabilities accelerate pixel transformations and interpolation.

---

## **5. GStreamer Pipeline for Remap**
The remap process is integrated into the GStreamer pipeline for real-time video processing.

### **Pipeline Example**:
```bash
gst-launch-1.0 filesrc location=video.mp4 ! decodebin ! videoconvert ! remap mapping-table=precomputed_map.bin ! videoconvert ! autovideosink
```
- **Key Elements**:
  - `remap`: Applies the mapping table to the input frames.
  - `mapping-table=precomputed_map.bin`: Specifies the precomputed mapping table file.

---

## **6. Advantages of Using Pre-Computed Remap**
1. **Real-Time Performance**:
   - The pre-computation of mappings removes the need for runtime distortion calculations.
2. **Reduced Computational Load**:
   - Only pixel lookups and interpolation are performed during runtime.
3. **Accuracy**:
   - Precomputed tables ensure consistent transformation for every frame.
4. **Hardware Efficiency**:
   - Fully utilizes the RZ/G2L's hardware acceleration capabilities.

---
