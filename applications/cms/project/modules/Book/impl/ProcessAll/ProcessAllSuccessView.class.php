<?php

/**
 * @copyright       BerlinOnline Stadtportal GmbH & Co. KG
 * @package         Book
 * @subpackage      ProcessAll
 */
class Book_ProcessAll_ProcessAllSuccessView extends BookBaseView
{
    public function executeConsole(\AgaviRequestDataHolder $request_data)
    {   
        $count = $this->getAttribute('success_count');
        $fail = $this->getAttribute('fail_count');
        if ($count > 0) {
            $content = sprintf(PHP_EOL . 'Finished processing %s %s documents. (failed: %s/%s)',
                $count,
                $this->getAttribute('module'), 
                $fail, $count
            );
        } else {
            $content = 'No document found for the specified step.';
        }
        $this->getResponse()->setContent(PHP_EOL . $content . PHP_EOL);
    }
}
