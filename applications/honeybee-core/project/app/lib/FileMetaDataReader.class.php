<?php

use Honeybee\Core\Config\IConfig;
use Symfony\Component\Process\Process;

class FileMetaDataReader
{
    const AS_JSON = 'json';

    const AS_TEXT = 'text';

    const AS_XML = 'xml';

    const AS_ARRAY = 'array';

    protected $config;

    public function __construct(IConfig $config)
    {
        $this->config = $config;
    }

    public function read($input_file, $output_type = self::AS_ARRAY, array $property_names = array())
    {
        if (!is_readable($input_file)) {
            throw new \Exception("Unable to read given input_file: " . $input_file);
        }

        $meta_data_output = array();
        switch ($output_type) {
            case self::AS_JSON:
            case self::AS_TEXT:
            case self::AS_XML:
                $meta_data_output = $this->exec($input_file, $output_type);
                break;
            case self::AS_ARRAY:
                $meta_data_output = json_decode($this->exec($input_file, self::AS_JSON), true);
                break;
            default:
                throw new \Exception(
                    sprintf(
                        "Unsupported output type '%s' demanded. Supported are %s ",
                        $output_type,
                        implode(', ', array(self::AS_JSON, self::AS_XML, self::AS_TEXT, self::AS_ARRAY))
                    )
                );
                break;
        }

        return $meta_data_output;
    }

    protected function exec($input_file, $output_type, $tika_options = array())
    {
        // @todo support more options via $tika_options
        $command = sprintf(
            'java -jar %s --%s %s',
            $this->config->get('apache_tika_jarfile'),
            $output_type,
            $input_file
        );
        $process = new Process($command);

        $process->run();

        if (!$process->isSuccessful()) {
            throw new \RuntimeException($process->getErrorOutput());
        }

        return $process->getOutput();
    }
}
