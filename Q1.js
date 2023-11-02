
// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer formed by reversing the digits of 'x' without using any built-in methods for reversal. After reversing the digits, determine whether the resulting number has any prime factors. If it does have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."

function isPrime(numb) {
    let i = 5;
    if (numb <= 1)  return false;
    
    if (numb <= 3) return true;
    
    if (numb % 2 === 0 || numb % 3 === 0)  return false;

   
    while (i * i <= numb) {
        if (numb% i === 0 || numb % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function revPrimeFactor(x) {
    if (x <= 0) {
        return "Please provide a positive integer.";
    }

    function revInt(numb) {
        let reversedNum = 0;
        while (numb > 0) {
            reversedNum = reversedNum * 10 + numb % 10;
            numb = Math.floor(numb / 10);
        }
        return reversedNum;
    }

    const revNumb = revInt(x);

    function primeFactors(numb) {
        const primeFactors = [];
        for (let i = 2; i <= Math.sqrt(numb); i++) {
            while (numb % i === 0) {
                if (isPrime(i)) {
                    primeFactors.push(i);
                }
                numb /= i;
            }
        }
        if (numb> 1 && isPrime(numb)) {
            primeFactors.push(numb);
        }
        return primeFactors;
    }

    const primeFactor = primeFactors(revNumb);

    if (primeFactor.length > 0) {
        return ["Yes", primeFactor];
    } else {
        return "No";
    }
}


console.log(revPrimeFactor(123));   
console.log(revPrimeFactor(1500));  
console.log(revPrimeFactor(1000));  
console.log(revPrimeFactor(0)); 