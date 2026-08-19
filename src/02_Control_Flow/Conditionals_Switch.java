/**
 * Level 2: Control Flow & Logic
 * File: Conditionals_Switch.java
 * Topic: If-else branching, ternary operators, and modern switch expressions
 */

public class Conditionals_Switch {
    public static void main(String[] args) {
        int score = 85;

        // Ternary Operator
        String result = (score >= 50) ? "PASS" : "FAIL";
        System.out.println("Exam Result: " + result);

        // Modern Switch (Java 14+)
        char grade = 'B';
        switch (grade) {
            case 'A' -> System.out.println("Excellent!");
            case 'B' -> System.out.println("Good Job!");
            case 'C' -> System.out.println("Average");
            default  -> System.out.println("Needs Improvement");
        }
    }
}
