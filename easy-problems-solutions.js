/**
 * 100 Easy LeetCode Algorithm Problems - JavaScript Solutions
 * =============================================================
 */

// ============================================================================
// 1. Two Sum (Problem #1)
// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.
// ============================================================================
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// ============================================================================
// 2. Palindrome Number (Problem #9)
// Given an integer x, return true if x is a palindrome.
// ============================================================================
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// ============================================================================
// 3. Roman to Integer (Problem #13)
// Convert a roman numeral to an integer.
// ============================================================================
function romanToInt(s) {
    const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
            result -= values[s[i]];
        } else {
            result += values[s[i]];
        }
    }
    return result;
}

// ============================================================================
// 4. Longest Common Prefix (Problem #14)
// Find the longest common prefix string amongst an array of strings.
// ============================================================================
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// ============================================================================
// 5. Valid Parentheses (Problem #20)
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// ============================================================================
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// ============================================================================
// 6. Merge Two Sorted Lists (Problem #21)
// Merge two sorted linked lists and return it as a sorted list.
// ============================================================================
function mergeTwoLists(list1, list2) {
    const dummy = { val: 0, next: null };
    let current = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
}

// ============================================================================
// 7. Remove Duplicates from Sorted Array (Problem #26)
// Remove duplicates in-place such that each unique element appears only once.
// ============================================================================
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// ============================================================================
// 8. Remove Element (Problem #27)
// Remove all occurrences of val in nums in-place.
// ============================================================================
function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// ============================================================================
// 9. Find the Index of the First Occurrence in a String (Problem #28)
// Return the index of the first occurrence of needle in haystack.
// ============================================================================
function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}

// ============================================================================
// 10. Search Insert Position (Problem #35)
// Given a sorted array and a target value, return the index if found.
// ============================================================================
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}

// ============================================================================
// 11. Length of Last Word (Problem #58)
// Given a string s, return the length of the last word.
// ============================================================================
function lengthOfLastWord(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
}

// ============================================================================
// 12. Plus One (Problem #66)
// Increment a large integer represented as an array of digits by one.
// ============================================================================
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
}

// ============================================================================
// 13. Add Binary (Problem #67)
// Given two binary strings a and b, return their sum as a binary string.
// ============================================================================
function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const sum = (i >= 0 ? parseInt(a[i--]) : 0) + (j >= 0 ? parseInt(b[j--]) : 0) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    return result;
}

// ============================================================================
// 14. Sqrt(x) (Problem #69)
// Given a non-negative integer x, return the square root of x rounded down.
// ============================================================================
function mySqrt(x) {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

// ============================================================================
// 15. Climbing Stairs (Problem #70)
// You are climbing a staircase. It takes n steps. How many distinct ways?
// ============================================================================
function climbStairs(n) {
    if (n <= 2) return n;
    let prev1 = 1, prev2 = 2;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2;
}

// ============================================================================
// 16. Remove Duplicates from Sorted List (Problem #83)
// Given the head of a sorted linked list, delete all duplicates.
// ============================================================================
function deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

// ============================================================================
// 17. Merge Sorted Array (Problem #88)
// Merge nums2 into nums1 as one sorted array.
// ============================================================================
function merge(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--];
        } else {
            nums1[p--] = nums2[p2--];
        }
    }
}

// ============================================================================
// 18. Binary Tree Inorder Traversal (Problem #94)
// Given the root of a binary tree, return the inorder traversal.
// ============================================================================
function inorderTraversal(root) {
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };
    traverse(root);
    return result;
}

// ============================================================================
// 19. Same Tree (Problem #100)
// Given the roots of two binary trees, check if they are the same.
// ============================================================================
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// ============================================================================
// 20. Symmetric Tree (Problem #101)
// Given the root of a binary tree, check whether it is symmetric.
// ============================================================================
function isSymmetric(root) {
    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };
    return isMirror(root, root);
}

// ============================================================================
// 21. Maximum Depth of Binary Tree (Problem #104)
// Given the root of a binary tree, return its maximum depth.
// ============================================================================
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// ============================================================================
// 22. Convert Sorted Array to Binary Search Tree (Problem #108)
// Given a sorted array, convert it to a height-balanced BST.
// ============================================================================
function sortedArrayToBST(nums) {
    const build = (left, right) => {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = { val: nums[mid], left: null, right: null };
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    };
    return build(0, nums.length - 1);
}

