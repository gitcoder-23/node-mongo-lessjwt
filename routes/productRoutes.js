const router = require('express').Router();
// All controllers here
const productController = require('../controllers/productContraller');

router.get('/', productController.allProducts);
router.post('/', productController.addNewProduct);
router.get('/:productId', productController.getSingleProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
