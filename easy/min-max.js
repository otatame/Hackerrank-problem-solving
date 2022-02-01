function miniMaxSum(arr) {
    // Write your code here
    //Sort
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            break;
        }else{
            sum1 += arr[i];
        }
    }

    for(let i = 1; i < arr.length; i++){
        sum2 += arr[i];
    }

    return console.log(sum1, sum2);
    
}

function sort(arr){
    let swap = true;
    do{
        swap = false;
        for (let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    }while(swap);

    return console.log(arr);
}

sort([5, 2, 3, 7, 1]);