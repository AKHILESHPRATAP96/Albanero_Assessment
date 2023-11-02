// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method


function findKthLargest(nums, k) {
    if (k <= 0 || k > nums.length) {
      return -1; // Invalid K value
    }
  
    while (true) {
      let max = nums[0];
      let maxIndex = 0;
  
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
          max = nums[i];
          maxIndex = i;
        }
      }
  
      if (k === 1) {
        return max;
      } else {
        nums.splice(maxIndex, 1);
        k--;
      }
    }
  }
  
  // Test case
  console.log(findKthLargest([10, 4, 12, 9, 87, 34], 2)); // Output: 34
  