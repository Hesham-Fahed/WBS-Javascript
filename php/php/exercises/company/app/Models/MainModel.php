<?php declare(strict_types=1);

require_once PATH . 'Core/Model.php';
require_once PATH . 'Core/Request.php';

class MainModel extends Model
{
    
    public function getMitarbeiter($order) {

        if (!$order) {
            $order = 'name';
        }

        $sql = <<<QUERY
SELECT * FROM mitarbeiter ORDER BY `$order`
QUERY;
        
        $result = $this->db->query($sql);
        $everyEmployee = [];
        while ($row = $result->fetch_assoc()) {
            $everyEmployee[] = $row; 
        }
    
        return $everyEmployee;
    }
    

    public function getStandorte() {
        
        $sql = <<<QUERY
SELECT name FROM standorte
QUERY;
        
        $result = $this->db->query($sql);
        $standorte = [];
        while ($row = $result->fetch_assoc()) {
            $standorte[] = $row; 
        }

        return $standorte;

    }
    

    public function getAbteilungen() {

        $sql = <<<QUERY
SELECT name FROM abteilungen
QUERY;

        $result = $this->db->query($sql);
        $abteilungen = [];
        while ($row = $result->fetch_assoc()) {
            $abteilungen[] = $row;
        }

        return $abteilungen;
    } 


    public function createMitarbeiter(
        string $name, 
        string $age, 
        string $abteilung,
        string $standort
    ) {

        $name1 = $this->db->escape_string($name);
        $age = intval($age);
        // $standort1 = $this->db->escape_string($standort);
        // $abteilung1 = $this->db->escape_string($abteilung);

        $sql = <<<QUERY
INSERT INTO `mitarbeiter` (`id`, `name`, `age`, `abteilung_name`, `standort_name`) VALUES (NULL, '$name', $age, '$abteilung', '$standort');
QUERY;

        return $this->db->query($sql);
    }


    public function createStandort($standort) {
        $standort = $this->db->escape_string($standort);
        $sql = <<<QUERY
INSERT INTO `standorte` (`name`) VALUES ('$standort');
QUERY;

        return $this->db->query($sql);
    }


    public function destroy($id, $objekt, $row) {
        $sql = "DELETE FROM `$objekt` WHERE `$row` = $id";
        return $this->db->query($sql);
    }


    public function getUserByName($name) {
        $sql = "SELECT * FROM `mitarbeiter` WHERE `name`='$name'";
        $result = $this->db->query($sql);
        while ($row = $result->fetch_assoc()) {
            $mitarbeiter[] = $row; 
        }
    
        return $mitarbeiter;
    }

    public function move($id, $standorte) {
        $sql = "UPDATE `mitarbeiter` SET `standort_name` = '$standorte' WHERE `mitarbeiter`.`id` = $id";
        return $this->db->query($sql);
    }

}