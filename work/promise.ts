const myFunc =  (data:string) => {
    console.log(`Result is:${data}`);
}

const myPromise = new Promise((resolve, reject) => {
    let success: boolean = true;
    if(!success){
        resolve("qwertyuio");

    }
    else{
        reject("sdfghjk")
    }
});

myPromise.then((val) => {
    //console.log(val);
    myFunc(val);
}).catch((error)=> {
    //console.log(error);
    myFunc(error);
}
);