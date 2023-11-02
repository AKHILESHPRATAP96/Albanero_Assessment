// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function largestNumber(nums) {
    
    const numStr = nums.map(num => num.toString());
    console.log(numStr)
  
  
    numStr.sort(function(a, b) {
      const order1 = a + b;
      const order2 = b + a;
      if (order2 > order1) {
        return 1;
      } else {
        return -1;
      }
    });
  
 
    if (numStr[0] === '0') {
      return '0';
    }

    return numStr.join('');
  }
  
  //  cases
  console.log(largestNumber([10, 2])); 
  console.log(largestNumber([3, 30, 34, 5, 9])); 
  