function migratoryBirds(arr) {
    // Write your code here
    let type = [0, 0, 0, 0, 0];

    for(let i = 0; i < arr.length; i++){
        if(arr [i] == 1){
            type[0]++;
        }else if(arr[i] == 2){
            type[1]++;
        }else if(arr[i] == 3){
            type[2]++;
        }else if(arr[i] == 4){
            type[3]++;
        }else{
            type[4]++;
        }
    }

    let maxVal = Math.max(...type);
    let result = type.indexOf(maxVal);
    
    return result + 1;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))