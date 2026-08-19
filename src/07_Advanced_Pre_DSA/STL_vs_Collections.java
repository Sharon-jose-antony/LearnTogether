/**
 * Level 7: Advanced Pre-DSA & Standard Libraries
 * File: STL_vs_Collections.java
 * Topic: Java Collections (ArrayList, HashMap, PriorityQueue, Collections.sort with Lambda)
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.PriorityQueue;

public class STL_vs_Collections {
    public static void main(String[] args) {
        System.out.println("--- 1. ArrayList & Collections.sort with Custom Lambda ---");
        ArrayList<Integer> nums = new ArrayList<>();
        nums.add(40); nums.add(10); nums.add(30); nums.add(20);

        // Sort descending using lambda comparator
        Collections.sort(nums, (a, b) -> b - a);

        for (int x : nums) System.out.print(x + " ");
        System.out.println();

        System.out.println("\n--- 2. HashMap (O(1) Hash Table) ---");
        HashMap<String, Integer> freq = new HashMap<>();
        freq.put("apple", 3);
        freq.put("banana", 5);
        System.out.println("Apple count: " + freq.get("apple"));

        System.out.println("\n--- 3. PriorityQueue (Min-Heap Default) ---");
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.add(10);
        minHeap.add(5);
        minHeap.add(20);

        System.out.println("Min-Heap peek: " + minHeap.peek()); // 5
    }
}
