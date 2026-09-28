interface person {
    pid: number;
    pname: string;
    pstatus: string;
    pnumber: number;
    personDetails():any;
}

class Teachers implements person{
    
    pid: number;
    pname: string;
    pstatus: string;
    pnumber: number;
    
    constructor(_id:number, _name:string, _status: string, _number: number){
        this.pid = _id;
        this.pname =_name;
        this.pstatus= _status;
        this.pnumber=_number;
    }

    personDetails() {
        return `Id:${this.pid} nName:${this.pname} Contact`
    }
    
}