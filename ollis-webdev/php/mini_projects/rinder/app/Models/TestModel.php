<?php declare(strict_types=1);

require_once PATH . 'Core/Model.php';

class TestModel extends Model
{
    /**
     * A test method
     *
     * @return array
     */
    public function getTestData() : array
    {
        return array('Test1', 'Test2', 'Test3');
    }
}