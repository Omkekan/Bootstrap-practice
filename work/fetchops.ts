
async function getUser() {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await result.json();
        console.log(users)
    }catch(error){
        console.log(error)
    }
}

getUser();