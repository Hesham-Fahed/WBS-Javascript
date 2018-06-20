<?php declare(strict_types=1);

abstract class Model
{
    protected $db;

    public function __construct($db)
    {
        $this->db = $db;
    }
}