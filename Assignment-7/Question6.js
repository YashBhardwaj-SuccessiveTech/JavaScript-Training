// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function returnpromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("common");
            resolve("success");
        },2000)
    });
}

async function main(){
    const result = await returnpromise();
    console.log(result);
}

main();