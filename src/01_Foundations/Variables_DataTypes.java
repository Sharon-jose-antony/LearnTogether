/**
 * Level 1: Foundations & Syntax
 * File: Variables_DataTypes.java
 * Topic: Primitive Types, Precision, Signed limits, Wrapper Classes
 */

public class Variables_DataTypes {
    public static void main(String[] args) {
        int val = Integer.MAX_VALUE;         // 4 Bytes: 2147483647
        long largeVal = 1000000000000000000L;// 8 Bytes: 64-bit integer ('L' required)
        double pi = 3.141592653589793;       // 8 Bytes double precision
        char grade = 'A';                    // 2 Bytes Unicode
        boolean flag = true;                 // 1 Byte boolean

        System.out.println("Max Int: " + val);
        System.out.println("Max Long: " + Long.MAX_VALUE);
        
        // Demonstrate overflow:
        int overflowed = val + 1;
        System.out.println("Overflowed Int (val + 1): " + overflowed + " (Two's complement wrap)");
    }
}
