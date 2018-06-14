<?php declare(strict_types=1);

require_once PATH . 'Core/Db.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/Model.php';

class Controller {
    private $request = null;
    private $db = null;
    private $model = null;
    private $view = null;

    public function __construct(Request $request) {
        $this->request = $request;
        $this->db = Db::getInstance();
        $this->model = new Model($this->db);
        /////////////////////////////////////////////
        // twig
        /////////////////////////////////////////////
        $loader = new Twig_Loader_Filesystem(
            PATH . 'Templates'
        );
        $this->view = new Twig_Environment($loader);
    }
    
    public function index() {
        $cows = $this->model->getCows();

        return $this->view->render('test.twig', ['cows' => $cows]);

        return "müsli";
    }
}