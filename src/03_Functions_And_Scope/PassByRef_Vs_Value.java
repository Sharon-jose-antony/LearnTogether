/**
 * Level 3: Functions & Call Stack
 * File: PassByRef_Vs_Value.java
 * Topic: Pass-by-value semantics in Java (Primitives vs Object Reference copies)
 */

public class PassByRef_Vs_Value {
    static class Box { int val; Box(int v){ this.val = v; } }

    // Primitives are passed by value (Copy made)
    static void tryModifyPrimitive(int num) {
        num = 999;
    }

    // Reference pointer copy is passed (Modifies heap object state)
    static void modifyBoxContent(Box b) {
        b.val = 999; // Mutates heap object
    }

    // Reference reassignment does NOT affect caller
    static void reassignBox(Box b) {
        b = new Box(777); // Local reference reassigned only!
    }

    public static void main(String[] args) {
        int x = 5;
        tryModifyPrimitive(x);
        System.out.println("Primitive after method: " + x); // 5

        Box b = new Box(5);
        modifyBoxContent(b);
        System.out.println("Box val after modify: " + b.val); // 999

        reassignBox(b);
        System.out.println("Box val after reassign: " + b.val); // Still 999!
    }
}
