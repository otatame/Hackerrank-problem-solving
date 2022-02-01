function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let k1 = x1 + v1;
    let k2 = x2 + v2;

    if(v2 >= v1 || x1 > x2 || k1 > k2){
        return "NO";
    }

    if(v2 < v1){
        while (k1 < k2){
            k1 += v1;
            k2 += v2;
            if(k1 == k2){
                return "YES";
            }else if(k1 > k2){
                return "NO";
            }
        }
    }

    if(k1 == k2){
        return "YES";
    }
}

function kangaroo2(x1, v1, x2, v2){
    let defState = "NO";

    if((x1 - x2) % (v1 - v2) == 0){
        defState = "YES";
        return defState;
    }else{
        return defState;
    }
}

console.log(kangaroo2(0, 3, 4, 2));