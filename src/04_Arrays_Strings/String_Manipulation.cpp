/**
 * Level 4: Arrays, Strings & Memory Storage
 * File: String_Manipulation.cpp
 * Topic: std::string mutability, substrings, and character array mechanics
 */

#include <iostream>
#include <string>

int main() {
    std::string s = "Pre-DSA";
    
    // C++ std::string is MUTABLE in-place:
    s += " Mastery";
    s[0] = 'p'; // Direct element mutation

    std::cout << "Mutated String: " << s << "\n";
    std::cout << "Substring (0, 7): " << s.substr(0, 7) << "\n";
    std::cout << "Length: " << s.length() << "\n";

    return 0;
}
