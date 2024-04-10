function fibs(number) {
    let arr = [];
    while (arr.length < number) {
        if (arr.length == 0) {
            arr[0] = 0;
        } else if (arr.length == 1) {
            arr[1] = 1;
        } else {
            arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
        }
    }
    return arr;
}


function fibsRec(number, arr = []) {
    if (arr.length == number) {
        return arr;
    }
    if (arr.length == 0) {
            arr[0] = 0;
    } else if (arr.length == 1) {
            arr[1] = 1;
    } else {
            arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
    }
    return fibsRec(number, arr);
}

console.log(fibsRec(8));

