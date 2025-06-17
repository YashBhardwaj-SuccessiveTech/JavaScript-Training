// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

// const asynchronousOperations=(url)=>{
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>console.log(data))

// }
// asynchronousOperations("https://dog.ceo/api/breeds/image/random");


function apifetch(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = 10;
            resolve(data);
        },2000)
    })
}

apifetch()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error");
})