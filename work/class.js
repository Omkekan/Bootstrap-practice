var Employee = /** @class */ (function () {
    function Employee(empid, empname, post, empsalary) {
        this.empid = empid;
        this.empname = empname;
        this.post = post;
        this.empsalary = empsalary;
    }
    Employee.prototype.empdetails = function () {
        console.log("Employee Id: ".concat(this.empid));
        console.log("Employee Name: ".concat(this.empname));
        console.log("Employee Post: ".concat(this.post));
        console.log("Employee Salary: ".concat(this.empsalary));
    };
    Object.defineProperty(Employee.prototype, "getID", {
        // Getters and setters must be inside the class body
        get: function () {
            return this.empid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setID", {
        // 'set' must be lowercase and requires a parameter
        set: function (_id) {
            this.empid = _id;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee(101, "Alice", "Developer", 12345678);
var emp2 = new Employee(102, "Bob", "Manager", 12345678);
var emp3 = new Employee(103, "Charlie", "Designer", 12345678);
emp1.empdetails();
emp2.empdetails();
emp3.empdetails();
// Example of using the setter and getter:
emp1.setID = 999;
console.log("Updated ID for emp1 is: ".concat(emp1.getID));
