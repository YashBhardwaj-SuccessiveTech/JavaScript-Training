// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function returnpromise(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("common");
            resolve("success");
        },2000)
    });
}

async function main(){
    const delay = 3000;
    const result = await returnpromise(delay);
    console.log(result);
}

main();