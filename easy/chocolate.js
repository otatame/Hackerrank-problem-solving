function birthday(s, d, m) {
    // Write your code here
    let month = m;
    let day = d;
    let chocPiece = 0;

    for(let i = 0; i < s.length; i++){
        let sum = 0;
        let k = i;

        for(let j = 1; j <= month; j++){
            sum = sum + s[k];
            k++;
            if(j == month && sum == day){
                chocPiece++;
            }
        }
    }

    return chocPiece;
}

console.log(birthday([1, 2, 1, 3 ,2], 3, 2));