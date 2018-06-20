<?php declare(strict_types=1);

require_once PATH . 'Core/Db.php';
require_once PATH . 'Core/Request.php';

abstract class Controller
{
    protected $request = null;
    protected $db = null;
    protected $model = null;
    protected $view = null;
    protected $user = null;
    protected $data = [];

    public function __construct(Request $request)
    {
        $this->request = $request;

        $this->db = Db::getInstance();

        $loader = new Twig_Loader_Filesystem(
            PATH . 'Templates'
        );

        $this->view = new Twig_Environment($loader);
    }

    public function setUser(int $id) {
        $this->user = $id;
        $this->data['logged_in'] = true;
    }

    public function render(string $template) : string
    {
        $this->data['basePath'] = $this->request->basePath();
        return $this->view->render($template, $this->data);
    }
}
