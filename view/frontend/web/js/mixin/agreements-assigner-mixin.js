define([
    'jquery'
], function ($) {
    'use strict';

    return function (originalAssigner) {
        return function (paymentData) {
            // Call the original assigner first to gather standard agreement IDs.
            originalAssigner(paymentData);

            var customAgreementLinks = $('#custom-agreements-text .action-show-agreement');
            var customAgreementIds = [];

            // Collect all agreement IDs from custom agreement links.
            if (customAgreementLinks.length) {
                customAgreementLinks.each(function() {
                    var agreementId = $(this).data('agreement-id');
                    if (agreementId && customAgreementIds.indexOf(agreementId) === -1) {
                        customAgreementIds.push(agreementId);
                    }
                });
            }

            // Add each custom link agreement ID to the existing agreements array.
            if (customAgreementIds.length) {
                // Initialize extension_attributes if needed.
                if (paymentData['extension_attributes'] === undefined) {
                    paymentData['extension_attributes'] = {};
                }

                // Initialize agreement_ids array.
                if (!paymentData['extension_attributes']['agreement_ids']) {
                    paymentData['extension_attributes']['agreement_ids'] = [];
                }

                customAgreementIds.forEach(function(id) {
                    if (paymentData['extension_attributes']['agreement_ids'].indexOf(id) === -1) {
                        paymentData['extension_attributes']['agreement_ids'].push(id);
                    }
                });
            }
        };
    };
});
