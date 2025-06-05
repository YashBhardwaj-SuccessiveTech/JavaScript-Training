// 2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Pattern 1
function pattern1(){
    let num = 1;
    for(let i=1;i<=5;i++){
        let row="";
        for(let j=1;j<i;j++){
            row+=num+" ";
            num++;
        }
        console.log(row);
    }
}

pattern1();

// Pattern 2
function pattern2(){
    let num=1;
    for(let i=1;i<5;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=num+ " "
        }
        console.log(row);
        num++;
    }
}
pattern2();

// Pattern 3
function pattern3(){
    let lines=5;
    for(let i=0;i<5*2-1;i++){
        let value = "";
        for(let j=1;j<=lines;j++){
            value+=j;
        }
        console.log(value);
        if(i<4){
            lines--;
        }else{
            lines++;
        }
    }
}

pattern3();