// ============================================================================
// 23. Balanced Binary Tree (Problem #110)
// Determine if a binary tree is height-balanced.
// ============================================================================
function isBalanced(root) {
    const getHeight = (node) => {
        if (!node) return 0;
        const left = getHeight(node.left);
        const right = getHeight(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    };
    return getHeight(root) !== -1;
}

// ============================================================================
// 24. Minimum Depth of Binary Tree (Problem #111)
// Given a binary tree, find its minimum depth.
// ============================================================================
function minDepth(root) {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

// ============================================================================
// 25. Path Sum (Problem #112)
// Check if tree has root-to-leaf path with given target sum.
// ============================================================================
function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

// ============================================================================
// 26. Pascal's Triangle (Problem #118)
// Given numRows, generate the first numRows of Pascal's triangle.
// ============================================================================
function generate(numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
}

// ============================================================================
// 27. Pascal's Triangle II (Problem #119)
// Given rowIndex, return the rowIndex-th row of the Pascal's triangle.
// ============================================================================
function getRow(rowIndex) {
    const row = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
}

// ============================================================================
// 28. Best Time to Buy and Sell Stock (Problem #121)
// Find the maximum profit from buying and selling stock.
// ============================================================================
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

// ============================================================================
// 29. Valid Palindrome (Problem #125)
// Given a string, determine if it is a palindrome (alphanumeric only).
// ============================================================================
function isPalindromeString(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

// ============================================================================
// 30. Single Number (Problem #136)
// Find the element that appears only once (others appear twice).
// ============================================================================
function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

// ============================================================================
// 31. Linked List Cycle (Problem #141)
// Given head, determine if the linked list has a cycle.
// ============================================================================
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// ============================================================================
// 32. Binary Tree Preorder Traversal (Problem #144)
// Given the root of a binary tree, return the preorder traversal.
// ============================================================================
function preorderTraversal(root) {
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };
    traverse(root);
    return result;
}

// ============================================================================
// 33. Binary Tree Postorder Traversal (Problem #145)
// Given the root of a binary tree, return the postorder traversal.
// ============================================================================
function postorderTraversal(root) {
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    };
    traverse(root);
    return result;
}

// ============================================================================
// 34. Intersection of Two Linked Lists (Problem #160)
// Find the node at which two singly linked lists intersect.
// ============================================================================
function getIntersectionNode(headA, headB) {
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
}

// ============================================================================
// 35. Two Sum II - Input Array Is Sorted (Problem #167)
// Find two numbers that add up to a specific target number.
// ============================================================================
function twoSumII(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        else right--;
    }
    return [];
}

// ============================================================================
// 36. Majority Element (Problem #169)
// Find the majority element that appears more than n/2 times.
// ============================================================================
function majorityElement(nums) {
    let candidate = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

// ============================================================================
// 37. Excel Sheet Column Number (Problem #171)
// Given a string columnTitle, return its corresponding column number.
// ============================================================================
function titleToNumber(columnTitle) {
    let result = 0;
    for (const char of columnTitle) {
        result = result * 26 + (char.charCodeAt(0) - 64);
    }
    return result;
}

// ============================================================================
// 38. Excel Sheet Column Title (Problem #168)
// Given a column number, return its corresponding column title.
// ============================================================================
function convertToTitle(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        result = String.fromCharCode(65 + (columnNumber % 26)) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
}

// ============================================================================
// 39. Factorial Trailing Zeroes (Problem #172)
// Given an integer n, return the number of trailing zeroes in n!.
// ============================================================================
function trailingZeroes(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

// ============================================================================
// 40. Rotate Array (Problem #189)
// Rotate the array to the right by k steps.
// ============================================================================
function rotate(nums, k) {
    k = k % nums.length;
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}

// ============================================================================
// 41. Reverse Bits (Problem #190)
// Reverse bits of a given 32 bits unsigned integer.
// ============================================================================
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }
    return result >>> 0;
}

// ============================================================================
// 42. Number of 1 Bits (Problem #191)
// Return the number of '1' bits in the binary representation.
// ============================================================================
function hammingWeight(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
}

// ============================================================================
// 43. Happy Number (Problem #202)
// Determine if n is a happy number.
// ============================================================================
function isHappy(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = n.toString().split('').reduce((sum, d) => sum + d * d, 0);
    }
    return n === 1;
}

// ============================================================================
// 44. Remove Linked List Elements (Problem #203)
// Remove all elements from a linked list that have a specific value.
// ============================================================================
function removeElements(head, val) {
    const dummy = { next: head };
    let current = dummy;
    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
}

