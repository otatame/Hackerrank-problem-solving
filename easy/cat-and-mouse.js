function catAndMouse(x, y, z) {

    let catA = (x - z) < 0 ? (x - z) * -1 : x - z;
    console.log(catA);
    let catB = (y - z) < 0 ? (y - z) * -1 : y - z;
    console.log(catB);

    if(catA === catB){
        return 'Mouse C';
    }else if(catA > catB){
        return 'Cat B';
    }else if(catA < catB){
        return 'Cat A';
    }

}

console.log(catAndMouse(1, 3 ,2));