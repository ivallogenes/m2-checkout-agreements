var config = {
    config: {
        mixins: {
            'Magento_CheckoutAgreements/js/view/checkout-agreements': {
                'VendorX_CheckoutAgreements/js/mixin/checkout-agreements-mixin': true
            },
            'Magento_CheckoutAgreements/js/model/agreements-assigner': {
                'VendorX_CheckoutAgreements/js/mixin/agreements-assigner-mixin': true
            }
        }
    }
};
