import axios from 'axios';
const EMPLOYEE_API_URL="http://localhost:9000/api/v1/all";
class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_URL)
    }

}
export default new  EmployeeService()