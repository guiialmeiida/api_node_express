module.exports = app => {
    const controller = app.controllers.customerWallets;

    app.route('/api/v1/customerWallets')
        .get(controller.listCustomerWallets)
        .post(controller.saveCustomerWallets);

    app.route('/api/v1/customerWallets/:customerId')
        .delete(controller.removeCustomerWallets)
        .put(controller.updateCustomerWallets);
}