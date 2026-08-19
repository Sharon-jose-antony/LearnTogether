/**
 * Level 1: Foundations & Syntax
 * File: Input_Output_FastIO.cpp
 * Topic: Standard input stream cin & Fast I/O optimization for Competitive Programming / DSA
 */

#include <iostream>

int main() {
    // FAST I/O SETUP FOR COMPETITIVE PROGRAMMING / DSA:
    // 1. Untie C++ streams from C standard I/O (printf/scanf)
    std::ios_base::sync_with_stdio(false);
    // 2. Untie std::cin from std::cout (prevents auto-flushing cout before every cin)
    std::cin.tie(NULL);

    std::cout << "Fast I/O Enabled!\n";
    std::cout << "Enter a number: ";

    int n = 42; // Simulated read
    std::cout << "Processed N: " << n << "\n"; // Use '\n' instead of std::endl for speed

    return 0;
}
