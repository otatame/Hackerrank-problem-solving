function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleDrop = 0;
    let orangeDrop = 0;

    for (let m of apples){
        const count = a + m;
        if (count >= s && count <= t){
            appleDrop++;
        }
    }

    for (let n of oranges){
        const count = b + n;
        if (count >= s && count <= t){
            orangeDrop++;
        }
    }

    console.log(appleDrop);
    console.log(orangeDrop);
    return;
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);