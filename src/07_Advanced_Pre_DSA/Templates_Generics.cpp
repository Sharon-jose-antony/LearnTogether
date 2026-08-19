/**
 * Level 7: Advanced Pre-DSA & Standard Libraries
 * File: Templates_Generics.cpp
 * Topic: Template classes and functions, Monomorphization, template specialization
 */

#include <iostream>

// Generic Template Function
template <typename T>
T getMin(T a, T b) {
    return (a < b) ? a : b;
}

// Generic Template Pair Class (Essential for Graph edges and DP states!)
template <typename K, typename V>
class MyPair {
public:
    K first;
    V second;
    MyPair(K f, V s) : first(f), second(s) {}
};

int main() {
    std::cout << "Min int:    " << getMin<int>(10, 20) << "\n";
    std::cout << "Min double: " << getMin<double>(3.14, 2.71) << "\n";

    MyPair<int, std::string> p(1, "Vertex_A");
    std::cout << "Pair: (" << p.first << ", " << p.second << ")\n";

    return 0;
}
