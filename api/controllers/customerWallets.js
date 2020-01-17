const uuidv4 = require('uuid/v4');

module.exports = app => {
    const customerWalletsDB = app.data.customerWallets;
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = customerWalletsDB;

    controller.listCustomerWallets = (req,res) => res.status(200).json(customerWalletsDB);

    controller.saveCustomerWallets = (req, res) => {
        customerWalletsMock.data.push({
            id: uuidv4(),
            parentId: uuidv4(),
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphohe: req.body.cellphohe,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
        });

        res.status(201).json(customerWalletsMock);
    }

    controller.removeCustomerWallets = (req, res) => {
        const {
            customerId,
        } = req.params;

        const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);
    
        if(foundCustomerIndex === -1){
            res.status(404).json({
                message: 'Cliente não encontrado na base.',
                sucess: false,
                customerWallets: customerWalletsMock,
            });
        }else{
            customerWalletsMock.data.splice(foundCustomerIndex, 1);
            res.status(200).json({
                message: 'Cliente encontrado e deletado com sucesso!',
                sucess: true,
                customerWallets: customerWalletsMock,
            })
        }
    }
    return controller;
}