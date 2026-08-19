/**
 * Level 5: Pointers, References & Memory Mechanics
 * File: Java_References_Memory.java
 * Topic: Primitive stack allocation vs Object heap allocation, GC roots & NullPointerException
 */

public class Java_References_Memory {
    static class Node {
        int data;
        Node next; // Reference pointer to next node (Linked List foundation!)
        Node(int data) { this.data = data; }
    }

    public static void main(String[] args) {
        // Primitives allocated directly inside main()'s Stack Frame
        int stackVal = 42; 

        // Objects are dynamically allocated on Heap via 'new'
        Node head = new Node(10);
        head.next = new Node(20);

        System.out.println("Head data: " + head.data);
        System.out.println("Next node data: " + head.next.data);

        // Null reference safety check
        Node curr = head.next.next;
        if (curr == null) {
            System.out.println("curr is null (End of chain). Safe from NullPointerException!");
        }
    }
}
