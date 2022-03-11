function pageCount(n, p) {
    // Write your code here
    let totalPage = n / 2;
    let targetPageFromFront = p / 2;
    let targetPageFromBack = totalPage - targetPageFromFront;

    return Math.floor(Math.min(targetPageFromFront, targetPageFromBack));
}

console.info(pageCount(8, 7));