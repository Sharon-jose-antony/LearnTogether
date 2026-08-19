/**
 * Level 7: Advanced Pre-DSA & Standard Libraries
 * File: STL_vs_Collections.cpp
 * Topic: C++ STL Containers (vector, map, priority_queue, sort + custom lambda comparator)
 */

#include <iostream>
#include <vector>
#include <map>
#include <queue>
#include <algorithm>

int main() {
    std::cout << "--- 1. Vector & std::sort with Custom Lambda ---\n";
    std::vector<int> nums = {40, 10, 30, 20};
    
    // Sort descending using lambda comparator
    std::sort(nums.begin(), nums.end(), [](int a, int b) {
        return a > b;
    });

    for (int x : nums) std::cout << x << " ";
    std::cout << "\n";

    std::cout << "\n--- 2. Unordered Map (O(1) Hash Table) ---\n";
    std::map<std::string, int> freq;
    freq["apple"] = 3;
    freq["banana"] = 5;
    std::cout << "Apple count: " << freq["apple"] << "\n";

    std::cout << "\n--- 3. Priority Queue (Min-Heap) ---\n";
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    minHeap.push(10);
    minHeap.push(5);
    minHeap.push(20);

    std::cout << "Min-Heap top: " << minHeap.top() << "\n"; // 5

    return 0;
}
