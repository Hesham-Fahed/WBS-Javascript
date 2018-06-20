<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class RegistrationController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->model = new UserModel($this->db);
    }

    public function create() : string
    {
        return $this->render('auth/register.twig');
    }

    public function store() : string
    {
        $params = $this->request->params();

        $email = $params->get('username');
        $password = $params->get('password');
        $password_check = $params->get('password_check');
        $screenname = $params->get('screenname');
        $gender = $params->get('gender');
        $age = $params->getInt('age');

        // Gibt es bereits einen User mit dieser Email?
        if ($this->model->getUserByEmail($email)) {
            $this->data['errors']['username'] = 'We already have an account with this e-mail.';
        }

        if (empty($email)) {
            $this->data['errors']['username'] = 'Please enter your e-mail address.';
        }

        if (empty($password)) {
            $this->data['errors']['password'] = 'Please provide a password.';
        }

        if (empty($password_check)) {
            $this->data['errors']['password_check'] = 'Please repeat your password.';
        }

        if ($password !== $password_check) {
            $this->data['errors']['password'] = 'The passwords are not equal.';
        }

        if (empty($screenname)) {
            $this->data['errors']['screenname'] = 'Please provide a screen name.';
        }

        if (empty($gender)) {
            $this->data['errors']['gender'] = 'Please specify your gender.';
        }

        if (empty($age)) {
            $this->data['errors']['age'] = 'Please state your age.';
        }

        if (empty($this->data['errors'])) {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $userId = $this->model->createUser($email, $hash, $screenname, $gender, $age);
            $this->request->session()->set('userId', $userId);
            header("Location: {$this->request->basePath()}");
        }

        return $this->create();
    }
}