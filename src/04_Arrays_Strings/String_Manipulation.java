/**
 * Level 4: Arrays, Strings & Memory Storage
 * File: String_Manipulation.java
 * Topic: String immutability vs StringBuilder performance for DSA algorithms
 */

public class String_Manipulation {
    public static void main(String[] args) {
        // String Immutability Demo
        String s = "Pre-DSA";
        String s2 = s + " Mastery"; // Creates NEW string object on heap!
        System.out.println("Original String s: " + s);
        System.out.println("New String s2: " + s2);

        // StringBuilder (MUTABLE - Use this in DSA loops!)
        StringBuilder sb = new StringBuilder("Pre-DSA");
        sb.append(" Mastery");
        sb.setCharAt(0, 'p');

        System.out.println("StringBuilder Result: " + sb.toString());
        System.out.println("Reversed StringBuilder: " + sb.reverse().toString());
    }
}
