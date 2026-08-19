/**
 * Level 6: OOP Mastery (Interview-Level)
 * File: Equals_HashCode_Contract.java
 * Topic: Overriding equals() & hashCode() contract for HashMap & HashSet correctness
 */

import java.util.HashMap;
import java.util.Objects;

class StudentKey {
    private int id;
    private String name;

    public StudentKey(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // MANDATORY INTERVIEW CONTRACT:
    // If equals() returns true, hashCode() MUST produce the exact same integer!
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentKey that = (StudentKey) o;
        return id == that.id && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}

public class Equals_HashCode_Contract {
    public static void main(String[] args) {
        HashMap<StudentKey, String> studentMap = new HashMap<>();

        StudentKey k1 = new StudentKey(101, "Alice");
        studentMap.put(k1, "Grade A");

        // Key with identical data:
        StudentKey k2 = new StudentKey(101, "Alice");

        // If hashCode() was NOT overridden, k2 would hit a different hash bucket and return null!
        String grade = studentMap.get(k2);
        System.out.println("Lookup result for k2: " + grade); // Grade A (CORRECT!)
    }
}
