<?php declare(strict_types=1);

require_once PATH  . 'Core/Model.php';

class TestModel extends Model
{

    public function getCows()
    {
        $sql = "SELECT * FROM cows";
        $result = $this->db->query($sql);

        $cows = [];
        while ($row = $result->fetch_assoc()) {
            $cows[] = $row;
        }

        return $cows;
    }

}