function countingValleys(steps, path) {
    // Write your code here
    let newPath = path.split('');
    let valley = 0;
    let seaLevel = 0;

    for(let i = 0; i < steps; i++){
        if(newPath[i] == 'U'){
            seaLevel++;
        }else if(newPath[i] == 'D'){
            seaLevel--;
        }

        if(newPath[i] == 'U' && seaLevel == 0){
            valley++;
        }
    }

    return valley;
}

console.log(countingValleys(8, 'UDDDUDUU'));