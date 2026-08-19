/**
 * Level 6: Object-Oriented Programming (OOP) Mastery
 * File: Classes_Constructors.java
 * Topic: Encapsulation, Getters/Setters, Constructors, Garbage Collection lifecycle
 */

class DynamicArray {
    private int[] data;
    private int capacity;

    // Parameterized Constructor
    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.data = new int[capacity];
        System.out.println("[Constructor] Allocated array of capacity " + capacity);
    }

    public int getCapacity() { return capacity; }
}

public class Classes_Constructors {
    public static void main(String[] args) {
        DynamicArray arr1 = new DynamicArray(5);
        System.out.println("Array capacity: " + arr1.getCapacity());

        // Garbage collection automatically frees arr1 when no references remain
    }
}
