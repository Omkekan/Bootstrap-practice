
console.log("Hello Ranveer");

//Datatypes

//1. Number
let num:number;
    num = 123365;
console.log(num);

//2. String
let fnamee:string = "Ranveer";
console.log(fnamee);

//3. Boolean
let cond:boolean = true;
console.log(cond);

//4. Array
let students:string[] = ["Ranveer", "Kanishk", "Prajwal"];
console.log(students);

//5. Tuple: Allows us to store multiple value with different datatypes in array.
let emp:[number,string,boolean] = [101, "Ranveer",true];
console.log(emp);

//6. Enum: it allows us to create variable with constant values
enum days{sunday, monday, tuesday, wednesday, thrusday, friday, saturday};
let data0 = days.sunday;
console.log(data0);

//7. union: allows us to store multiple values with different datatype.
let mix:number|string|boolean = true;
console.log(mix);

//8. null
let emptyData = null;
console.log(emptyData);

//9. undefined

//10. any
let data:any = "hElLo";
console.log(data);


