'use strict';

module.exports = function(app) {
    let todoList = require('./../controller/Product');
    let todoListUser = require('./../controller/User');

    app.route('/')
        .get(todoList.index);

    app.route('/products')
        .get(todoList.product);

    app.route('/products')
        .post(todoListUser.verifyToken, todoList.createProduct);

    app.route('/products')
        .put(todoListUser.verifyToken, todoList.updateProduct);
    
    app.route('/products')
        .delete(todoListUser.verifyToken, todoList.deleteProduct);
    
    // Add or Reduce Qty in Product
    app.route('/products')
        .patch(todoListUser.verifyToken, todoList.AORQty);
};