define([
    'jquery',
    'mage/url',
    'Magento_CheckoutAgreements/js/model/agreements-modal'
], function ($, url, agreementsModal) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * Handle custom agreement links content in modal display
             *
             * @param {Object} data - The data object (not used)
             * @param {Event} event - The click event
             * @return {Boolean} - Returns false to prevent default link behavior
             */
            initCustomAgreements: function(data, event) {
                var self = this;
                var agreementId = $(event.target).data('agreement-id');

                console.log('data obj:', data);
                console.log('event obj:', event);

                console.log('Custom agreement clicked, ID:', agreementId);

                // Fetch agreement content by ID.
                $.ajax({
                    url: url.build('checkout/agreement/content'),
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        'agreement_id': agreementId
                    },
                    success: function(response) {
                        if (response.content) {
                            let formattedContent;

                            // Check if content contains HTML tags.
                            if (/<[a-z][\s\S]*>/i.test(response.content)) {
                                // Content has HTML - use as-is.
                                formattedContent = response.content;
                            } else {
                                // Plain text content - apply formatting.
                                formattedContent = response.content
                                    .replace(/\n/g, '<br>')
                                    .replace(/\r/g, '')
                                    .replace(/\s\s+/g, ' &nbsp;');
                            }

                            self.modalTitle(response.checkboxText || 'Agreement');
                            self.modalContent(formattedContent);
                            self.contentHeight('auto');
                            agreementsModal.showModal();
                        }
                    }
                });
                // Prevent default link behavior.
                return false;
            }
        });
    };
});
