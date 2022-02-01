function birthdayCakeCandles(candles) {
    // Write your code here
    //Sort
    for (let i = 0; i < candles.length; i++){
        for(let j = 0; j < candles.length; j++){
            if(candles[j] > candles[j + 1]){
                let temp = candles[j];
                candles[j] = candles[j + 1];
                candles[j + 1] = temp;
            }
        }
    }

    //compare each indexes if it's equal add 1 to the blowCandle
    let blowCandle = 0;
    for(let i = 0; i <= candles.length; i++){
        if(candles[i] == candles[i + 1]){
            blowCandle++;
        }
    }

    return blowCandle;
}

function birthdayCakeCandles2(candles){
    //write the code
    let tallest = Math.max(...candles);
    let count = 0;
    candles.forEach(candle => {
        candle === tallest ? count++ : null;
    });

    return count;
}

console.log(birthdayCakeCandles2([23425, 424552, 23425, 23425, 445523, 192939, 442311, 23425]))
