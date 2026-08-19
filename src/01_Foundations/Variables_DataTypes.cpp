/**
 * Level 1: Foundations & Syntax
 * File: Variables_DataTypes.cpp
 * Topic: Primitive types, sizes, signed vs unsigned, and integer overflow traps.
 */

#include <iostream>
#include <climits>

int main() {
    int val = 2147483647;            // 4 Bytes: -2^31 to 2^31 - 1
    long long largeVal = 1e18;       // 8 Bytes: 64-bit integer (CRITICAL FOR DSA SUMS!)
    double pi = 3.141592653589793;   // 8 Bytes double precision
    char grade = 'A';                // 1 Byte ASCII
    bool flag = true;                // 1 Byte boolean

    std::cout << "int size: " << sizeof(int) << " bytes\n";
    std::cout << "long long size: " << sizeof(long long) << " bytes\n";
    std::cout << "Max Int: " << val << "\n";
    
    // Demonstrate overflow:
    int overflowed = val + 1;
    std::cout << "Overflowed Int (val + 1): " << overflowed << " (Wrapped around to negative!)\n";

    return 0;
}
