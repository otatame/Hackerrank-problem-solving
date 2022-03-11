function getTotalX(a, b) {
    // Write your code here
    let result = 0;
    
    for (let x = 1; x <= 100; x++){
        if(a.every(int => (x % int == 0))){
            if(b.every(int => (int % x == 0))){
                result++;
            }
        }
    }

    return result;
}
