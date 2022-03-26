function findMinMax(arr,size) {
    
    minValue = Infinity;
    maxValue = -Infinity;

    for (item of array) {
        if (item < minValue)
            minValue = item;

        if (item > maxValue)
            maxValue = item;
    }
    console.log(minValue);
    console.log(maxValue);
}

    let array = [50, 60, 20, 10, 40];
    let n=array.length;
    findMinMax(array,n);