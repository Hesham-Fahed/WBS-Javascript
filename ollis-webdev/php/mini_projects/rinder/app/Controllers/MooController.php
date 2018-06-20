<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class MooController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->data['page'] = 'moo';
        
        $this->model = new UserModel($this->db);
        
        //$this->request->session()->delete('moo');

        // Generate list of non-friend-ids and store it in the session
        if (!$request->session()->has('moo'))
        {
            $nonFriends = $this->model->getNonFriendIds($request->session()->getInt('user'));
            $request->session()->set('moo', $nonFriends);
        }
    }

    public function index() : string
    {
        $params = $this->request->params();
        $session = $this->request->session();

        if (!empty($session->get('moo')))
        {
            $randomId = array_rand($session->get('moo'));
            $hottieId = $session->get('moo')[$randomId];
        }
        else {
            $hottieId = null;
        }

        // There are some hotties left today
        if ($hottieId)
        {
            $this->data['hottie'] = $this->model->getUser($hottieId);
            return $this->render('moo.twig');
        }
        // No more hotties
        else {
            $this->data['empty'] = true;
            $this->data['messages']['errors'][] = 'No more hotties today. Come back tomorrow.';
            return $this->render('moo.twig');
        }
    }

    public function store()
    {
        $hottieId = $this->request->params()->getInt('hottie-id');
        $action = $this->request->params()->getString('action');

        switch ($action):

            case "moo":
                $this->model->addRequest($this->user, $hottieId);
                break;

            case "boo":
                break;
            
        endswitch;            

        $mooList = $this->request->session()->get('moo');
        
        if (($id = array_search($hottieId, $mooList)) !== false) {
            unset($mooList[$id]);
            $this->request->session()->set('moo', $mooList);
        }
        return $this->index();
    }
}