/**
 * Level 1: Foundations & Syntax
 * File: Hello_Syntax.cpp
 * Topic: Compilation, Main function, Headers & Console Output
 */

#include <iostream> // Standard input-output stream library

// Program entry point
int main() {
    // std::cout represents standard output stream
    // << is the stream insertion operator
    // std::endl flushes the output buffer and adds a newline
    std::cout << "========================================" << std::endl;
    std::cout << "  Welcome to C++ Pre-DSA Foundations!   " << std::endl;
    std::cout << "========================================" << std::endl;
    
    std::cout << "C++ compiles natively to machine code binaries." << std::endl;
    
    return 0; // Return 0 signals success to the operating system
}
