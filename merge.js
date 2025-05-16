function mergeSort(arr) {
    //console.log(arr);
    if (arr.length <= 1) return arr;

    if (arr.length > 1) {
        let halfArray = Math.floor(arr.length / 2);
        //math ceil???

        let leftHalf = mergeSort(arr.slice(0, halfArray));
        let rightHalf = mergeSort(arr.slice(halfArray));



        let k = 0;
        let i = 0;
        let j = 0;
        let result = [];

        while (i < leftHalf.length && j < rightHalf.length) {
            if (leftHalf[i] < rightHalf[j]) {
                result.push(leftHalf[i]);
                i++;
            }
            else {
                result.push(rightHalf[j]);
                j++;
            }
        }
        //console.log(arr);
        return result.concat(leftHalf.slice(i)).concat(rightHalf.slice(j));
    }

}

console.log(mergeSort([6, 5, 12, 10, 9, 1]));
console.log("hello");