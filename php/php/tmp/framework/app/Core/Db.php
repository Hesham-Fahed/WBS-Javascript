<?php declare(strict_types=1);

abstract class Db
{
    private static $instance = null;

    private static function connect()
    {
        $db = new mysqli('localhost', 'root', '', 'cheese', 3306);

        if (!$db) {
            throw new Exception('DB Connection error: ' . $db->error);
        }

        $db->set_charset('utf8');

        return $db;
    }

    public static function getInstance()
    {
        // if DB connection nicht vorhanden
        if (self::$instance === null) {
            // connect
            self::$instance = self::connect();
        }
            
        return self::$instance;
    }
}

$db = Db::getInstance();
// var_dump($db);

