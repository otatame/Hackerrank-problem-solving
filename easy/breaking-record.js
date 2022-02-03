function breakingRecords(scores) {
    // Write your code here
    let breaking = [0, 0];
    let low = scores[0];
    let high = scores[0];

    for (let i = 1; i < scores.length; i++){
        let score = scores[i];
        if(score > high){
            breaking[0] += 1;
            high = score;
        }else if(score < low){
            breaking[1] += 1;
            low = score;
        }
    }
    return breaking;
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);