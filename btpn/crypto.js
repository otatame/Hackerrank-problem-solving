function maxProfit(prices) {
    let buy = 0;
    let sell = 0;
    let profit = 0;

    let arrLen = prices.length;
    if(arrLen == 0){
        return profit;
    }

    if(isNaN(prices)){
        return profit;
    }
    
    //melakukan pencarian harga terbesar dan terkecil
    //Inisialisasi
    if(prices[0] > prices[1]){
        sell = prices[0];
        buy = prices[1];
    }else{
        sell = prices[1];
        buy = prices[0];
    }

    
    for(let i = 2; i < arrLen; i++){
        if(prices[i] > sell){
            sell = prices[i];
        }else if(prices[i] < buy){
            buy = prices[i];
        }
    }

    //jika harga terbesar diawal hari maka tidak akan dilakukan pembelian
    if(prices.indexOf(sell) == 0){
        buy = 0;
        sell = 0;
        profit = 0;
    }

    profit = sell - buy;
    return profit;
}

console.log(maxProfit(['a']));