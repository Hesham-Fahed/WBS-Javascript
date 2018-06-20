<?php declare(strict_types=1);

require_once PATH . 'Core/Model.php';

class UserModel extends Model
{
    const GENDERS = [
        1 => 'cow',
        2 => 'bull',
        3 => 'bullock',
        4 => 'heifer'
    ];

    private function convertGender($gender) {
        if (is_int($gender)) {
            return self::GENDERS[$gender];
        }

        if (is_string($gender)) {
            return array_search($gender, self::GENDERS);
        }
    }

    public function getUserByEmail(string $email)
    {
        $email = $this->db->escape_string($email);

        $sql = "SELECT * FROM users WHERE username = '$email'";

        $result = $this->db->query($sql);

        if ($this->db->errno) {
            throw new Exception("SQL error: " . $this->db->error);
        }

        if ($result->num_rows) {
            $row = $result->fetch_assoc();
            // löscht und gibt Speichplatz wieder frei
            $result->free();
            $row['gender'] = $this->convertGender(intval($row['gender']));
            return $result->fetch_assoc();
        }
        else {
            return null;
        }
    }

    public function createUser(
        string $email,
        string $password,
        string $screenname,
        string $gender,
        int $age
    ) : bool
    {
        $email = $this->db->escape_string($email);
        $password = $this->db->escape_string($password); //NOOOOO!!! Niemals passwörter escapen
        $screenname = $this->db->escape_string($screenname);
        $gender = $this->convertGender($gender);
        $age = intval($age);

$sql = <<<QUERY
INSERT INTO users
(`username`, `password`, `screenname`, `gender`, `age`, `created_at`, `modified_at`) VALUES
('$email', '$password', '$screenname', $gender, $age, NOW(), NOW())
QUERY;

        $this->db->query($sql);
        if ($this->db->errno) {
            throw new Exception("SQL error: " . $this->db->error);
        }

        return $this->db->insert_id;
    }
}