/**
 * Level 2: Control Flow & Logic
 * File: Conditionals_Switch.cpp
 * Topic: If-else branching, ternary operators, and switch statements
 */

#include <iostream>

int main() {
    int score = 85;

    // Ternary Operator: (condition) ? if_true : if_false
    std::string result = (score >= 50) ? "PASS" : "FAIL";
    std::cout << "Exam Result: " << result << "\n";

    // Switch case statement
    char grade = 'B';
    switch (grade) {
        case 'A': std::cout << "Excellent!\n"; break;
        case 'B': std::cout << "Good Job!\n"; break;
        case 'C': std::cout << "Average\n"; break;
        default:  std::cout << "Needs Improvement\n"; break;
    }

    return 0;
}
