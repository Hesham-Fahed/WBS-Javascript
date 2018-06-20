<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Core/Request.php';

class StaticPageController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index(string $page = "home")
    {
        $this->data['page'] = $page;
        return $this->render("static/$page.twig");
    }
}
