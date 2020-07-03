let array = [1,21,5,8,38,18,9];

function bSort(array) {
    for(let i = array.length - 1; i > 0; i --){
        for(let j = 0; j < i; j ++) {
            if(array[j] > array[j + 1]) {
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

function swap(array, left, right) {
    let rightValue = array[right];
    array[right] = array[left];
    array[left] = rightValue;
}
console.log(bSort(array));