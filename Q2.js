// ﻿

// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


function Anagram(s) {
    let len = s.length;
    let anagram = {};
    for (let i = 0; i < len; i++) {
        let sortStr = s[i].split('').sort().join('');
        if (!anagram[sortStr]) {
            anagram[sortStr] = [s[i]];
        } else {
            anagram[sortStr].push(s[i]);
        }
    }
    return Object.values(anagram);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(Anagram(strs));
