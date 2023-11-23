const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({ 
    cloud_name: 'dgluz5whn', 
    api_key: '473775114421295', 
    api_secret: 'nNuwLAKau6t_PcZptrZ9Ve5PUpM' 
  });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'project3-ironhack',
        allowed_formats: async (req, file) => "jpg,png"
    }
})

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud