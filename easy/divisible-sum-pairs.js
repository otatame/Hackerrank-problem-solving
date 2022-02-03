function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;

    for (let i = 0; i < n; i++){
        let sum = 0;
        let j = i;
        for(j; j < n; j++){
            if(i == j){
                continue;
            }else{
                sum = ar[i] + ar[j];
            }
            if(sum % k == 0){
                result++;
            }
        }
    }

    return result;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));