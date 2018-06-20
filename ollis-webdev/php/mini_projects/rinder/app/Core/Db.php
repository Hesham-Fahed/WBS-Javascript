<?php
declare(strict_types=1);

class Db
{
    /**
     * The database connection instance
     *
     * @var mysqli
     */
    private static $instance;

    protected function __construct() {}     // prevent object creation with 'new'
    private function __clone() {}           // prevent object cloning
    private function __wakeup() {}          // prevent object unserialization

    /**
     * Connect to the database server
     *
     * @return mysqli
     */
    private static function connect() : mysqli
    {
        $db_config = include "../config/db.php" ;

        $db = new mysqli(
            $db_config['host'],
            $db_config['username'],
            $db_config['password'],
            $db_config['database'],
            $db_config['port']
        );

        $db->set_charset($db_config['charset']);

        if (!$db) {
            throw new Exception('DB Connection Error', $db->errno);
        }

        return $db;
    }

    /**
     * Get the database connection (singleton).
     *
     * @return mysqli
     */
    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = self::connect();
        }

        return self::$instance;
    }    
}