# Magento 2 Custom Checkout Agreements

This module provides the ability to add custom checkout agreements text.

- Add free-form text with links that trigger modals with your admin configured checkout agreements content without the need to use the standard layout with checkboxes.
- Automatically accept agreements at checkout without needing to display checkboxes.
- Manage agreements content from admin > Stores > Terms and Conditions

**Compatible with Magento Open-Source and Adobe Commerce, versions 2.4+.**

Works with the coupled front-end of the monolith application.

### Ref. Documentation

Magento PHP application CheckoutAgreements module: [https://developer.adobe.com/commerce/php/module-reference/module-checkout-agreements/](https://developer.adobe.com/commerce/php/module-reference/module-checkout-agreements/)

Magento Frontend Developer Guide: [https://developer.adobe.com/commerce/frontend-core/guide/](https://developer.adobe.com/commerce/php/module-reference/module-checkout-agreements/)

## How To Use

1. Clone the module repository in your app/code/Vendor/CheckoutAgreements folder:
    $ cd app/code/Vendor

    $ mkdir CheckoutAgreements && cd CheckoutAgreements

    $ git clone git@github.com:ivallogenes/m2-checkout-agreements.git .

2. Rename all instances of VendorX with your vendor name across module files.
2. Override the default checkout agreements template in your theme:
> www/app/design/frontend/Vendor/default/Magento_CheckoutAgreements/web/template/checkout/checkout-agreements.html

3. Add the custom text under or above the default agreements:
```html
<div id="custom-agreements-text">
    <p>
        <span translate="'By proceeding with this purchase, you certainly need to agree to our'"></span>
        <a href="#" class="action-show-agreement" data-agreement-id="1" data-bind="click: initCustomAgreements, i18n: 'Terms of Service'"></a>
        <span translate="'and'"></span>
        <a href="#" class="action-show-agreement" data-agreement-id="2" data-bind="click: initCustomAgreements, i18n: 'Privacy Policy'"></a>,
        <span translate="'whether you will read them or not, since agreement is absolutely required.'"></span>
        <span translate="'For information about how we process your data, please see our'"></span>
        <a href="#" class="action-show-agreement" data-agreement-id="3" data-bind="click: initCustomAgreements, i18n: 'Data Processing Agreement'"></a>.
        <span translate="'That will be all now. Have a good day!'"></span>
    </p>
</div>
```
4. Adjust the values in the data-agreement-id attribute for each link to match the agreement ID from admin > Stores > Terms and Conditions

5. The configured agreements need to be in "Disabled" state. These agreements will be accepted by default. When the user completes checkout, all agreement IDs added to the data-agreement-id link attributes inside #custom-agreements-text will be added to the extension_attributes.agreement_ids array and sent with the paymentData object as accepted agreements.

### License

Free use and open source code repository.
Use as-is or extend and customize at your own needs.
See UNLICENSE.txt

~ Let there be peace and harmony on Earth! ~