// ============================================================================
// 45. Isomorphic Strings (Problem #205)
// Determine if two strings are isomorphic.
// ============================================================================
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    const mapST = new Map(), mapTS = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i], charT = t[i];
        if ((mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
            return false;
        }
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }
    return true;
}

// ============================================================================
// 46. Reverse Linked List (Problem #206)
// Reverse a singly linked list.
// ============================================================================
function reverseList(head) {
    let prev = null, current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// ============================================================================
// 47. Contains Duplicate (Problem #217)
// Given an array, return true if any value appears at least twice.
// ============================================================================
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// ============================================================================
// 48. Contains Duplicate II (Problem #219)
// Check if there are two indices i and j with nums[i] === nums[j] and |i-j| <= k.
// ============================================================================
function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}

// ============================================================================
// 49. Invert Binary Tree (Problem #226)
// Invert a binary tree.
// ============================================================================
function invertTree(root) {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}

// ============================================================================
// 50. Summary Ranges (Problem #228)
// Return the smallest sorted list of ranges that cover all numbers.
// ============================================================================
function summaryRanges(nums) {
    const result = [];
    let i = 0;
    while (i < nums.length) {
        const start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        if (start === nums[i]) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[i]}`);
        }
        i++;
    }
    return result;
}

// ============================================================================
// 51. Power of Two (Problem #231)
// Given an integer n, return true if it is a power of two.
// ============================================================================
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// ============================================================================
// 52. Palindrome Linked List (Problem #234)
// Given the head of a singly linked list, return true if it is a palindrome.
// ============================================================================
function isPalindromeList(head) {
    const vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    let left = 0, right = vals.length - 1;
    while (left < right) {
        if (vals[left] !== vals[right]) return false;
        left++;
        right--;
    }
    return true;
}

// ============================================================================
// 53. Lowest Common Ancestor of a BST (Problem #235)
// Find the lowest common ancestor of two given nodes in a BST.
// ============================================================================
function lowestCommonAncestor(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}

// ============================================================================
// 54. Delete Node in a Linked List (Problem #237)
// Delete a node (except the tail) in a singly linked list.
// ============================================================================
function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

// ============================================================================
// 55. Valid Anagram (Problem #242)
// Given two strings, return true if t is an anagram of s.
// ============================================================================
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// ============================================================================
// 56. Binary Tree Paths (Problem #257)
// Given a binary tree, return all root-to-leaf paths.
// ============================================================================
function binaryTreePaths(root) {
    const result = [];
    const dfs = (node, path) => {
        if (!node) return;
        path += node.val;
        if (!node.left && !node.right) {
            result.push(path);
        } else {
            dfs(node.left, path + '->');
            dfs(node.right, path + '->');
        }
    };
    dfs(root, '');
    return result;
}

// ============================================================================
// 57. Add Digits (Problem #258)
// Given an integer num, repeatedly add its digits until result is single digit.
// ============================================================================
function addDigits(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
}

// ============================================================================
// 58. Ugly Number (Problem #263)
// Check whether a given number is an ugly number (only 2, 3, 5 as prime factors).
// ============================================================================
function isUgly(n) {
    if (n <= 0) return false;
    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n === 1;
}

// ============================================================================
// 59. Missing Number (Problem #268)
// Given an array containing n distinct numbers in [0, n], find the missing one.
// ============================================================================
function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// ============================================================================
// 60. First Bad Version (Problem #278)
// Find the first bad version given an API isBadVersion(version).
// ============================================================================
function firstBadVersion(isBadVersion) {
    return function(n) {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
}

// ============================================================================
// 61. Move Zeroes (Problem #283)
// Move all 0's to the end while maintaining the relative order of non-zero elements.
// ============================================================================
function moveZeroes(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
            insertPos++;
        }
    }
}

// ============================================================================
// 62. Word Pattern (Problem #290)
// Given a pattern and a string, check if s follows the same pattern.
// ============================================================================
function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const charToWord = new Map(), wordToChar = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i], word = words[i];
        if ((charToWord.has(char) && charToWord.get(char) !== word) ||
            (wordToChar.has(word) && wordToChar.get(word) !== char)) {
            return false;
        }
        charToWord.set(char, word);
        wordToChar.set(word, char);
    }
    return true;
}

// ============================================================================
// 63. Nim Game (Problem #292)
// Given the number of stones, determine if you can win the game.
// ============================================================================
function canWinNim(n) {
    return n % 4 !== 0;
}

// ============================================================================
// 64. Range Sum Query - Immutable (Problem #303)
// Calculate the sum of the elements between indices left and right inclusive.
// ============================================================================
class NumArray {
    constructor(nums) {
        this.prefix = [0];
        for (const num of nums) {
            this.prefix.push(this.prefix[this.prefix.length - 1] + num);
        }
    }
    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}

// ============================================================================
// 65. Power of Three (Problem #326)
// Given an integer n, return true if it is a power of three.
// ============================================================================
function isPowerOfThree(n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
}

// ============================================================================
// 66. Power of Four (Problem #342)
// Given an integer n, return true if it is a power of four.
// ============================================================================
function isPowerOfFour(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}

// ============================================================================
// 67. Reverse String (Problem #344)
// Write a function that reverses a string in-place.
// ============================================================================
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// ============================================================================
// 68. Reverse Vowels of a String (Problem #345)
// Reverse only the vowels of a string.
// ============================================================================
function reverseVowels(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let left = 0, right = arr.length - 1;
    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
}

// ============================================================================
// 69. Intersection of Two Arrays (Problem #349)
// Given two arrays, return an array of their intersection.
// ============================================================================
function intersection(nums1, nums2) {
    return [...new Set(nums1)].filter(num => nums2.includes(num));
}

// ============================================================================
// 70. Intersection of Two Arrays II (Problem #350)
// Return the intersection of two arrays including duplicates.
// ============================================================================
function intersect(nums1, nums2) {
    const count = {};
    for (const num of nums1) {
        count[num] = (count[num] || 0) + 1;
    }
    const result = [];
    for (const num of nums2) {
        if (count[num] > 0) {
            result.push(num);
            count[num]--;
        }
    }
    return result;
}

// ============================================================================
// 71. Valid Perfect Square (Problem #367)
// Given a positive integer num, return true if num is a perfect square.
// ============================================================================
function isPerfectSquare(num) {
    let left = 1, right = num;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if (square === num) return true;
        if (square < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

// ============================================================================
// 72. Guess Number Higher or Lower (Problem #374)
// Guess the picked number using the guess API.
// ============================================================================
function guessNumber(guess) {
    return function(n) {
        let left = 1, right = n;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const result = guess(mid);
            if (result === 0) return mid;
            if (result === -1) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    };
}

// ============================================================================
// 73. Ransom Note (Problem #383)
// Return true if ransomNote can be constructed from magazine.
// ============================================================================
function canConstruct(ransomNote, magazine) {
    const count = {};
    for (const char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of ransomNote) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// ============================================================================
// 74. First Unique Character in a String (Problem #387)
// Find the first non-repeating character in a string.
// ============================================================================
function firstUniqChar(s) {
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }
    return -1;
}

// ============================================================================
// 75. Find the Difference (Problem #389)
// Find the added character in string t compared to string s.
// ============================================================================
function findTheDifference(s, t) {
    let result = 0;
    for (const char of s) result ^= char.charCodeAt(0);
    for (const char of t) result ^= char.charCodeAt(0);
    return String.fromCharCode(result);
}

// ============================================================================
// 76. Is Subsequence (Problem #392)
// Check if s is a subsequence of t.
// ============================================================================
function isSubsequence(s, t) {
    let i = 0;
    for (const char of t) {
        if (i < s.length && char === s[i]) i++;
    }
    return i === s.length;
}

// ============================================================================
// 77. Sum of Left Leaves (Problem #404)
// Find the sum of all left leaves in a given binary tree.
// ============================================================================
function sumOfLeftLeaves(root) {
    if (!root) return 0;
    let sum = 0;
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }
    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

// ============================================================================
// 78. Convert a Number to Hexadecimal (Problem #405)
// Convert an integer to a hexadecimal string.
// ============================================================================
function toHex(num) {
    if (num === 0) return '0';
    if (num < 0) num = 0xffffffff + num + 1;
    const hex = '0123456789abcdef';
    let result = '';
    while (num > 0) {
        result = hex[num % 16] + result;
        num = Math.floor(num / 16);
    }
    return result;
}

// ============================================================================
// 79. Longest Palindrome (Problem #409)
// Find the length of the longest palindrome that can be built with letters.
// ============================================================================
function longestPalindrome(s) {
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    let length = 0;
    let hasOdd = false;
    for (const c in count) {
        length += Math.floor(count[c] / 2) * 2;
        if (count[c] % 2 === 1) hasOdd = true;
    }
    return hasOdd ? length + 1 : length;
}

// ============================================================================
// 80. Fizz Buzz (Problem #412)
// Return an array of FizzBuzz for numbers 1 to n.
// ============================================================================
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(String(i));
    }
    return result;
}

// ============================================================================
// 81. Third Maximum Number (Problem #414)
// Given an integer array nums, return the third distinct maximum number.
// ============================================================================
function thirdMax(nums) {
    const unique = [...new Set(nums)].sort((a, b) => b - a);
    return unique.length >= 3 ? unique[2] : unique[0];
}

// ============================================================================
// 82. Add Strings (Problem #415)
// Given two non-negative integers as strings, return the sum as a string.
// ============================================================================
function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const sum = (i >= 0 ? parseInt(num1[i--]) : 0) + (j >= 0 ? parseInt(num2[j--]) : 0) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }
    return result;
}

// ============================================================================
// 83. Number of Segments in a String (Problem #434)
// Count the number of segments in a string.
// ============================================================================
function countSegments(s) {
    return s.split(' ').filter(segment => segment.length > 0).length;
}

// ============================================================================
// 84. Arranging Coins (Problem #441)
// Return the number of complete rows of the staircase you can form.
// ============================================================================
function arrangeCoins(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
}

// ============================================================================
// 85. Find All Numbers Disappeared in an Array (Problem #448)
// Find all the elements in [1, n] that do not appear in the array.
// ============================================================================
function findDisappearedNumbers(nums) {
    const set = new Set(nums);
    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) result.push(i);
    }
    return result;
}

// ============================================================================
// 86. Assign Cookies (Problem #455)
// Maximize the number of content children with given greed factors and cookies.
// ============================================================================
function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let child = 0;
    for (let cookie = 0; cookie < s.length && child < g.length; cookie++) {
        if (s[cookie] >= g[child]) child++;
    }
    return child;
}

// ============================================================================
// 87. Repeated Substring Pattern (Problem #459)
// Check if the string can be constructed by repeating a substring.
// ============================================================================
function repeatedSubstringPattern(s) {
    return (s + s).slice(1, -1).includes(s);
}

// ============================================================================
// 88. Hamming Distance (Problem #461)
// Return the Hamming distance between two integers.
// ============================================================================
function hammingDistance(x, y) {
    let xor = x ^ y;
    let distance = 0;
    while (xor) {
        distance += xor & 1;
        xor >>= 1;
    }
    return distance;
}

// ============================================================================
// 89. Island Perimeter (Problem #463)
// Find the perimeter of the island represented in grid.
// ============================================================================
function islandPerimeter(grid) {
    let perimeter = 0;
    const rows = grid.length, cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
                if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2;
                if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;
            }
        }
    }
    return perimeter;
}

// ============================================================================
// 90. Number Complement (Problem #476)
// Find the complement of an integer.
// ============================================================================
function findComplement(num) {
    let mask = 1;
    while (mask < num) mask = (mask << 1) | 1;
    return num ^ mask;
}

// ============================================================================
// 91. License Key Formatting (Problem #482)
// Format a license key string with groups of K characters.
// ============================================================================
function licenseKeyFormatting(s, k) {
    const cleaned = s.replace(/-/g, '').toUpperCase();
    const result = [];
    for (let i = cleaned.length; i > 0; i -= k) {
        result.unshift(cleaned.slice(Math.max(0, i - k), i));
    }
    return result.join('-');
}

// ============================================================================
// 92. Max Consecutive Ones (Problem #485)
// Find the maximum number of consecutive 1's in a binary array.
// ============================================================================
function findMaxConsecutiveOnes(nums) {
    let max = 0, current = 0;
    for (const num of nums) {
        if (num === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 0;
        }
    }
    return max;
}

// ============================================================================
// 93. Construct the Rectangle (Problem #492)
// Design a rectangular web page with area closest to a square.
// ============================================================================
function constructRectangle(area) {
    let width = Math.floor(Math.sqrt(area));
    while (area % width !== 0) width--;
    return [area / width, width];
}

// ============================================================================
// 94. Next Greater Element I (Problem #496)
// Find the next greater element for each element in nums1.
// ============================================================================
function nextGreaterElement(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    return nums1.map(num => map.get(num) ?? -1);
}

// ============================================================================
// 95. Keyboard Row (Problem #500)
// Return words that can be typed using letters of only one row on the keyboard.
// ============================================================================
function findWords(words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    return words.filter(word => {
        const lower = word.toLowerCase();
        return rows.some(row => lower.split('').every(char => row.includes(char)));
    });
}

// ============================================================================
// 96. Base 7 (Problem #504)
// Convert an integer to its base 7 string representation.
// ============================================================================
function convertToBase7(num) {
    if (num === 0) return '0';
    const isNegative = num < 0;
    num = Math.abs(num);
    let result = '';
    while (num > 0) {
        result = (num % 7) + result;
        num = Math.floor(num / 7);
    }
    return isNegative ? '-' + result : result;
}

// ============================================================================
// 97. Relative Ranks (Problem #506)
// Find the relative ranks of athletes based on their scores.
// ============================================================================
function findRelativeRanks(score) {
    const sorted = [...score].sort((a, b) => b - a);
    const rankMap = new Map();
    sorted.forEach((s, i) => {
        if (i === 0) rankMap.set(s, 'Gold Medal');
        else if (i === 1) rankMap.set(s, 'Silver Medal');
        else if (i === 2) rankMap.set(s, 'Bronze Medal');
        else rankMap.set(s, String(i + 1));
    });
    return score.map(s => rankMap.get(s));
}

// ============================================================================
// 98. Perfect Number (Problem #507)
// Check whether a number is a perfect number.
// ============================================================================
function checkPerfectNumber(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}

// ============================================================================
// 99. Detect Capital (Problem #520)
// Check if the usage of capitals in a word is correct.
// ============================================================================
function detectCapitalUse(word) {
    return word === word.toUpperCase() ||
           word === word.toLowerCase() ||
           (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase());
}

// ============================================================================
// 100. Longest Uncommon Subsequence I (Problem #521)
// Find the longest uncommon subsequence between two strings.
// ============================================================================
function findLUSlength(a, b) {
    return a === b ? -1 : Math.max(a.length, b.length);
}

// ============================================================================
// Export all functions for testing
// ============================================================================
module.exports = {
    twoSum,
    isPalindrome,
    romanToInt,
    longestCommonPrefix,
    isValid,
    mergeTwoLists,
    removeDuplicates,
    removeElement,
    strStr,
    searchInsert,
    lengthOfLastWord,
    plusOne,
    addBinary,
    mySqrt,
    climbStairs,
    deleteDuplicates,
    merge,
    inorderTraversal,
    isSameTree,
    isSymmetric,
    maxDepth,
    sortedArrayToBST,
    isBalanced,
    minDepth,
    hasPathSum,
    generate,
    getRow,
    maxProfit,
    isPalindromeString,
    singleNumber,
    hasCycle,
    preorderTraversal,
    postorderTraversal,
    getIntersectionNode,
    twoSumII,
    majorityElement,
    titleToNumber,
    convertToTitle,
    trailingZeroes,
    rotate,
    reverseBits,
    hammingWeight,
    isHappy,
    removeElements,
    isIsomorphic,
    reverseList,
    containsDuplicate,
    containsNearbyDuplicate,
    invertTree,
    summaryRanges,
    isPowerOfTwo,
    isPalindromeList,
    lowestCommonAncestor,
    deleteNode,
    isAnagram,
    binaryTreePaths,
    addDigits,
    isUgly,
    missingNumber,
    firstBadVersion,
    moveZeroes,
    wordPattern,
    canWinNim,
    NumArray,
    isPowerOfThree,
    isPowerOfFour,
    reverseString,
    reverseVowels,
    intersection,
    intersect,
    isPerfectSquare,
    guessNumber,
    canConstruct,
    firstUniqChar,
    findTheDifference,
    isSubsequence,
    sumOfLeftLeaves,
    toHex,
    longestPalindrome,
    fizzBuzz,
    thirdMax,
    addStrings,
    countSegments,
    arrangeCoins,
    findDisappearedNumbers,
    findContentChildren,
    repeatedSubstringPattern,
    hammingDistance,
    islandPerimeter,
    findComplement,
    licenseKeyFormatting,
    findMaxConsecutiveOnes,
    constructRectangle,
    nextGreaterElement,
    findWords,
    convertToBase7,
    findRelativeRanks,
    checkPerfectNumber,
    detectCapitalUse,
    findLUSlength
};

