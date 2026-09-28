class Student {
    studId: number;
    studName: string;
    studContact: number;
    public aadhar:number = 212121;
    protected gender:string = "male";

    constructor(_id: number, _name: string, _contact: number) {
        this.studId = _id;
        this.studName = _name;
        this.studContact = _contact;
    }

    studentDetails() {
        return `ID:${this.studId} Name:${this.studName} Contact:${this.studContact} Aadhar:${this.aadhar} Gender:${this.gender}`;
    }
}

export default class Result extends Student {
    phy: number = 0;    
    che: number = 0;
    math: number = 0;

    constructor(_id: number, _name: string, _contact: number, _phy: number, _che: number, _math: number){
        super(_id, _name, _contact);

        this.phy = _phy;
        this.che = _che;
        this.math = _math;
    }

    total() {
        return this.phy + this.che + this.math;
    }

    studentDetails() {
        return `ID:${this.studId} Name:${this.studName} Contact:${this.studContact}
                Physics:${this.phy} Chemistry:${this.che} Maths:${this.math}`;
    }
}

let resultObj = new Result(301, "Ranveer", 2222, 58, 42, 77);

console.log(resultObj.studentDetails());
console.log("Total:", resultObj.total());
