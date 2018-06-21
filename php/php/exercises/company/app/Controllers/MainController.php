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
        
        if ($params->get('command') == 'create') {
            $this->store();
        }
        if ($params->get('command') == 'destroy') {
            $this->destroy();
        }
        if ($params->get('command') == 'createStandort') {
            $this->createStandort();
        }
        if ($params->get('command') == 'move') {
            $this->move();
        }

        $order = $params->get('order');
        $this->data['standorte'] = $this->model->getStandorte();
        $this->data['abteilungen'] = $this->model->getAbteilungen();
        $this->data['mitarbeiter'] = $this->model->getMitarbeiter($order);
        // var_dump($this->data);

        return $this->render('main.twig');
    }


    public function store() {
        $params = $this->request->params();

        $mitarbeiter_name = $params->get('mitarbeiter_name');
        $age = $params->get('age');
        $abteilungen = $params->get('abteilungen');
        $standorte = $params->get('standorte');


        if (empty($mitarbeiter_name) || 
            empty($abteilungen) || 
            empty($standorte)
        ) {
            $this->data['error'] = "Bitte alle Felder ausfüllen.";
        }
        
        if (empty($this->data['error'])) {
            $success = $this->model->createMitarbeiter(
                                        $mitarbeiter_name, 
                                        $age, 
                                        $abteilungen,
                                        $standorte
                                     );
        } // ende if

        if (isset($success)) {
            echo "success";
            // mail($username, 'Framework registration', "TODO");
            header('Location: ' . $this->request->basePath() . '/main');                
        }
    } // ende store


    public function createStandort() {
        $params = $this->request->params();
        $standort = $params->get('add-standort');

        $success = $this->model->createStandort($standort);
        if (isset($success)) {
        // mail($username, 'Framework registration', "TODO");
        header('Location: ' . $this->request->basePath() . '/main');                
        }
    }


    public function destroy() {
        $params = $this->request->params();

        if ($params->get('id')) {
            $id = intval($params->get('id'));
            $row = 'id';
        }
        if ($params->get('standorte')) {
            $id = $params->get('standorte');
            $id = '"' . $id . '"';
            $row = 'name';
        }
        $objekt = $params->get('objekt');

        $success = $this->model->destroy($id, $objekt, $row);
        if ($success) {
            echo "success";
            // mail($username, 'Framework registration', "TODO");
            header('Location: ' . $this->request->basePath() . '/main');                
        }
    }


    public function move() {

        $params = $this->request->params();
        $mitarbeiter = $params->get('mitarbeiter');
        $person = $this->model->getUserByName($mitarbeiter);
        $id = intval($person[0]["id"]);
        $standorte = $params->get('standorte');
        
        $success = $this->model->move($id, $standorte);
        if ($success) {
            echo "success";
            // mail($username, 'Framework registration', "TODO");
            header('Location: ' . $this->request->basePath() . '/main');                
        }
    }
}