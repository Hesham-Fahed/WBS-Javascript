<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Models/UserModel.php';

class ProfileController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->model = new UserModel($this->db);
    }

    public function index()
    {
        $this->data['user'] = $this->model->getUser($this->user);

        return $this->render('profile.twig');
    }
}