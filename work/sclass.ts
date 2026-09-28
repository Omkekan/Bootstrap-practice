
class Students{                                         //class creation
    stdId:number = 101;                                 //data-member of class
    stdName:string="Ranveer";
    stdContact:number=9427364891;

    //member functions
    studentDetails(){
        return `ID:${this.stdId} Name:${this.stdName} Contact:${this.stdContact}`;
    }
}

//create object of class
let stdObj1 = new Students();
console.log(stdObj1.stdName);
console.log(stdObj1.studentDetails());