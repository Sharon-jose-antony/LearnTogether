/**
 * Level 3: Functions & Call Stack
 * File: Recursion_Basics.cpp
 * Topic: Base cases, call stack frames, recursive sum & factorial
 */

#include <iostream>

// Factorial via recursion: N! = N * (N-1)!
long long factorial(int n) {
    // 1. Base Case: stops infinite recursion / stack overflow
    if (n <= 1) return 1;
    
    // 2. Recursive Case: pushes new stack frame
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    std::cout << "Factorial(" << n << ") = " << factorial(n) << "\n";
    return 0;
}
