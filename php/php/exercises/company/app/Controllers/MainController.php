<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Models/MainModel.php';

class MainController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->model = new MainModel($this->db);
    }

    public function index() : string
    {
        $params = $this->request->params();
        $order = $params->get('order');
        $this->data['standorte'] = $this->model->getStandorte();
        $this->data['abteilungen'] = $this->model->getAbteilungen();
        $this->data['mitarbeiter'] = $this->model->getMitarbeiter($order);

        return $this->render('main.twig');
    }

    // public function store() : string {

    //     $params = $this->request->params();

    //     $success = 

    // }

}