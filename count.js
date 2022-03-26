function CountingEvenOdd(arr, arr_size) {
    let zero = 0;
    let odd = 0;
    let even = 0;

    

    for (let i = 0; i < arr_size; i++) {
        if (arr[i] == 0) {
            zero += 1;
        }
        else if (arr[i] % 2 == 0) {
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    console.log(zero);
    console.log(even);
    console.log(odd);
}


let arr = [2, 3, 1, 0, 4, 6, 8];
let n = arr.length;
CountingEvenOdd(arr,n);