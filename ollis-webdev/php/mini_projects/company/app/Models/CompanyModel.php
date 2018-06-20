<?php
declare(strict_types=1);

require_once PATH . 'Core/Db.php';
require_once PATH . 'Core/Model.php';

class CompanyModel extends Model
{
    public function addLocation(string $name) : bool
    {
        $name = $this->db->escape_string($name);
        $sql = "INSERT INTO `locations` (`name`) VALUES ('$name')";
        return $this->db->query($sql);
    }

    public function deleteLocation(int $id) : bool
    {
        // TODO: CHECK if you can delete other user's posts
        $sql = "DELETE FROM `locations` WHERE `id`=$id";
        return $this->db->query($sql);
    }

    public function getLocations() : array
    {
        $sql = "SELECT * FROM `locations` ORDER BY `name` ASC";
        $result = $this->db->query($sql);
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            $result->free();
        }
        return $data ?? [];
    }

    public function addDepartment(string $name, int $locationId) : bool
    {
        $name = $this->db->escape_string($name);
        $sql = "INSERT INTO `departments` (`name`, `location_id`) VALUES ('$name', $locationId)";
        return $this->db->query($sql);
    }

    public function deleteDepartment(int $id) : bool
    {
        $sql = "DELETE FROM `departments` WHERE `id`=$id";
        return $this->db->query($sql);
    }

    public function getDepartments() : array
    {
        $sql = "SELECT D.*, L.name AS location FROM `departments` D JOIN `locations` L ON D.`location_id`=L.id ORDER BY D.`name`,L.`name` ASC";
        $result = $this->db->query($sql);
        if ($result) {
            while ($ds = $result->fetch_assoc()) {
                $data[] = $ds;
            }
            $result->free();
        }
        return $data ?? [];
    }

    public function addEmployee(string $name, int $age, int $departmentId) : bool
    {
        $name = $this->db->escape_string($name);
        $sql = "INSERT INTO `employees` (`name`, `age`, `dept_id`) VALUES ('$name', $age, $departmentId)";
        return $this->db->query($sql);
    }

    public function deleteEmployee(int $id) : bool
    {
        $sql = "DELETE FROM `employees` WHERE `id`=$id";
        return $this->db->query($sql);        
    }

    public function moveEmployee(int $employeeId, int $departmentId) : bool
    {
        $sql = "UPDATE `employees` SET `dept_id`=$departmentId WHERE `id`=$employeeId";
        return $this->db->query($sql);
    }

    public function getEmployees(string $orderBy = null) : array
    {
        $orderBy = ($orderBy) ? "ORDER BY " . $orderBy . " ASC" : "";
        $sql = <<<QUERY
SELECT E.*, L.`name` AS location, D.`name` AS department
FROM `employees` E
JOIN `departments` D ON E.`dept_id`=D.`id`
JOIN `locations` L ON D.`location_id`=L.`id`
$orderBy
QUERY;

        $result = $this->db->query($sql);
        if ($result) {
            while ($ds = $result->fetch_assoc()) {
                $data[] = $ds;
            }
            $result->free();
        }
        return $data ?? [];
    }

    public function getEmployeesByAge(int $minAge, int $maxAge) : array
    {
        $sql = "SELECT * FROM `employees` WHERE `age` > $minAge AND `age` < $maxAge ORDER BY `name` ASC";

        $result = $this->db->query($sql);
        if ($result) {
            while ($ds = $result->fetch_assoc) {
                $data[] = $ds;
            }
        $result->free();
        }
        return $data ?? [];
    }
}


