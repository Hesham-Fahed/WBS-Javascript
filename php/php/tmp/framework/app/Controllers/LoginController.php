<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class LoginController extends Controller {

    public function __construct(Request $request) {
        parent::__construct($request);
        $this->model = new UserModel($this->db);
    }

    public function create() : string
    {
        return $this->render('auth/login.twig');
    }

    public function store() : string
    {
        $params = $this->request->params();
        $username = $params->get('username');
        $password = $params->get('password');

        if (empty($username)) {
            $this->data['errors']['username'] = "Please enter a username.";
        }

        if (empty($password)) {
            $this->data['errors']['password'] = "Please enter your password.";
        }

        if (empty($this->data['errors'])) {
            // Get user data from DB
            $user = $this->model->getUserByEmail($username);
            // Verify password
            if (password_verify($password, $user['password'])) {
                $this->request->session()->set('userId', $user['id']);
                header("Location: {$this->request->basePath()}/test");
                return "";
            };
            // if password OK: login and redirect
            // else show login form
        }
        // Alten Form Daten nochmal ins Twig array schreiben
        return $this->create();
    }

    public function destroy() {

        $this->request->session()->delete('userId');
        session_unset();
        session_destroy();

        header("Location: {$this->request->basePath()}");

    }

}