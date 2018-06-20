<?php

class User
{
    private $id;
    private $email;
    private $password;
    private $online;
    private $registered;
    private $auth_token;

    public function getId()         : int    { return intval($this->id); }
    public function getEmail()      : string { return $this->email; }
    public function getPassword()   : string { return $this->password; }
    public function getOnline()     : string { return $this->online; }
    public function getRegistered() : string { return $this->registered; }
    public function getAuthToken()  : string { return $this->auth_token; }
}