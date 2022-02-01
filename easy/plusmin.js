function plusMinus(arr){
    //variables to store the data
    let plus = 0;
    let minus = 0;
    let zeros = 0;

    //recursive method to find negative or positive number
    for (let num of arr){
        if(num < 0){
            minus++;
        }else if(num > 0){
            plus++;
        }else if(num == 0){
            zeros++;
        }
    }

    const arrLen = arr.length;
    console.log(plus/arrLen);
    console.log(minus/arrLen);
    console.log(zeros/arrLen);
    return;
}

plusMinus([-4, 3, -9, 0, 4, 1]);