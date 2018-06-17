<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/TestModel.php';

class TestController extends Controller {

    public function __construct(Request $request) {
        parent::__construct($request);
        $this->model = new TestModel($this->db);
    }

    public function wurst () :string {
        return "vw";
    }
    
    public function index()
    {
        $this->data['cows'] = $this->model->getCows();
    
        return $this->render('test.twig');
    }
}
