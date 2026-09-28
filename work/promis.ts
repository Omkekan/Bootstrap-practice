
function getData():Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data recieved");
        },2000);
    })
};

// getData().then((val)=>{
//     console.log(val);

// }).catch((error)=>{})

async function displayData(){
    try{
        let result =await getData();
        console.log(result)
    }catch(error){
        console.log(error);
    }
    
}
displayData();