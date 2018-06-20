<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class LoginController extends Controller
{
    public function __construct(Request $request)
    {
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
            $user = $this->model->getUserByEmail($username);

            if (password_verify($password, $user['password'])) {
                $this->request->session()->set('userId', $user['id']);
                // Leitet den User bei erfolgreichem Login zur gewünschten
                // Seite um, zB Admin-Bereich oder Homepage ....
                // header("Location: {$this->request->basePath()}/admin");
                // header("Location: http://google.de");
                header("Location: {$this->request->basePath()}");
                return "";
            }
        }

        return $this->create();
    }

    public function destroy()
    {
        $this->request->session()->delete('userId');

        session_unset();
        session_destroy();

        header("Location: {$this->request->basePath()}");
    }
}
