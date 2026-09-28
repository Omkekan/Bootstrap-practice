
class Student{                                   //class creation
    studId: number;                              //data-member of class
    studName: string;
    studContact: number;

    constructor(_id: number, _name: string, _contact: number) {
        this.studId = _id;
        this.studName = _name;
        this.studContact = _contact;
    }

    //member functions
    studentDetails() {
        return `ID: ${this.studId} Name: ${this.studName} Contact: ${this.studContact}`;
    }
}

// Create object of class
let stdobj1 = new Student(201, "Dogra", 9823153479);

console.log(stdobj1.studName);
console.log(stdobj1.studentDetails());
