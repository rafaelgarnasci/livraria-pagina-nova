const { Books } = require("../database/models")
const cloudinary = require('../config/cloudinary')
const fs = require('fs')

const imageFolder = 'images/'

const BookController = {
    async create(req,res) {

        const file = req.files[0]
        const uploadPath =  await cloudinary.uploads(file.path, 'books')
        fs.unlinkSync(file.path);

        const newBook = await Books.create({   
             ...req.body,
            // forma de upload na aplicação
            // image: imageFolder + file.filename    
            image: uploadPath.imageUrl 
         })

         console.log(req.files)

        return res.status(201).json({dadosFinais: newBook})
    }
}

module.exports = BookController