// multer({
//   storage:'',
//   fileFilter:'',
//   limits:{
//     fileSize:'2MB'
//   }
// })

// C:\Users\danis\Desktop\AllenHouse\Batch A\ExpressDemo\uploads

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profilePic");
  },
  filename: function (req, file, cb) {
    // path.extname('A.jpg')  jpg
    const extension = path.extname(file.originalname);

    //  Pic_1001_102030204040.jpg
    // const fileName = "Pic"+ "_"+req.user._id + "_" + Date.now()  + extension;

    const fileName = "Pic" + "_" + req.user.id + extension;
    cb(null, fileName);
  },
});

const fileFilter = function (req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Only JPEG, PNG, JPG, WEBP images are allowed"));
};

const uploadProfilePic = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    filesize: 2 * 1024 * 1024, // 2MB
  },
});

module.exports = uploadProfilePic;
