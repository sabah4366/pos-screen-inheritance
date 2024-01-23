odoo.define('pos_screen.CustomPaymentScreen', function (require) {
    'use strict';

    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');
    const models = require('point_of_sale.models')

    const CustomPaymentScreen = PaymentScreen => class extends PaymentScreen{
        setup() {
            super.setup();
             const selectedOrder = this.env.pos.get_order();


        };


    };

    Registries.Component.extend(PaymentScreen,CustomPaymentScreen);
    return PaymentScreen;
});

