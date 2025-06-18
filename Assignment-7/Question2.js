// 2. Give an example of using multiple callback functions in a single function in JavaScript

function getdata(callback){
    console.log(1);
    callback();
}

function getnextdata(callback)
{
    console.log(2);
    callback();
}

getdata(()=>
    getnextdata(()=>{
        console.log(3);
    })
)