<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Models/CompanyModel.php';

class LocationController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->data['page'] = 'locations';

        $this->model = new CompanyModel($this->db);
    }

    public function index()
    {
        $this->data['locations'] = $this->model->getLocations();
        return $this->render('locations.twig');
    }

    public function store()
    {
        $params = $this->request->params();

        if (empty($params->get('location'))) {
            $this->data['messages']['errors'][] = 'Please provide a name for the location.';
        }

        if (empty($this->data['messages']['errors'])) {

            $locationName = $params->get('location');
            $success = $this->model->addLocation($locationName);
            
            if (!$success) {
                $this->data['messages']['errors'][] = $this->db->error;
            }

        }

        return $this->index();
    }

    public function destroy(int $id)
    {
        $success = $this->model->deleteLocation($id);

        if (!$success) {
            $this->data['messages']['errors'][] = $this->db->error;
        }

        return $this->index();
    }
}
