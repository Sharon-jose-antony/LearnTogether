/**
 * Level 3: Functions & Call Stack
 * File: Recursion_Basics.java
 * Topic: Base cases, call stack frames, recursive sum & factorial
 */

public class Recursion_Basics {
    public static long factorial(int n) {
        // Base Case
        if (n <= 1) return 1;
        
        // Recursive Call
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Factorial(" + n + ") = " + factorial(n));
    }
}
