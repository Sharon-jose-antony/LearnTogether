/**
 * Level 2: Control Flow & Logic
 * File: Loops_Patterns.cpp
 * Topic: Nested loops, pattern printing logic building, range-based loops
 */

#include <iostream>
#include <vector>

int main() {
    std::cout << "--- 1. Pattern Printing (Pyramid) ---\n";
    int n = 4;
    for (int i = 1; i <= n; i++) {
        for (int spaces = 1; spaces <= n - i; spaces++) {
            std::cout << " ";
        }
        for (int stars = 1; stars <= (2 * i - 1); stars++) {
            std::cout << "*";
        }
        std::cout << "\n";
    }

    std::cout << "\n--- 2. Range-Based For Loop ---\n";
    std::vector<int> nums = {10, 20, 30, 40};
    for (const auto &x : nums) {
        std::cout << x << " ";
    }
    std::cout << "\n";

    return 0;
}
