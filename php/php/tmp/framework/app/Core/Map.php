<?php declare(strict_types=1);

class Map
{
    private $map = [];
    private $writable;

    public function __construct(array &$baseMap, bool $writable = false)
    {
        $this->map =& $baseMap;
        $this->writable = $writable;
    }

    public function has(string $key) : bool {
        return isset($this->map[$key]);
    }

    public function get(string $key) {
        return $this->map[$key] ?? null;
    }

    public function getInt(string $key) {
        if (!isset($this->map[$key])) {
            return null;
        }
        return (int) $this->map[$key];
    }

    public function getFloat(string $key) {
        if (!isset($this->map[$key])) {
            return null;
        }
        return (float) $this->map[$key];
    }

    public function getBool(string $key) {
        if (!isset($this->map[$key])) {
            return null;
        }
        return (bool) $this->map[$key];
    }

    public function getString(string $key, bool $filter = true) {
        if (!isset($this->map[$key])) {
            return null;
        }
        $value = (string) $this->map[$key];
        return ($filter) ? addslashes($value) : $value;
    }

    public function set(string $key, $value) {
        if (!$this->writable) {
            throw new Exception("This Map is read only.");
        }
        $this->map[$key] = $value;
    }

    public function delete(string $key) {
        if (!$this->writable) {
            throw new Exception("This Map is read only.");
        }
        if (isset($this->map[$key])) {
            unset($this->map[$key]);
        }
    }
}

// session_start();
// $_SESSION['user'] = "Ollo";

// $s = new Map($_SESSION, true);
// $s->set('test', 'blubb');
// $s->delete('test');

// var_dump($_SESSION);

// ===================================

// Return type hints
// copy on write -> Session

// $a = [
//     'username' => 'ollo',
//     'user_id' => '42',
//     'logged_in' => '1'
// ];
// $params = new Map($a, true);

// $params->get('username');
// $params->has('logged_in');
// $params->getBool('logged_in');
// $params->set('username', 22);
// $params->getString('username');
// $params->set('title', 'My new title');
// $params->get('title');
// $params->set('qty', 12);
// $params->get('qty');
// $params->set('number', "42");
// $params->getInt('number');
// $params->delete('username');
// $params->delete('title');

// var_dump($params);