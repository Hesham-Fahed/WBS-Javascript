<?php declare(strict_types=1);

require_once PATH . 'Core/Db.php';
require_once PATH . 'Core/Request.php';

abstract class Controller
{
    /**
     * The current Request object
     *
     * @var Request
     */
    protected $request = null;

    /**
     * The database connection (in our case: mysqli)
     *
     * @var mixed
     */
    protected $db = null;

    /**
     * The primary Model object of the controller
     *
     * @var Model
     */
    protected $model = null;

    /**
     * The view. This is an instance of the template engine.
     *
     * @var mixed
     */
    protected $view = null;


    /**
     * The id of the logged in user
     *
     * @var string
     */
    protected $csrfToken = '';


    /**
     * The data array for the template engine
     *
     * @var array
     */
    protected $data = [];

    /**
     * The id of the logged in user
     *
     * @var int
     */
    protected $user = null;


    public function __construct(Request $request)
    {
        $this->request = $request;

        // getInstance umbenennen zu getConnection
        $this->db = Db::getInstance();

        $this->initializeTemplateEngine();

        $this->handleCsrfToken();

        $this->prepareViewData();
    }


    public function __destruct() {
        if (isset($this->csrf_token)) {
            $this->request->session()->set('csrf_token', $this->csrf_token);
        }
    }


    /**
     * Set the currently logged in user's id
     *
     * @return void
     */
    public function setUser(int $id)
    {
        $this->user = $id;
        $this->data['logged_in'] = true;
    }


    /**
     * A wrapper for the template engine's render function
     *
     * @return void
     */
    public function render(string $template) : string
    {
        return $this->view->render($template, $this->data);
    }

    
    public function csrfField() : string
    {
        return '<input type="hidden" name="csrf_token" value="' . $this->csrfToken . '">';
    }


    protected function initializeTemplateEngine()
    {
        $loader = new Twig_Loader_Filesystem(
            PATH . 'Templates'
        );

        $this->view = new Twig_Environment($loader);
    }


    protected function handleCsrfToken() {
        
        if ($this->request->is('POST') && !$this->validateCsrfToken()) {
            throw new Exception("CSRF Token error.");
        }

        $this->csrfToken = $this->generateAndSaveCsrfToken();
    }
    

    protected function validateCsrfToken() : bool
    {
        $sessionToken = $this->request->session()->get('csrf_token');
        $requestToken = $this->request->params()->get('csrf_token');

        if ($sessionToken && $requestToken && $sessionToken === $requestToken) {
            return true;
        }

        return false;
    }


    protected function generateAndSaveCsrfToken()
    {
        $token = md5(uniqid(microtime(), true));
        $this->request->session()->set('csrf_token', $token);
        return $token;
    }


    protected function prepareViewData() {
        $this->data['logged_in'] = false;
        $this->data['basePath'] = $this->request->basePath();
        $this->data['csrf_field'] = $this->csrfField($this->csrfToken);
    }
}