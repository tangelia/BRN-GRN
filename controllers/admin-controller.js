const Product = require('../models/product');
const User  = require('../models/user');




module.exports = {
    getAdminUsers(req, res) {
        User.find().exec((err, users) => {
            if(err) console.log('Find Admin Users Error', err);
            res.status(200).json({users});
        })
    }, 
    createProduct(req, res) {
        const { title, img, price, company,info } = req.body;
        let newProduct = new Product({
            title,
            img,
            price,
            company,
            info
        });
        newProduct.save();
        res.status(200).json({product: newProduct});
    }, 
    updateProduct(req, res) {
        const { id } = req.params;
        const { title, img, price, company, info } = req.body;
        Product.findById(id).exec((err, product) => {
            if(err) console.log('Updated Product', err);
            product.title = title;
            product.img = img;
            product.price = price; 
            product.company = company;
            product.info = info;
            product.save();
            res.status(200).json({product});
        })
    }, 
    deleteProduct(req, res) {
        const { id } = req.params;
        Product.deleteOne({_id: id}).exec((err, product) => {
            if(err) console.log('Delete One Error', err)
            res.status(200).json({product});
        });
    }
}