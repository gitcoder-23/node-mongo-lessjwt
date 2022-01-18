const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: String,
    image: String,
    details: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model('Product', productSchema);

// const productSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//     },
//     price: {
//       type: String,
//     },
//     image: {
//       type: String,
//     },
//     details: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );
// const Products = mongoose.model('Product', productSchema);
// module.exports = Products;
