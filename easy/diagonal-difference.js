
function diagonalDifference(arr) {
    // Write your code here
    let leftDiag = 0;
    let rightDiag = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++){
        leftDiag += arr[i][i];
        rightDiag += arr[i][n-i-1];
    }

    let result = leftDiag - rightDiag;
    if(result < 0){
        result *= -1;
    }

    return result;
}


