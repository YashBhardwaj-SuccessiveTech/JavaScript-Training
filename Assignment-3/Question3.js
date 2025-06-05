// 3. Write a program to display Diamond Pattern

function diamondpattern(){
    let space = 4;
    let star = 1;
    
    for(let i=1;i <= 9 ;i++){
        let row = "";
        for(let j= space; j >= 0 ;j--){
            row += " ";
        }
        for(let j=1;j <= star ;j++){
            row += "*";
            row += " ";
        }

        if(i<5){
            space--;
            star++;
        }else{
            space++;
            star--;
        }
        console.log(row);
    }
}

diamondpattern();


