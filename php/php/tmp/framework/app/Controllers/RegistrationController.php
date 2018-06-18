<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class RegistrationController extends Controller {

    public function __construct(Request $request) {
        parent::__construct($request);
        $this->model = new UserModel($this->db);
    }

    
    // Registrierungsformular anzeigen
    public function create() : string {
        return $this->render('auth/register.twig');
    }
    
    public function store() : string
    {
        $params = $this->request->params();

        $email = $params->get('username');
        $password = $params->get('password');
        $screenname = $params->get('screenname');
        $gender = $params->get('gender');
        $age = $params->get('age');

        // TODO: Validierung
        // Gibt es bereits einen User mit dieser Email?
        if ($this->model->getUserByEmail($email)) {
            $this->data['errors']['email'] = 'We already have an account with this e-mail.';
        }

        if (empty($this->data['errors'])) {
            // Daten in der DB speichern
            $success = $this->model->createUser($email, $password, $screenname, $gender, $age);
            // Redirect
        }

        return $this->create();
    }


}