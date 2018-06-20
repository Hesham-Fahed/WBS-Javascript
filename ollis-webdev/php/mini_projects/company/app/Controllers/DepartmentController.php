<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Models/CompanyModel.php';

class DepartmentController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->data['page'] = 'departments';

        $this->model = new CompanyModel($this->db);
    }

    public function index()
    {
        $this->data['departments'] = $this->model->getDepartments();
        $this->data['locations'] = $this->model->getLocations();
        return $this->render('departments.twig');
    }

    public function store()
    {
        $params = $this->request->params();

        if (empty($params->get('location_id'))) {
            $this->data['messages']['errors'][] = 'Please select a location.';
        }
        if (empty($params->get('department'))) {
            $this->data['messages']['errors'][] = 'Please provide the department name.';
        }

        if (empty($this->data['messages']['errors'])) {
            $department = $params->getString('department');
            $locationId = $params->getInt('location_id');

            $success = $this->model->addDepartment($department, $locationId);
            if (!$success) {
                $this->data['messages']['errors'][] = $this->db->error;
            }
        }
        return $this->index();
    }

    public function destroy(int $id)
    {
        $success = $this->model->deleteDepartment($id);
        
        if (!$success) {
            $this->data['messages']['errors'][] = $this->db->error;
        }

        return $this->index();
    }
}