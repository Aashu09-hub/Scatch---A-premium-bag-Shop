// const express = require('express');
// const router = express.Router();
// const upload = require("../config/multer-config");
// const productModel = require("../models/product-model")

// router.post("/create",upload.single("image"),async function (req, res){
// try{
//     let { name, price, discount, bgcolor, panecolor,textcolor} =
//     req.body;

//     let product = await productModel.create({
//         image: req.file.buffer,
//         name,
//         price,
//         discount,
//         bgcolor,
//         panecolor,
//         textcolor,
//     });

//     req.flash("success","Product created successfully.");
//     res.redirect("/owners/admin");
// }catch(err){
//     res.send(err.message);
// }
//     res.send(product);
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panecolor, textcolor } = req.body;

    const product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panecolor,
      textcolor,
    });

    req.flash("success", "Product created successfully.");
    res.redirect("/owners/admin");
    // OR: res.send(product); if you're building an API instead of redirecting
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
