<?php declare(strict_types=1);

require_once "model.php";
require_once "view.php";
?>

<nav>
    <a href="index.php">Todo List</a>
    <a href="index.php?action=show_add_todo_form">Add Todo</a>
</nav>

<?php

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

$db = connect();

switch($action):
    case 'show_add_todo_form':
        render_add_todo_form();
        break;

    case 'add_todo':
        $title = $_POST['title'] ?? 'empty title';
        $description = $_POST['description'] ?? 'empty description';
        store_todo($db, $title, $description);
        $todos = get_todos($db);
        render_todo_list($todos);
        break;

    default:
        $todos = get_todos($db);
        render_todo_list($todos);    
endswitch;


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// Pseudocode für Lösungsansatz /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

class Model
{
    private $db = null;
    function __construct($host, $user, $pass, $db) {
        $this->db = new mysqli($host, $user, $pass, $db, 3306);
    }
    public function query(string $sql) {
        $this->db->query($sql);
        // ....
        // return $result
    }

    public function todos() {
        return $this->db->query('SELECT * FROM todos ORDER BY `date`');
    }
}


class Controller
{
    private $model = null;

    public function __construct() {
        $this->model = new Model('localhost', 'ollo', '123', 'todolist');
    }

    public function show() {
        $todos = $this->model->todos();
        $this->view->renderList($todos);
    }
}

class View
{
    public function renderList(array $items) {
        echo "<ul>";
        foreach ($items as $item) {
            echo "<li>$item</li>";
        }
        echo "</ul>";
    }
}

$controller = new Controller;
$controller->show();