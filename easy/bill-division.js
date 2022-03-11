function bonAppetit(bill, k, b) {
    // Write your code here
    let total = 0;

    for (let i = 0; i < bill.length; i++){
        i != k ? total += bill[i] : false;
    }

    let charged = total / 2;

    let result = b % charged == 0 ? 'Bon Appetit' : b - charged;

    return result;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 5));