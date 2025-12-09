/**
 * Medium LeetCode Algorithm Problems - JavaScript Solutions
 * ==========================================================
 */

// ============================================================================
// 1. Add Two Numbers (Problem #2)
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each node contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807
//
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
//
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explanation: 9999999 + 9999 = 10009998
// ============================================================================

/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Creates a linked list from an array
 * @param {number[]} arr - Array of numbers
 * @returns {ListNode} - Head of the linked list
 */
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

/**
 * Converts a linked list to an array
 * @param {ListNode} head - Head of the linked list
 * @returns {number[]} - Array representation
 */
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

/**
 * Add Two Numbers
 * @param {ListNode} l1 - First linked list
 * @param {ListNode} l2 - Second linked list
 * @returns {ListNode} - Sum as a linked list
 * 
 * Time Complexity: O(max(m, n)) where m and n are lengths of l1 and l2
 * Space Complexity: O(max(m, n)) for the result linked list
 */
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        // Get values from both lists (0 if null)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        // Calculate sum and new carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        // Create new node with digit
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        // Move to next nodes
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
}

// ============================================================================
// Test Cases
// ============================================================================
function testAddTwoNumbers() {
    console.log('Testing Add Two Numbers (Problem #2)');
    console.log('====================================\n');
    
    // Test Case 1: 342 + 465 = 807
    const l1_1 = createLinkedList([2, 4, 3]);
    const l2_1 = createLinkedList([5, 6, 4]);
    const result1 = addTwoNumbers(l1_1, l2_1);
    console.log('Test 1: [2,4,3] + [5,6,4]');
    console.log('Expected: [7,0,8]');
    console.log('Got:', linkedListToArray(result1));
    console.log('Pass:', JSON.stringify(linkedListToArray(result1)) === JSON.stringify([7, 0, 8]));
    console.log();
    
    // Test Case 2: 0 + 0 = 0
    const l1_2 = createLinkedList([0]);
    const l2_2 = createLinkedList([0]);
    const result2 = addTwoNumbers(l1_2, l2_2);
    console.log('Test 2: [0] + [0]');
    console.log('Expected: [0]');
    console.log('Got:', linkedListToArray(result2));
    console.log('Pass:', JSON.stringify(linkedListToArray(result2)) === JSON.stringify([0]));
    console.log();
    
    // Test Case 3: 9999999 + 9999 = 10009998
    const l1_3 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2_3 = createLinkedList([9, 9, 9, 9]);
    const result3 = addTwoNumbers(l1_3, l2_3);
    console.log('Test 3: [9,9,9,9,9,9,9] + [9,9,9,9]');
    console.log('Expected: [8,9,9,9,0,0,0,1]');
    console.log('Got:', linkedListToArray(result3));
    console.log('Pass:', JSON.stringify(linkedListToArray(result3)) === JSON.stringify([8, 9, 9, 9, 0, 0, 0, 1]));
    console.log();
    
    // Test Case 4: Different lengths - 99 + 1 = 100
    const l1_4 = createLinkedList([9, 9]);
    const l2_4 = createLinkedList([1]);
    const result4 = addTwoNumbers(l1_4, l2_4);
    console.log('Test 4: [9,9] + [1]');
    console.log('Expected: [0,0,1]');
    console.log('Got:', linkedListToArray(result4));
    console.log('Pass:', JSON.stringify(linkedListToArray(result4)) === JSON.stringify([0, 0, 1]));
}

// Run tests if this file is executed directly
if (require.main === module) {
    testAddTwoNumbers();
}

// ============================================================================
// Export
// ============================================================================
module.exports = {
    ListNode,
    createLinkedList,
    linkedListToArray,
    addTwoNumbers
};

