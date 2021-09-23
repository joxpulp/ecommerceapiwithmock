"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = require("../controllers/products");
var router = express_1.Router();
router.get('/listar/:id?', products_1.productController.getProducts);
router.get('/vista-test', products_1.productController.getProductsTest);
router.post('/agregar', products_1.productController.addProduct);
router.put('/actualizar/:id', products_1.productController.updateProduct);
router.delete('/borrar/:id', products_1.productController.deleteProduct);
exports.default = router;
