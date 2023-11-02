// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false
// —-------------------



function Word(string,wordArray){
    for (let i = 0; i < wordArray.length; i++) {
        if (string.includes(wordArray[i])) {
            const index = string.indexOf(wordArray[i]);
            string = string.slice(0, index) + string.slice(index + wordArray[i].length);
        } else {
            return false;
        }
    }
    return true;
}


//cases
let s1 = "catsandog"
let wordArray1 = ["cats","dog","sand","and","cat"]

s2 = "applepenapple"
let wordArray2 = ["apple","pen"]
console.log(Word(s1,wordArray1))
console.log(Word(s2,wordArray2))