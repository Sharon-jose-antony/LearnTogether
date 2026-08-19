/**
 * Level 5: Pointers, References & Memory Mechanics
 * File: Pointers_DeepDive.cpp
 * Topic: Address operator (&), dereferencing (*), pointer arithmetic, array pointers
 */

#include <iostream>

int main() {
    int x = 100;
    int *p = &x; // Store memory address of x

    std::cout << "Value of x:              " << x << "\n";
    std::cout << "Address of x (&x):       " << &x << "\n";
    std::cout << "Pointer p value (address): " << p << "\n";
    std::cout << "Dereferenced *p:          " << *p << "\n";

    // Pointer Arithmetic on Arrays
    int arr[] = {10, 20, 30, 40};
    int *arrPtr = arr; // Decay to pointer pointing to arr[0]

    std::cout << "\n--- Pointer Arithmetic ---\n";
    std::cout << "*(arrPtr + 0): " << *(arrPtr + 0) << "\n"; // 10
    std::cout << "*(arrPtr + 1): " << *(arrPtr + 1) << "\n"; // 20
    std::cout << "*(arrPtr + 2): " << *(arrPtr + 2) << "\n"; // 30

    return 0;
}
