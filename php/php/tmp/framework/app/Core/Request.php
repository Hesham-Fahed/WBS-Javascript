<?php declare(strict_types=1);

require_once PATH . "Core/Map.php";

class Request
{
    private $domain;
    private $fullPath;
    private $basePath;
    private $path;
    private $method;
    private $params;
    private $session;
    private $cookies;

    public function __construct()
    {
        // [www.domain.de]/path/to/app/post/12/edit?id=12
        $this->domain = $_SERVER['HTTP_HOST'];
        
        // www.domain.de/[path/to/app/post/12/edit?id=12]
        $this->fullPath = $_SERVER['REQUEST_URI'];
        
        // www.domain.de/[path/to/app]/Request.php/post/12/edit?id=12
        $this->basePath = substr($_SERVER['SCRIPT_NAME'], 0,
        strrpos($_SERVER['SCRIPT_NAME'], '/')
    );
    
        // www.domain.de/path/to/app/[post/12/edit]?id=12
        $pathWithUrlParameters = str_replace($this->basePath, '', $_SERVER['REQUEST_URI']);
        $this->path = explode('?', $pathWithUrlParameters)[0];
        
        $this->method = $_SERVER['REQUEST_METHOD'];

        $params = array_merge($_POST, $_GET);
        $this->params = new Map($params);

        $this->cookies = new Map($_COOKIE);

        $this->session = new Map($_SESSION, true);
    }

    public function domain() : string
    {
        return $this->domain;
    }

    public function fullPath() : string
    {
        return $this->fullPath;
    }

    public function url() : string
    {
        return $this->domain . $this->fullPath;
    }

    public function basePath() : string
    {
        return $this->basePath;
    }

    public function path() : string
    {
        return $this->path;
    }

    public function is(string $method) : bool
    {
        return strtolower($this->method) === strtolower($method);
    }

    public function method() : string
    {
        return $this->method;
    }

    public function params() : Map
    {
        return $this->params;
    }
    
    public function session() : Map
    {
        return $this->session;
    }

    public function cookies() : Map
    {
        return $this->cookies;
    }
}

// $r = new Request;

// $r->domain();
// $r->fullPath();
// $r->url();
// $r->basePath();
// $r->path();
// $r->is('POST'); // bool
// $r->is('get');
// $r->method(); // "post"
// $r->params();  // $_GET und $_POST
// var_dump($r->session());
// $r->cookies();

