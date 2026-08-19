/**
 * Level 6: Object-Oriented Programming (OOP) Mastery
 * File: Classes_Constructors.cpp
 * Topic: Classes, Access modifiers, Constructors, Copy Constructor, Destructors
 */

#include <iostream>

class DynamicArray {
private:
    int *data;
    int capacity;

public:
    // 1. Default & Parameterized Constructor
    DynamicArray(int cap = 10) : capacity(cap) {
        data = new int[capacity];
        std::cout << "[Constructor] Allocated array of capacity " << capacity << "\n";
    }

    // 2. Copy Constructor (Deep Copy - Prevents Double Free runtime crash!)
    DynamicArray(const DynamicArray &other) : capacity(other.capacity) {
        data = new int[capacity];
        for (int i = 0; i < capacity; i++) {
            data[i] = other.data[i];
        }
        std::cout << "[Copy Constructor] Deep copy performed.\n";
    }

    // 3. Destructor (RAII Cleanup)
    ~DynamicArray() {
        delete[] data;
        std::cout << "[Destructor] Deallocated Heap array.\n";
    }
};

int main() {
    DynamicArray arr1(5);
    DynamicArray arr2 = arr1; // Triggers Copy Constructor
    return 0; // Triggers destructors for arr2 then arr1 automatically!
}
