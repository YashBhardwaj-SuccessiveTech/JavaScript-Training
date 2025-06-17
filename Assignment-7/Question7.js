// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.


function multipleasync(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("first timeout");
        },2000)
    });
}


// function multipleasync(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("first timeout");
//         },2000)
//         setTimeout( ()=>{
//             resolve("second timeout")
//         },3000)
//     });
// }

function multipleasync2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("second timeout");
        },3000)
    });
}

async function main(){
    let r = await Promise.all([multipleasync(),multipleasync2()]);
    console.log(r);
}


// async function main(){
//     let r = await Promise.allSettled([multipleasync()]);
//     console.log(r);
// }


main();