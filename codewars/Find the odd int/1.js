function findOdd(A) {

    //   let ans = A[0];
    //   if(!A) return 0
    //   for(let i = 1 ;i < A.length; i++){
    //     ans = ans ^ A[i];
    //   }
    //   return ans

    return A.reduce((a, b) => a ^ b);
}