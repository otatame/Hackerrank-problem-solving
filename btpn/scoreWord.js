function getScore(word) {
    let score = [];

    let newWord = word.split('');
    let newWordLen = newWord.length;

    for(let i = 0; i < newWordLen; i++){
        let text = newWord[i].toUpperCase();

        if(text === 'A' || text === 'E' || text === 'I' || text === 'O' || text === 'U' || text === 'V' || text === 'X' || text === 'S'){
            score[i] = 1;
        }else if(text === 'D' || text === 'G' || text === 'H' || text === 'T'){
            score[i] = 2;
        }else if(text === 'C' || text === 'F' || text === 'J' || text === 'K' || text === 'L' || text === 'N' ||  text ==='R'){
            score[i] = 4;
        }else if(text === 'B' || text === 'M' || text === 'P'){
            score[i] = 6;
        }else if(text === 'W' || text === 'Y'){
            score[i] = 8;
        }else if(text === 'Q' || text === 'Z'){
            score[i] = 10;
        }else{
            score[i] = 0;
        }
    }

    let initVal = 0;
    let result = score.reduce((prevVal, currVal) => prevVal + currVal, initVal);

    return result;
}

getScore('pinata');