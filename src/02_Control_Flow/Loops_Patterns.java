/**
 * Level 2: Control Flow & Logic
 * File: Loops_Patterns.java
 * Topic: Nested loops, pattern printing, labeled breaks in Java
 */

public class Loops_Patterns {
    public static void main(String[] args) {
        System.out.println("--- 1. Pattern Printing (Pyramid) ---");
        int n = 4;
        for (int i = 1; i <= n; i++) {
            for (int spaces = 1; spaces <= n - i; spaces++) {
                System.out.print(" ");
            }
            for (int stars = 1; stars <= (2 * i - 1); stars++) {
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println("\n--- 2. Labeled Break Feature ---");
        outerLoop:
        for (int r = 1; r <= 3; r++) {
            for (int c = 1; c <= 3; c++) {
                if (r == 2 && c == 2) {
                    System.out.println("Breaking outerLoop at r=2, c=2!");
                    break outerLoop; // Exits outer loop directly!
                }
                System.out.println("r=" + r + ", c=" + c);
            }
        }
    }
}
