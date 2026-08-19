/**
 * Level 4: Arrays, Strings & Memory Storage
 * File: Arrays_Vectors.cpp
 * Topic: Contiguous 1D/2D static arrays vs std::vector dynamic resizing
 */

#include <iostream>
#include <vector>

int main() {
    // 1. Static Array (Fixed Size on Stack)
    int staticArr[5] = {10, 20, 30, 40, 50};
    std::cout << "Static Array Element 0: " << staticArr[0] << "\n";

    // 2. Dynamic Vector (Resizable on Heap)
    std::vector<int> vec;
    for (int i = 1; i <= 5; i++) {
        vec.push_back(i * 10); // O(1) amortized push
    }

    std::cout << "Vector Size: " << vec.size() << ", Capacity: " << vec.capacity() << "\n";

    // 3. 2D Matrix Grid (Essential for Graph/Matrix DSA)
    int rows = 2, cols = 3;
    std::vector<std::vector<int>> matrix(rows, std::vector<int>(cols, 0));
    matrix[1][2] = 99;

    std::cout << "Matrix[1][2]: " << matrix[1][2] << "\n";

    return 0;
}
