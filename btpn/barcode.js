function isValidCode(code) {
    // Write your code here
    let sum = 0;


    let newArr = code.split('');
    let len = newArr.length;

    for(let i = 1; i < len-1; i++){
        if(i % 2 == 0){
            console.log(newArr[i]);
            let parsing = parseInt(newArr[i]);
            sum += parsing;
        }
    }

    let multiply = sum * 3;

    console.log(sum);
}

isValidCode("036000291452");