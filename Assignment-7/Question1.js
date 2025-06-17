// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const asynchronousOperations=(url,callback)=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>callback(data))
    .catch((error)=>callback(error))

}
asynchronousOperations("https://dog.ceo/api/breeds/image/random",(data)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log("error");
    }
})
