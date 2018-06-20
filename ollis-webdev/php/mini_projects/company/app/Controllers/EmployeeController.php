<?php declare(strict_types=1);

require_once PATH . 'Core/Controller.php';
require_once PATH . 'Models/CompanyModel.php';

class EmployeeController extends Controller
{
    public function __construct(Request $request)
    {
        parent::__construct($request);

        $this->data['page'] = 'employees';

        $this->model = new CompanyModel($this->db);
    }

    public function index()
    {
        $orderBy = $this->request->params()->get('sort') ?? 'name';
        $this->data['employees'] = $this->model->getEmployees($orderBy);
        $this->data['departments'] = $this->model->getDepartments();
        return $this->render('employees.twig');
    }

    public function store()
    {
        $params = $this->request->params();

        if (empty($params->get('name'))) {
            $this->data['messages']['errors'][] = 'Please provide a name.';
        }

        if (empty($params->get('age'))) {
            $this->data['messages']['errors'][] = 'Please provide the age.';
        }

        if (empty($params->get('dept_id'))) {
            $this->data['messages']['errors'][] = 'Please select a department.';
        }

        if (empty($this->data['messages']['errors'])) {
            $name = $params->getString('name');
            $age = $params->getInt('age');
            $departmentId = $params->getInt('dept_id');

            $success = $this->model->addEmployee($name, $age, $departmentId);
            if (!$success) {
                $this->data['messages']['errors'][] = $this->db->error;
            }
        }

        return $this->index();
    }

    public function destroy(int $id)
    {
        $success = $this->model->deleteEmployee($id);
        
        if ($success) {
            $this->data['messages']['success'][] = "Employee deleted.";
        }
        else {
            $this->data['messages']['errors'][] = $this->db->error;
        }

        return $this->index();
    }

    public function move()
    {
        $params = $this->request->params();

        if (empty($params->get("dept_id"))) {
            $this->data['messages']['errors'][] = 'Please select a department.';
        }

        if (empty($params->get("employee_id"))) {
            $this->data['messages']['errors'][] = 'Please select an employee.';
        }

        if (empty($this->data['messages']['errors'])) {
            
            $employeeId = $params->getInt("employee_id");
            $departmentId = $params->getInt("dept_id");

            $success = $this->model->moveEmployee($employeeId, $departmentId);
            if (!$success) {
                $this->data['messages']['errors'][] = $this->db->error;
            }
        }

        return $this->index();
    }
}