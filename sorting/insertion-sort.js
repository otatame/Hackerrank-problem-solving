function insertionSort1(n, arr) {
    // Write your code here

    let compare = arr[n-1];

    for(let i = n-1; compare <= arr[i]; i--){

        let insert = compare > arr[i-1] || arr[i-1] === undefined ? compare : arr[i-1];

        let arrLog = arr.splice(i, 1, insert);

        console.log(...arr);
    }

}

insertionSort1(5, [1,2,4,5,3]);

