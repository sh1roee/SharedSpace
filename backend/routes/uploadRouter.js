import express from "express";
import cloudinary from "../middleware/cloudinary.js"
import upload from "../middleware/multer.js"

const router = express.Router();

router.post("/image", upload.single('image'), (req,res) => {
 if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Cloudinary upload failed",
      });
    }

    res.status(200).json({
      success: true,
      message: "Uploaded",
      data: result,
    });
  });
});

export default router;
