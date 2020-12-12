// TODO: Write code to define and export the Employee class
// const Employee = require("./Employee");
// const Engineer = require("./engineer");
// const Manager = require("./manager");
// const Intern = require("./intern");

// const employee = new Employee("john", 1111, "john@gmail.com");
class Employee {
    constructor (name, id , email) {
        this.name = name,
        this.id = id,
        this.email = email;

       
    }; 
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    }; 
    getEmail() {
        return this.email;
    };  
    getRole() {
        return "Employee";
    };  

};
// const employees = new Employee
// Employee.getname();
module.exports = Employee;



