function catAndMouse(x, y, z) {

    let val1 = x - z;
    let catA = val1 < 0 ? val1 * -1 : val1;

    let val2 = y - z;
    let catB = val2 < 0 ? val2 * - 1 : val2;

    if(catA === catB){
        return 'Mouse C';
    }else if(catA > catB){
        return 'Cat B';
    }else if(catA < catB){
        return 'Cat A';
    }

}

console.log(catAndMouse(1, 5, 2));