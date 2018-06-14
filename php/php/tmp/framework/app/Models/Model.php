<?php declare(strict_types=1);

class Model {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    } 

    public function getCows() {
        $sql = "SELECT * FROM cows";
        $result = $this->db->query($sql);

        $cows = [];
        while ($row = $result->fetch_assoc()) {
            $cows[] = $row;
        }

        return $cows;
    }
}

