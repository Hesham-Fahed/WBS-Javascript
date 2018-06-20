<?php

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class FriendController extends Controller
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
        
        $this->data['page'] = 'friends';

        $this->model = new UserModel($this->db);
    }

    public function index() : string
    {
        $friends = $this->model->getFriends($this->user);
        $this->data['friends'] = $friends;

        // Also put pending friend requests into twig data array
        $requests = $this->model->getFriendRequests($this->user);
        if ($requests) {
            $this->data['messages'] = array( 'requests' => $requests );
        }

        return $this->render('friends.twig');
    }

    public function store() : string
    {
        $params = $this->request->params();

        // This is probably bad, as it shoult be done in a transaction
        // What if the program crashes after adding but before deleting?
        if ($params->get('accept')) {
            $this->model->addFriend($params->getInt('id'), $this->user);
        }
        $this->model->deleteRequest($params->getInt('id'), $this->user);

        return $this->index();
    }
}