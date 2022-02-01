function staircase(n) {
    // Write your code here
    let stair = "";

    for (let i = 1; i <= n; i++){
        //printing spaces
        for(let j = 1; j <= n - i; j++){
            stair += " ";
        }
        //printing bracket
        for(let k = 0; k < i; k++){
            stair += "#";
        }
        if(i < n){
            stair += "\n";
        }else{
            break;
        }
    }

    return console.log(stair);
}

staircase(6);