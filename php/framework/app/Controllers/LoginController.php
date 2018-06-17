<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class LoginController extends Controller
{
    /**
     * Create a new LoginController instance.
     *
     * @param Request $request
     * @return void
     */
    public function __construct(Request $request)
    {
        parent::__construct($request);
        
        $this->model = new UserModel($this->db);
    }

    /**
     * Render the login page.
     *
     * @return string
     */
    public function index() : string
    {
        return $this->render('auth/login.twig');
    }

    /**
     * Log a user in to the app
     *
     * @return string
     */
    public function create() : string {
        $params = $this->request->params();
        $email = $params->get('email');
        $password = $params->get('password');

        // TODO: automate filling the 'old' array
        $this->data['old'] = [ 'email' => $email ];

        if (empty($email) || empty($password)) {
            $this->data['error'] = "Please provide your email and password.";
        }

        else {
            $user = $this->model->getUser($email);

            if (isset($user) && password_verify($password, $user['password'])) {
                $this->request->session()->set('user', $user['id']);
                header('Location: ' . $this->request->basePath() . '/');
            }

            else {
                $this->data['error'] = "Email and password did not match.";
            }
        }

        return $this->render('auth/login.twig');
    }

    /**
     * Log a user out of the app.
     *
     * @return string
     */
    public function destroy() : string
    {
        $this->request->session()->delete('user');

        session_unset();
        session_destroy();

        header("Location: {$this->request->basePath()}/");
    }
}
