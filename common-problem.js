//factorial
function fact(n){
  if (n === 0) return 1
  return n * fact(n-1)
}

// fibonacci


function fibo(n) {
  if (n <= 1) return n
  return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6));
