<?php
namespace VendorX\CheckoutAgreements\Controller\Agreement;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Magento\Framework\Controller\Result\JsonFactory;
use Magento\CheckoutAgreements\Model\AgreementFactory;

class Content extends Action
{
    protected $resultJsonFactory;
    protected $agreementFactory;

    public function __construct(
        Context $context,
        JsonFactory $resultJsonFactory,
        AgreementFactory $agreementFactory
    ) {
        $this->resultJsonFactory = $resultJsonFactory;
        $this->agreementFactory = $agreementFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        $agreementId = $this->getRequest()->getParam('agreement_id');
        $result = $this->resultJsonFactory->create();

        if (!$agreementId) {
            return $result->setData(['content' => '']);
        }

        $agreement = $this->agreementFactory->create()->load($agreementId);

        if (!$agreement->getId()) {
            return $result->setData(['content' => '']);
        }

        return $result->setData([
            'content' => $agreement->getContent(),
            'checkboxText' => $agreement->getCheckboxText()
        ]);
    }
}
