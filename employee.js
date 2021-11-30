class Employee{
    constructor(employee_id, remove, secondname, firstname, middlename, pass_series, pass_number, login, password, post_id){
        this.employee_id = employee_id;
        this.remove = remove;
        this.secondname = secondname;
        this.firstname = firstname;
        this.middlename = middlename;
        this.pass_series = pass_series;
        this.pass_number = pass_number;
        this.login = login;
        this.password = password;
        this.post_id = post_id;
    }
}
module.exports = Employee;