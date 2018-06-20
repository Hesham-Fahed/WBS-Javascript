<?php 
declare(strict_types=1);

abstract class Model
{
    /**
     * The database connection.
     *
     * @var mixed
     */
    protected $db;

    /**
     * Create a new Model instance.
     *
     * @param $db
     * @return void
     */
    public function __construct($db)
    {
        $this->db = $db;
    }
}