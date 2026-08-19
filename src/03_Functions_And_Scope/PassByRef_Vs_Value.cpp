/**
 * Level 3: Functions & Call Stack
 * File: PassByRef_Vs_Value.cpp
 * Topic: Pass-by-value vs pass-by-reference (&) vs pass-by-pointer (*)
 */

#include <iostream>

// 1. Pass by Value (Copy created on stack frame)
void incrementVal(int a) {
    a += 10;
}

// 2. Pass by Reference (Modifies original variable)
void incrementRef(int &a) {
    a += 10;
}

// 3. Pass by Pointer (Uses memory address)
void incrementPtr(int *a) {
    if (a != nullptr) {
        *a += 10;
    }
}

int main() {
    int x = 5;
    
    incrementVal(x);
    std::cout << "After Pass-by-Value: " << x << " (Unchanged)\n"; // 5

    incrementRef(x);
    std::cout << "After Pass-by-Ref:   " << x << " (Updated!)\n";  // 15

    incrementPtr(&x);
    std::cout << "After Pass-by-Ptr:   " << x << " (Updated!)\n";  // 25

    return 0;
}
