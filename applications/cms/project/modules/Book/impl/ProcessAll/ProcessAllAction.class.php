<?php

use Honeybee\Core\Dat0r\DocumentCollection;

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      ProcessAll
 */
class Book_ProcessAllAction extends BookBaseAction
{
    /**
     * IResult succesfull state: the plugin has successfully been processed.
     */
    const STATE_OK = 1;

    public function executeWrite(AgaviRequestDataHolder $parameters)
    {
        $user = $this->getContext()->getUser();
        $user->setAuthenticated(true);
        $user->setAttribute('acl_role', 'honeybee-editor');

        $step = $parameters->getParameter('step');
        $gate = $parameters->getParameter('gate', 'promote');
        $chunk_size = $parameters->getParameter('chunk_size', 150);

        $module = $this->getModule();
        $workflow_manager = $module->getWorkflowManager();
        $document_service = $module->getService();
        $module_prefix = $this->getModule()->getOption('prefix');
        
        // @todo check if are existent gate and step

        $doc_count = 0;
        $fail_count = 0;
        $op_count = 0;
        $container = $this->getContainer();

        $process_document = function ($document) use (
            $workflow_manager,
            $document_service,
            $gate,
            $step,
            $container,
            &$doc_count,
            &$fail_count,
            &$op_count
        ) {
            if ($document->getWorkflowTicket()->first()->getWorkflowStep() !== $step) {
                return;
            }
            $doc_count++;
            try {
                $result = $workflow_manager->executeWorkflowFor($document, $gate, $container);
                $document_service->save($document);

                echo sprintf(
                    PHP_EOL . "%s - Success: %s document '%s' (new step: %s)",
                    $op_count,
                    $gate,
                    $document->getTitle(),
                    $document->getWorkflowTicket()->first()->getWorkflowStep()
                );
            } catch (Exception $e) {
                echo sprintf(PHP_EOL . "%s - Error: %s document '%s'", $op_count, $gate, $document->getTitle());
                error_log(
                    sprintf(
                        'Error processing the document (document step: %s)',
                        $document->getWorkflowTicket()->first()->getWorkflowStep()
                    )
                );
                $fail_count++;
            }
            $op_count++;
        };
        $document_service->walkStorageDocuments($chunk_size, $process_document);

        $this->setAttribute('success_count', $doc_count);
        $this->setAttribute('fail_count', $fail_count);

        return 'Success';
    }

    public function isSecure()
    {
        return FALSE;
    }
}
