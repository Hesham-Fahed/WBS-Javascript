<?php

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';
require_once PATH . 'Models/PostModel.php';
require_once PATH . 'Models/UserModel.php';

class PostController extends Controller
{

    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->data['page'] = 'posts';

        $this->model = new PostModel($this->db);
    }

    public function index() : string
    {
        $this->data['posts'] = $this->model->getPosts($this->user);

        if ($this->user !== null) {
            $this->data['delbtn'] = true;
        }

        return $this->render('postlist.twig');
    }

    public function store() : string
    {
        $params = $this->request->params();
        $title = $params->get('title');
        $content = $params->get('content');
        
        // If both fields have not been filled in make an array
        // with an error message that we can put into our
        // data package for Twig.
        // If both fields are OK, add them to the Model/DB
        if (empty($title) || empty($content)) {
            $this->data['fields'] = array(
                'title' => $title,
                'content' => $content,
            );

            $this->data['messages'] = array(
                'errors' => array(
                    'New posts must have a title and a description.',
                )
            );

            $this->data['posts'] = $this->model->getPosts($this->user);
            return $this->render('postlist.twig');
        }
        else {
            $this->model->save($title, $content, $this->user);
        }

        if ($this->user !== null) {
            $this->data['delbtn'] = true;
        }

        $this->data['posts'] = $this->model->getPosts($this->user);
        return $this->render('postlist.twig');
    }

    public function destroy(int $id) : string
    {
        $owner = (int) $this->model->getPost($id)['user_id'];

        if ($this->user === $owner) {
            
            $success = $this->model->delete($id);

            if ($success) {
                $statusCode = 200;
                $ajaxResponse = [ 'status' => 'success' ];
            }
            else {
                $statusCode = 500;
                $ajaxResponse = [ 'status' => 'error' ];
            }
        }
        else {
            $statusCode = 403;
            $ajaxResponse = [ 'status' => 'error' ];
        }

        header('Content-Type: application/json', true, $statusCode);

        return json_encode($ajaxResponse);
    }

    // Get all Posts of all your friends.
    // As mentioned in the Model, we should limit the
    // number of Posts somehow and retrieve more posts
    // via AJAX
    public function wall(int $page = 1) : string
    {
        // Get a list of all the loggin in user's friends.
        $usermodel = new UserModel($this->db);
        $users = $usermodel->getFriends($this->user);

        // Then get all their IDs, because getByUserIds
        // wants an array of user IDs. Not sure, if it might
        // be better to just pass an array of User objects
        // to the model and extract the IDs from there.
        $friendIds = [];
        foreach ($users as $user) {
            $friendIds[] = $user['id'];
        }

        // Finally get all our friend's posts from the database.
        $posts = $this->model->getPosts($friendIds);

        // The data from the DB already is in the right
        // format, so put it into our data package for twig.
        $this->data['posts'] = $posts;
        $this->data['page'] = 'wall';

        return $this->render('postlist.twig');
    }

    public function kochen() {
        return "Lekka";
    }
}