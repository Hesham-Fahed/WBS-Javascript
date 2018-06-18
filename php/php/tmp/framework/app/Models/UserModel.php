<?php declare(strict_types=1);

require_once PATH  . 'Core/Model.php';

class UserModel extends Model
{

    public function getUserByEmail(string $email) {

        ////////////////////////////////////////////////
        ////////////////////////////////////////////////
        // SUPERWICHTIG: Escape-String
        ////////////////////////////////////////////////
        $email = $this->db->escape_string($email);
        $sql = "SELECT * FROM users WHERE username = '$email'";
        $result = $this->db->query($sql);

        if ($this->db->errno) {
            throw new Exception("SQL error: " . $this->db->errno);
        }

        if ($result) {
            return $user = $result->fetch_assoc();
        } else {
            return null;
        }
    }

    public function createUser(
        string $email, 
        string $password, 
        string $screenname, 
        int $gender, 
        int $age
    ) :bool {
        
    }
    

}