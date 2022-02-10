const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Watch-e-commerce',
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});


router.post('/', upload.single('image'), (req, res) => {
  const { file } = req;
  const path = file.path;

  res.json(path);
});

// UPLOAD MULTIPLE IMAGES
// router.post('/', upload.array('image'), (req, res) => {
//   const { files } = req;
//   let paths = [];
//   files.map(file => {
//     paths.push(file.path);
//   });

//   res.json(paths);
// });

module.exports = router;
