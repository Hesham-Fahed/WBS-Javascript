<?php

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/UserModel.php';

class ProfileController extends Controller
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
        
        $this->data['page'] = 'profile';

        $this->model = new UserModel($this->db);
    }

    // TODO not index but show!!!!
    public function index(int $userId = null)
    {
        $editable = false;

        if (!$userId) {
            $userId = $this->user;
            $editable = true;
        }

        $isFriend = $this->model->isFriend($this->user, $userId);

        if ($this->user !== $userId && !$isFriend) {
            $this->data['messages']['errors'][] = 'This user is not your friend yet.';
            
            return $this->render('profile.twig');
        }

        $user = $this->model->getUser($userId);

        $this->data['profile'] = $user;
        $this->data['editable'] = $editable;

        return $this->render('profile.twig');
    }

    // public function edit()
    // {
    // }

    public function update()
    {
        $this->data['messages']['errors'][] = "Image upload doesn't work yet";
        return $this->index();
        //$this->request->saveImageUpload('portrait', $this->user, 'avatars/');        
    }

}