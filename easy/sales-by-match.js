function sockMerchant(n, ar) {
    // Write your code here

        let pairs = 0;
        let sort = ar.sort();

        for(let i = 0; i < n; i++){
            if(ar[i] == ar[i+1]){
                pairs++;
                i++;
            }else if(ar[i] != ar[i+1]){
                continue;
            }
        }

        return pairs;
}  

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);