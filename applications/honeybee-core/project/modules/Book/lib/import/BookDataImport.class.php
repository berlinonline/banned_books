<?php

/**
 * The BookDataImport is responseable for importing Book data to the domain's workflow.
 *
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      Import
 */
class BookDataImport extends WorkflowItemDataImport
{
    protected $idSequence;

    protected function init(IDataSource $dataSource)
    {
        parent::init($dataSource);
        $this->idSequence = new ProjectIdSequence('book');
    }

    protected function getWorkflowService()
    {
        return BookWorkflowService::getInstance();
    }

    protected function processRecord()
    {
        $record = $this->getCurrentRecord();
        $importData = $record->toArray();
        unset ($importData[BaseDataRecord::PROP_IDENT]);

        $workflowItem = $this->workflowService->findItemByImportIdentifier($record->getImportIdentifier());
        echo "Import Id: " . $record->getImportIdentifier() . PHP_EOL;
        if ($workflowItem instanceof BookWorkflowItem)
        {
            $this->updateWorkflowItem($workflowItem, $importData);
        }
        else
        {
            $workflowItem = $this->createWorkflowItem(NULL, $importData);
            $workflowItem->setExportId(
                $this->idSequence->nextId($workflowItem->getIdentifier())
            );
        }

        // remember that we have been created by the current import-identifier. 
        $this->registerImportIdentifier($workflowItem, $record->getImportIdentifier());
        $this->workflowService->storeWorkflowItem($workflowItem);
    }

    protected function registerImportIdentifier(BookWorkflowItem $workflowItem, $importIdentifier)
    {
        $previousImportIds = $workflowItem->getAttribute('import_ids', array());
        if (! in_array($importIdentifier, $previousImportIds))
        {
            $previousImportIds[] = $importIdentifier;
        }
        else
        {
            // should not happen, 
            // we are trying to re-register an import identifier, that we require to be unique.
        }
        $workflowItem->setAttribute('import_ids', $previousImportIds);
    }
}
