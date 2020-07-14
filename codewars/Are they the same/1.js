function comp(array1, array2) {
    //your code here
    if (array1 === [] || array2 === [] || array1 === null || array2 === null)
        return false;
    return array1.sort((a, b) => a - b).map(m => m * m).join() === array2.sort((a, b) => a - b).join()

}