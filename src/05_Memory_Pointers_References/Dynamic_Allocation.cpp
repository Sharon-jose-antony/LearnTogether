/**
 * Level 5: Pointers, References & Memory Mechanics
 * File: Dynamic_Allocation.cpp
 * Topic: Heap allocation (new / delete), RAII, smart pointers (std::unique_ptr)
 */

#include <iostream>
#include <memory> // For std::unique_ptr

int main() {
    std::cout << "--- 1. Manual Dynamic Memory (new / delete) ---\n";
    int *rawPtr = new int(500); // Allocated on Heap
    std::cout << "Heap int value: " << *rawPtr << "\n";
    delete rawPtr; // Deallocate heap memory
    rawPtr = nullptr; // Reset pointer to avoid dangling reference

    std::cout << "\n--- 2. RAII Smart Pointer (std::unique_ptr) ---\n";
    // Modern C++ standard: std::unique_ptr automatically deallocates when scope ends!
    std::unique_ptr<int> smartPtr = std::make_unique<int>(999);
    std::cout << "Smart pointer value: " << *smartPtr << "\n";
    // No manual 'delete' needed! Automatic cleanup prevents memory leaks.

    return 0;
}
