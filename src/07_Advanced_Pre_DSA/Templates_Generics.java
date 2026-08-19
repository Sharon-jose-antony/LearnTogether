/**
 * Level 7: Advanced Pre-DSA & Standard Libraries
 * File: Templates_Generics.java
 * Topic: Generics <T>, Type Erasure, Bounded type parameters
 */

public class Templates_Generics {
    // Generic method with bounded type parameter
    public static <T extends Comparable<T>> T getMin(T a, T b) {
        return (a.compareTo(b) < 0) ? a : b;
    }

    // Generic Pair Class
    static class MyPair<K, V> {
        K first;
        V second;
        MyPair(K f, V s) { this.first = f; this.second = s; }
    }

    public static void main(String[] args) {
        System.out.println("Min int: " + getMin(10, 20));
        System.out.println("Min double: " + getMin(3.14, 2.71));

        MyPair<Integer, String> p = new MyPair<>(1, "Vertex_A");
        System.out.println("Pair: (" + p.first + ", " + p.second + ")");
    }
}
