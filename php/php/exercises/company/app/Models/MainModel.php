<?php declare(strict_types=1);

require_once PATH . 'Core/Model.php';

class MainModel extends Model
{
    
    public function getMitarbeiter($order) {

        if (!$order) {
            $order = 'name';
        }
        echo $order;
        // $order = $order . '_name';
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


//     public function createMitarbeiter(
//         string $name, 
//         string $age, 
//         string $standort,
//         string $abteilung
//     ) {
//         $name = $this->db->escape_string($name);
//         $age = intval($age);
//         $standort = $this->db->escape_string($standort);
//         $abteilung = $this->db->escape_string($abteilung);

//         $sql = <<<QUERY
// INSERT INTO mitarbeiter
// (`name`, `age`) VALUES
// ('$name', $age)
// QUERY;
        
//         return $this->db->query($sql);
//     }
}