class Employee {
    empid: number;
    empname: string;
    post: string;
    empsalary: number;

    constructor(empid: number, empname: string, post: string, empsalary: number) {
        this.empid = empid;
        this.empname = empname;
        this.post = post;
        this.empsalary = empsalary;
    }

    empdetails(): void {
        console.log(`Employee Id: ${this.empid}`);
        console.log(`Employee Name: ${this.empname}`);
        console.log(`Employee Post: ${this.post}`);
        console.log(`Employee Salary: ${this.empsalary}`);
    }

    // Getters and setters must be inside the class body
    get getID(): number {
        return this.empid;
    }

    // 'set' must be lowercase and requires a parameter
    set setID(_id: number) {
        this.empid = _id;
    }
}

const emp1 = new Employee(101, "Alice", "Developer", 12345678);
const emp2 = new Employee(102, "Bob", "Manager", 12345678);
const emp3 = new Employee(103, "Charlie", "Designer", 12345678);

emp1.empdetails();
emp2.empdetails();
emp3.empdetails();

// Example of using the setter and getter:
emp1.setID = 999;
console.log(`Updated ID for emp1 is: ${emp1.getID}`);