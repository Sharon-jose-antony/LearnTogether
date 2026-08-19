/* ==========================================================================
   Learn Together with S J A: Interview-Level Curriculum Dataset (C++ & Java)
   ========================================================================== */

const CURRICULUM_DATA = {
  levels: [
    {
      id: 1,
      title: "Level 1: Foundations, Precision & Fast I/O",
      badge: "Newbie ➔ Intermediate",
      description: "Master compiler pipelines (g++ native vs javac/JVM), integer overflow/underflow, floating-point precision loss, and competitive fast I/O.",
      topics: [
        "g++ Compilation Flags (-O2, -std=c++17, -Wall) vs JVM Bytecode JIT",
        "Two's Complement Representation & Integer Overflow (-2^31 to 2^31-1)",
        "Floating-point Precision (float vs double, EPSILON comparison 1e-9)",
        "Fast I/O: cin.tie(NULL), sync_with_stdio(false) vs BufferedReader & StringTokenizer"
      ],
      cppFocus: "Header includes, main exit codes, std::ios_base::sync_with_stdio(false), std::cin.tie(NULL)",
      javaFocus: "JVM Memory (Stack/Heap/Metaspace), BufferedReader, StringTokenizer, Integer.MAX_VALUE",
      dsaValue: "Interview Impact: Prevents TLE (Time Limit Exceeded) and silent integer overflow bugs in 100% of DSA problem submissions."
    },
    {
      id: 2,
      title: "Level 2: Control Flow, Loops & Logic Mechanics",
      badge: "Logic Builder",
      description: "Master loop invariants, nested matrix indexing, short-circuit evaluation, break/continue semantics, and pattern printing algorithms.",
      topics: [
        "Short-Circuit Evaluation in Logical Operators (&&, ||)",
        "Loop Invariants & Off-By-One Errors (<= vs <)",
        "Nested Matrix Indexing (Row-Major Order vs Column-Major Order)",
        "Labeled Breaks in Java vs Flag Variable Control in C++"
      ],
      cppFocus: "Range-based for loops by reference (for(const auto &x: vec)), std::size_t indexing",
      javaFocus: "Enhanced for-each loop, Labeled break/continue (break outerLoop;)",
      dsaValue: "Interview Impact: Core mental model required for Two-Pointers, Sliding Window, and Matrix DP problems."
    },
    {
      id: 3,
      title: "Level 3: Functions, Stack Frames & Recursion Basics",
      badge: "Intermediate",
      description: "Understand activation records on the call stack, parameter passing, pass-by-reference vs value, recursion base cases, and stack overflow.",
      topics: [
        "Call Stack Activation Records & Frame Overhead",
        "Pass-by-Value vs Pass-by-Reference (&) vs Pass-by-Pointer (*)",
        "Recursion Stack Depth limit (typically 10^4 - 10^5 frames before StackOverflowError)",
        "Tail Call Optimization (TCO) in compilers"
      ],
      cppFocus: "Pass by reference (void fn(vector<int>& arr)), const references, inline functions",
      javaFocus: "Pass-by-value of primitive values and object reference copies, method overloading rules",
      dsaValue: "Interview Impact: Mandatory foundation for Tree Traversals, Backtracking, Divide & Conquer, and Dynamic Programming."
    },
    {
      id: 4,
      title: "Level 4: Dynamic Arrays, Strings & Mutability",
      badge: "Advanced",
      description: "Understand contiguous memory layout, dynamic array geometric growth, C-strings vs std::string, and String Constant Pool immutability.",
      topics: [
        "Contiguous Memory Allocation of 1D/2D Static Arrays",
        "Geometric Growth Rate: C++ std::vector (2x growth) vs Java ArrayList (1.5x growth)",
        "Small String Optimization (SSO) in C++ vs String Immutability & Pool in Java",
        "StringBuilder vs StringBuffer vs C++ std::string in-place mutations"
      ],
      cppFocus: "std::vector capacity vs size, reserve() vs resize(), shrink_to_fit(), std::string mutability",
      javaFocus: "ArrayList<Integer> resizing, String Constant Pool, intern(), StringBuilder in-place operations",
      dsaValue: "Interview Impact: Prevents $O(N^2)$ String concatenation traps in Java and $O(N)$ re-allocations in C++ vector operations."
    },
    {
      id: 5,
      title: "Level 5: Pointers, References & Memory Architecture",
      badge: "Hardcore Memory",
      description: "Deep dive into memory addresses, pointer arithmetic, dynamic memory allocation (new/delete), RAII, Smart Pointers, and JVM Garbage Collection.",
      topics: [
        "Pointer to Pointer (int**) & Pointer Arithmetic (ptr + i advances by sizeof(T))",
        "Heap Allocation (new/delete, new[]/delete[]) & Memory Leaks in C++",
        "RAII & Smart Pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr)",
        "Java Garbage Collection (Eden, Survivor, Tenured Generations, GC Roots, Mark-and-Sweep)"
      ],
      cppFocus: "Raw pointers, pointer arithmetic, nullptr, delete[], std::unique_ptr, memory leak detection",
      javaFocus: "Primitive vs Reference variables, GC roots, unreachable object detection, System.gc()",
      dsaValue: "Interview Impact: Absolute prerequisite for constructing Linked Lists, Binary Search Trees, Graphs, Trie, and Heaps from scratch."
    },
    {
      id: 6,
      title: "Level 6: OOP Mastery & Memory Layout",
      badge: "Expert Pre-DSA",
      description: "Design production-grade abstractions using Encapsulation, Inheritance, Polymorphism, Virtual Tables (VTable), and Abstract Interfaces.",
      topics: [
        "Struct vs Class Memory Alignment & Padding (sizeof struct)",
        "Constructors, Copy Constructor (Deep vs Shallow Copy), & Destructors",
        "Virtual Functions, VTable Pointer (vptr) & Virtual Destructors (prevents leaks)",
        "Abstract Classes & Interfaces, Java hashCode() & equals() contract"
      ],
      cppFocus: "Copy Constructor, Rule of 3/5, Virtual Destructor, VTable dynamic dispatch, pure virtual functions",
      javaFocus: "Abstract classes, Interfaces, @Override, equals() & hashCode() contract for HashMap keys",
      dsaValue: "Interview Impact: Needed for designing Graph Node classes, Custom Comparators, Trie Nodes, and OOP System Design interviews."
    },
    {
      id: 7,
      title: "Level 7: Generic Programming & STL / Collections Internals",
      badge: "Interview Ready",
      description: "Master Generic Programming (Templates vs Type Erasure), STL Container Internals, Java Collections Framework, and Big-O Complexity.",
      topics: [
        "C++ Templates (Monomorphization at compile-time) vs Java Generics (Type Erasure)",
        "C++ STL Internals: std::vector, std::map (Red-Black Tree), std::unordered_map (Hash Table)",
        "Java Collections Internals: ArrayList, HashMap (Bucket array + LinkedList/Red-Black Tree), PriorityQueue (Min-Heap)",
        "Custom Lambda Comparators & Big-O Time & Space Complexity Analysis"
      ],
      cppFocus: "template <typename T>, std::sort with lambda, iterators, emplace_back() vs push_back()",
      javaFocus: "Generics <T>, Comparator.comparing(), Collections.sort(), HashMap bucket mechanics",
      dsaValue: "Interview Impact: Direct bridge to cracking LeetCode / Codeforces / FAANG Technical Interviews."
    }
  ],

  comparisons: [
    {
      id: "hello_world",
      title: "Compilation & Hello World Architecture",
      description: "Deep comparison of binary compilation (g++) vs JVM Bytecode execution (javac & JIT compiler).",
      cppTitle: "C++ Compilation Pipeline",
      cppCode: `// C++17 Production Entry Point
#include <iostream> // Preprocessor directive pulls in iostream declarations

int main() {
    // std::cout connects to file descriptor 1 (stdout)
    // std::endl sends '\\n' AND forces an expensive buffer flush (fflush)
    std::cout << "Hello, Interview-Level C++!" << std::endl;
    
    return 0; // 0 signals exit status EXIT_SUCCESS to OS kernel
}

/*
Compilation Stages:
1. Preprocessor: g++ -E Hello.cpp -> Expands #include headers
2. Compiler:     g++ -S Hello.cpp -> Generates Assembly code (.s)
3. Assembler:    g++ -c Hello.cpp -> Generates Machine Object file (.o)
4. Linker:       g++ Hello.o -o Hello.exe -> Links C++ Standard Library
*/`,
      cppNotes: "C++ compiles down to raw OS-native machine instructions. Zero VM runtime overhead.",
      javaTitle: "Java Compilation & JVM Pipeline",
      javaCode: `// Java 17 Production Entry Point
public class Hello_Syntax {
    // JVM looks for exact signature: public static void main(String[] args)
    public static void main(String[] args) {
        System.out.println("Hello, Interview-Level Java!");
    }
}

/*
Compilation & Execution Stages:
1. javac Hello_Syntax.java  -> Compiles source into JVM Bytecode (Hello_Syntax.class)
2. java Hello_Syntax        -> JVM loads class into Metaspace, interprets Bytecode
3. JIT (Just-In-Time)       -> Hot code blocks are dynamically compiled to native machine code!
*/`,
      javaNotes: "Java Bytecode (.class) runs inside JVM. JIT (C1/C2 compiler) translates frequent bytecode paths to native code.",
      takeaways: [
        "C++ produces OS-dependent native machine binaries (.exe / ELF). Java produces OS-independent Bytecode (.class) interpreted/JIT-compiled by the JVM.",
        "C++ main function returns `int` (Exit code to OS). Java main function returns `void`.",
        "In C++, `std::endl` flushes the I/O buffer. In competitive programming / DSA, use `\\n` to avoid $O(N)$ buffer flushing TLE."
      ]
    },
    {
      id: "variables_types",
      title: "Primitive Data Types, Integer Overflow & Precision",
      description: "Understanding exact bit widths, Two's complement representation, integer overflow traps, and floating-point precision in interviews.",
      cppTitle: "C++ Primitive Types & Overflow Bounds",
      cppCode: `#include <iostream>
#include <climits> // INT_MAX, LLONG_MAX

int main() {
    int ival = 2147483647;                 // 32-Bit Signed Integer (-2^31 to 2^31 - 1)
    long long lval = 9223372036854775807LL; // 64-Bit Signed Integer (-2^63 to 2^63 - 1)
    double dval = 3.141592653589793;       // 64-Bit IEEE 754 Double Precision

    // TRICKY INTERVIEW QUESTION: What happens when ival + 1 is computed?
    int overflowed = ival + 1; 
    std::cout << "Max Int: " << ival << "\n";
    std::cout << "Overflowed (ival + 1): " << overflowed << " (Signed Overflow = Undefined Behavior in C++!)\n";

    // Unsigned Type (Only non-negative):
    unsigned int uval = 4294967295U; // 0 to 2^32 - 1
    std::cout << "Max Unsigned Int: " << uval << "\n";

    return 0;
}`,
      cppNotes: "C++ supports both signed and unsigned types. Signed integer overflow is technically Undefined Behavior (UB) in the C++ standard.",
      javaTitle: "Java Primitives & Signed Overflow Rules",
      javaCode: `public class Variables_DataTypes {
    public static void main(String[] args) {
        int ival = Integer.MAX_VALUE;       // 32-Bit Signed Integer (2,147,483,647)
        long lval = Long.MAX_VALUE;         // 64-Bit Signed Integer ('L' suffix required!)
        double dval = 3.141592653589793;   // 64-Bit Double Precision

        // INTERVIEW QUESTION: What happens when ival + 1 is computed in Java?
        int overflowed = ival + 1;
        System.out.println("Max Int: " + ival);
        System.out.println("Overflowed (ival + 1): " + overflowed); // -2147483648 (Strict Two's Complement Wrap)

        // Wrapper Class Caching (-128 to 127):
        Integer a = 100, b = 100;
        Integer c = 200, d = 200;
        System.out.println("a == b (100): " + (a == b)); // TRUE (Integer Cache!)
        System.out.println("c == d (200): " + (c == d)); // FALSE (Different heap objects!)
    }
}`,
      javaNotes: "Java primitives are strictly signed. Java caches `Integer` objects between -128 and 127 (`==` checks reference equality!).",
      takeaways: [
        "Interview Pitfall: In Java, comparing `Integer` wrapper objects with `==` checks reference addresses, not values! Always use `.equals()` or compare raw `int` primitives.",
        "In DSA, accumulating array sums can exceed $2 \times 10^9$. Always use `long long` in C++ and `long` in Java to prevent silent integer overflow.",
        "Floating point numbers cannot be compared directly with `==`. Always check `abs(a - b) < 1e-9` (EPSILON comparison)."
      ]
    },
    {
      id: "fast_io",
      title: "Fast I/O & Competitive Stream Mechanics",
      description: "Optimizing input/output streams for large input benchmarks ($N = 10^6$ test cases).",
      cppTitle: "C++ High-Performance I/O",
      cppCode: `#include <iostream>

int main() {
    // 1. Disable sync between C++ std::cin/cout and C scanf/printf
    std::ios_base::sync_with_stdio(false);
    
    // 2. Untie std::cin from std::cout (prevents auto-flush before cin reads)
    std::cin.tie(NULL);

    int n;
    if (std::cin >> n) {
        // Use '\\n' instead of std::endl to avoid buffer flush overhead
        std::cout << "Fast Read N: " << n << "\n";
    }

    return 0;
}`,
      cppNotes: "Without fast I/O, `std::cin` performs synchronization checks on every input, leading to TLE on $N > 10^5$.",
      javaTitle: "Java Fast I/O (BufferedReader + StringTokenizer)",
      javaCode: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Input_Output_FastIO {
    public static void main(String[] args) throws IOException {
        // Fast Reader using 8KB Memory Buffer
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String line = br.readLine();
        if (line != null) {
            // StringTokenizer splits tokens 5x faster than String.split() regex!
            StringTokenizer st = new StringTokenizer(line);
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            System.out.println("Fast Sum: " + (a + b));
        }
    }
}`,
      javaNotes: "Scanner uses regex scanning (slow). `BufferedReader` reads contiguous bytes into an 8KB memory buffer.",
      takeaways: [
        "Java `Scanner` and default `std::cin` cause TLE on competitive platforms when $N \ge 10^5$.",
        "In Java, `String.split(\" \")` compiles a regular expression on every call. Use `StringTokenizer` for fast parsing.",
        "In C++, never mix `printf`/`scanf` with `std::cin`/`std::cout` after calling `sync_with_stdio(false)`."
      ]
    },
    {
      id: "pass_by_ref",
      title: "Pass-by-Value vs Pass-by-Reference & Pointer Mechanics",
      description: "How function parameters work in memory, stack activation records, and mutation rules.",
      cppTitle: "C++ Explicit Reference (&) vs Pointer (*)",
      cppCode: `#include <iostream>
#include <vector>

// 1. Pass by Value: FULL COPY of vector made O(N) time & space! (AVOID IN DSA)
void processVal(std::vector<int> vec) {
    vec[0] = 99; // Mutates COPY only
}

// 2. Pass by Reference: Direct alias to caller's vector! O(1) space
void processRef(std::vector<int> &vec) {
    vec[0] = 99; // Mutates CALLER'S vector directly!
}

// 3. Read-Only Pass by Reference: O(1) space + const protection! (BEST PRACTICE)
void processConstRef(const std::vector<int> &vec) {
    // vec[0] = 99; // COMPILE ERROR: Protected against unintended mutation!
    std::cout << "First element: " << vec[0] << "\n";
}

int main() {
    std::vector<int> nums = {10, 20, 30};
    processVal(nums);
    std::cout << "After Val: " << nums[0] << "\n"; // 10

    processRef(nums);
    std::cout << "After Ref: " << nums[0] << "\n"; // 99

    return 0;
}`,
      cppNotes: "Passing large objects by value in C++ creates full dynamic copies ($O(N)$ time). Always pass vectors by `const &` or `&`.",
      javaTitle: "Java Pass-by-Value Semantics (Primitives vs Reference Copies)",
      javaCode: `public class PassByRef_Vs_Value {
    static class Node { int data; Node(int d){ this.data = d; } }

    // Primitives: Value copy passed
    static void modifyInt(int x) { x = 999; }

    // Objects: COPY OF THE REFERENCE POINTER passed!
    static void modifyNodeData(Node n) {
        n.data = 999; // Mutates heap object!
    }

    // Reassigning parameter pointer does NOT affect caller
    static void reassignNode(Node n) {
        n = new Node(777); // Local reference copy reassigned
    }

    public static void main(String[] args) {
        int a = 10;
        modifyInt(a);
        System.out.println("Primitive: " + a); // 10

        Node node = new Node(10);
        modifyNodeData(node);
        System.out.println("Node data: " + node.data); // 999

        reassignNode(node);
        System.out.println("Node data after reassign attempt: " + node.data); // Still 999!
    }
}`,
      javaNotes: "Java passes EVERYTHING by value. For primitives, it passes a primitive value copy; for objects, it passes a COPY of the reference pointer.",
      takeaways: [
        "Top Interview Question: Does Java support Pass-by-Reference? NO! Java is 100% Pass-by-Value (it passes a copy of the reference pointer for objects).",
        "In C++, passing a `std::vector` without `&` causes an accidental $O(N)$ full copy! Always use `const vector<int>&` for read-only parameters.",
        "In Java, mutating fields of an object parameter modifies the caller's heap object, but reassigning the parameter variable (`n = new Node()`) does not affect the caller."
      ]
    },
    {
      id: "pointers_dynamic",
      title: "Pointers, Dynamic Memory & JVM Garbage Collection",
      description: "Low-level address pointers, heap management (`new`/`delete`), RAII Smart Pointers, and JVM Garbage Collection.",
      cppTitle: "C++ Pointers, Dynamic Allocation & Smart Pointers",
      cppCode: `#include <iostream>
#include <memory> // std::unique_ptr, std::shared_ptr

struct Node {
    int val;
    Node(int v) : val(v) {}
};

int main() {
    // 1. Raw Pointers & Address Operator (&)
    int value = 42;
    int *ptr = &value; // ptr holds memory address of value
    std::cout << "Value via dereference (*ptr): " << *ptr << "\n";

    // 2. Dynamic Heap Allocation (new / delete)
    Node *heapNode = new Node(100); // Allocated on Heap
    std::cout << "Heap Node val: " << heapNode->val << "\n";
    delete heapNode; // MUST manually deallocate to prevent Memory Leak!
    heapNode = nullptr; // Reset to avoid Dangling Pointer

    // 3. Modern RAII Smart Pointers (C++11/14+)
    std::unique_ptr<Node> smartNode = std::make_unique<Node>(200);
    std::cout << "Smart Node val: " << smartNode->val << "\n";
    // Automatically deallocated when smartNode goes out of scope!

    return 0;
}`,
      cppNotes: "C++ raw pointers require manual `delete`. Modern C++ uses `unique_ptr` / `shared_ptr` to achieve automatic memory safety (RAII).",
      javaTitle: "Java Objects, References & Garbage Collector",
      javaCode: `public class Java_References_Memory {
    static class Node {
        int val;
        Node next; // Reference pointer to next Node
        Node(int v) { this.val = v; }
    }

    public static void main(String[] args) {
        // Primitives live on Stack Frame
        int val = 42;

        // Heap Allocation via 'new'
        Node n1 = new Node(100);
        Node n2 = new Node(200);
        n1.next = n2;

        System.out.println("n1.next.val: " + n1.next.val);

        // Memory Cleanup in Java:
        n1 = null; // Disconnect reference
        n2 = null; // Objects now have ZERO active GC roots!
        
        // JVM Mark-and-Sweep Garbage Collector reclaims unreachable heap memory
        System.gc(); // Request GC pass
    }
}`,
      javaNotes: "Java handles heap deallocation automatically via JVM Garbage Collection (Mark-and-Sweep / G1 / ZGC).",
      takeaways: [
        "C++ pointers store raw 64-bit memory addresses (`0x7ffd...`); pointer arithmetic (`ptr + 1`) shifts address by `sizeof(T)` bytes.",
        "C++ memory leaks occur when `new` is called without `delete`. Java memory leaks occur when static collections or open listeners hold references to unused heap objects.",
        "Java reference variables are safe managed pointers: no raw pointer arithmetic, no wild pointers, no double free bugs."
      ]
    },
    {
      id: "arrays_strings",
      title: "Vector vs ArrayList Geometric Growth & String Immutability",
      description: "Amortized $O(1)$ dynamic array resizing algorithms and string memory performance traps.",
      cppTitle: "C++ std::vector Resizing & std::string In-Place Mutation",
      cppCode: `#include <iostream>
#include <vector>
#include <string>

int main() {
    // std::vector Capacity Doubling Mechanics (2x growth rate)
    std::vector<int> vec;
    vec.reserve(100); // Pre-allocates 100 elements to avoid re-allocations!

    for (int i = 0; i < 5; i++) {
        vec.push_back(i);
        std::cout << "Size: " << vec.size() << ", Capacity: " << vec.capacity() << "\n";
    }

    // C++ std::string is MUTABLE!
    std::string str = "Hello";
    str += " World";  // In-place append (O(1) amortized)
    str[0] = 'h';     // Direct character mutation in memory!
    std::cout << "Mutated String: " << str << "\n";

    return 0;
}`,
      cppNotes: "`std::vector` doubles capacity when full ($1 \to 2 \to 4 \to 8 \to 16$). `reserve()` pre-allocates memory for optimal DSA speed.",
      javaTitle: "Java ArrayList (1.5x Growth) & StringBuilder vs String Pool",
      javaCode: `import java.util.ArrayList;

public class String_Manipulation {
    public static void main(String[] args) {
        // ArrayList grows by 50% (newCapacity = oldCapacity + (oldCapacity >> 1))
        ArrayList<Integer> list = new ArrayList<>(100); // Initial capacity 100

        // String Constant Pool & Immutability:
        String s1 = "Hello"; // Lives in String Constant Pool
        String s2 = "Hello";
        System.out.println("s1 == s2: " + (s1 == s2)); // TRUE (Same pooled instance!)

        // IMMUTABILITY TRAP IN LOOPS:
        // String s = ""; for(...) s += i; -> O(N^2) TIME & HEAP SPAM!
        
        // EFFICIENT MUTABLE STRING BUILDING (ALWAYS USE IN DSA):
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        sb.setCharAt(0, 'h'); // In-place modification
        System.out.println("StringBuilder: " + sb.toString());
    }
}`,
      javaNotes: "Java `String` is immutable. Modifying string in a loop without `StringBuilder` creates $O(N^2)$ time complexity and spams JVM Heap.",
      takeaways: [
        "Interview Question: What is the growth factor of `std::vector` vs `ArrayList`? C++ `std::vector` typically doubles (2x); Java `ArrayList` grows by 50% ($1.5x$).",
        "Amortized Time Complexity: Pushing to a dynamic array is $O(1)$ amortized because re-allocations happen logarithmically $\log_2(N)$ times.",
        "In Java DSA problems, ALWAYS use `StringBuilder` for string algorithms (e.g. palindromes, string reversal, anagrams)."
      ]
    },
    {
      id: "templates_generics",
      title: "Templates (Monomorphization) vs Generics (Type Erasure)",
      description: "Compile-time code generation in C++ vs Runtime Type Erasure in Java.",
      cppTitle: "C++ Templates (Compile-Time Monomorphization)",
      cppCode: `#include <iostream>

// C++ Template generates separate, optimized binary code for EACH type!
template <typename T>
T getMin(T a, T b) {
    return (a < b) ? a : b;
}

template <typename K, typename V>
struct Pair {
    K first;
    V second;
    Pair(K f, V s) : first(f), second(s) {}
};

int main() {
    std::cout << "Min int: " << getMin<int>(10, 20) << "\n";
    std::cout << "Min double: " << getMin<double>(3.14, 2.71) << "\n";

    Pair<int, std::string> p(1, "Vertex_A");
    std::cout << "Pair: (" << p.first << ", " << p.second << ")\n";
    return 0;
}`,
      cppNotes: "C++ Compiler generates separate machine code instances for `getMin<int>` and `getMin<double>`. Zero runtime overhead.",
      javaTitle: "Java Generics (Type Erasure to Object)",
      javaCode: `public class Templates_Generics {
    // Java Generic method uses Type Erasure (replaces T with Comparable/Object)
    public static <T extends Comparable<T>> T getMin(T a, T b) {
        return (a.compareTo(b) < 0) ? a : b;
    }

    static class Pair<K, V> {
        K first; V second;
        Pair(K f, V s) { this.first = f; this.second = s; }
    }

    public static void main(String[] args) {
        System.out.println("Min int: " + getMin(10, 20));
        System.out.println("Min double: " + getMin(3.14, 2.71));

        Pair<Integer, String> p = new Pair<>(1, "Vertex_A");
        System.out.println("Pair: (" + p.first + ", " + p.second + ")");
    }
}`,
      javaNotes: "Java Type Erasure removes type parameters `<T>` at compile-time for backward compatibility, replacing them with `Object` or bounds.",
      takeaways: [
        "Interview Question: Why can't Java create generic arrays like `new T[10]`? Because of Type Erasure! At runtime, `T` becomes `Object`, making component type verification impossible.",
        "C++ templates allow primitive types (`vector<int>`); Java Generics require object wrappers (`ArrayList<Integer>`), incurring autoboxing memory overhead.",
        "C++ Template monomorphization increases binary size (Code Bloat), whereas Java Type Erasure keeps bytecode small."
      ]
    }
  ],

  interviewQuestions: [
    {
      id: "iq1",
      category: "C++ Memory & Pointers",
      question: "What is a Memory Leak in C++, and how do Smart Pointers (RAII) prevent it?",
      answer: "A memory leak occurs when heap memory allocated with `new` or `new[]` is not deallocated using `delete` or `delete[]` before all pointers to that memory go out of scope. Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) use RAII (Resource Acquisition Is Initialization) to wrap raw pointers in stack-allocated objects whose destructors automatically free heap memory when the object leaves scope.",
      codeSnippet: `// Raw Pointer Leak:
void leak() { int *ptr = new int(10); } // LEAK!

// Smart Pointer (RAII Safe):
void safe() { std::unique_ptr<int> ptr = std::make_unique<int>(10); } // Auto freed!`
    },
    {
      id: "iq2",
      category: "Java Collections & Internals",
      question: "What is the contract between equals() and hashCode() in Java, and what breaks if you fail to override hashCode()?",
      answer: "Contract: If two objects are equal according to `equals()`, they MUST produce the exact same integer from `hashCode()`. If you override `equals()` without `hashCode()`, `HashMap` and `HashSet` will fail! They will place identical key objects into different hash buckets, causing `map.get(key)` to return `null` even when the key exists.",
      codeSnippet: `// Proper Override in Java:
@Override
public boolean equals(Object o) { ... }

@Override
public int hashCode() { return Objects.hash(field1, field2); }`
    },
    {
      id: "iq3",
      category: "C++ OOP & Polymorphism",
      question: "Why MUST a base class destructor be declared 'virtual' when using inheritance?",
      answer: "If a base class destructor is NOT `virtual`, deleting a derived class object through a base class pointer (`Base *b = new Derived()`; `delete b;`) invokes ONLY the Base destructor! The Derived class destructor is never called, causing a silent memory leak of any resources allocated inside Derived.",
      codeSnippet: `class Base {
public:
    virtual ~Base() {} // VIRTUAL DESTRUCTOR GUARANTEES DERIVED CLEANUP!
};`
    },
    {
      id: "iq4",
      category: "Java String & Memory",
      question: "Why should you NEVER concatenate strings using '+' inside a loop in Java?",
      answer: "Java Strings are immutable. Executing `s += str` inside a loop of length $N$ creates a new `StringBuilder` and a new `String` object on the Heap in every iteration. This copy operation takes $O(N)$ time per iteration, resulting in an overall $O(N^2)$ time complexity and heavy JVM Garbage Collector pressure. Always use `StringBuilder` inside loops.",
      codeSnippet: `// BAD: O(N^2) Time & Heap Spam
String s = ""; for(int i=0; i<n; i++) s += i; 

// GOOD: O(N) Time
StringBuilder sb = new StringBuilder(); for(int i=0; i<n; i++) sb.append(i);`
    },
    {
      id: "iq5",
      category: "C++ STL & Data Structures",
      question: "What is the difference between std::map and std::unordered_map in C++?",
      answer: "`std::map` is implemented as a Self-Balancing Red-Black Tree. Elements are kept in sorted order; insertion, lookup, and deletion take $O(\log N)$ time. `std::unordered_map` is implemented as a Hash Table with bucket chaining. Elements are unsorted; average lookup/insertion takes $O(1)$ time (worst-case $O(N)$ on hash collisions).",
      codeSnippet: `std::map<int, int> sortedMap;         // O(log N) - Sorted
std::unordered_map<int, int> hashMap; // O(1) avg  - Unsorted`
    }
  ],

  sandboxProblems: [
    {
      id: "pattern_triangle",
      title: "Problem 1: Right-Angled Number Pattern",
      difficulty: "Easy (Logic Building)",
      description: "Print a right-angled triangle pattern of height N, where row 'i' contains numbers from 1 to i separated by space.",
      inputFormat: "An integer N (1 <= N <= 100)",
      outputFormat: "N lines printing numbers separated by space.",
      sampleInput: "4",
      sampleOutput: "1\n1 2\n1 2 3\n1 2 3 4",
      cppInitialCode: `#include <iostream>

void printPattern(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            std::cout << j << (j == i ? "" : " ");
        }
        std::cout << "\n";
    }
}

int main() {
    int n = 4;
    printPattern(n);
    return 0;
}`,
      javaInitialCode: `public class Main {
    public static void printPattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + (j == i ? "" : " "));
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 4;
        printPattern(n);
    }
}`,
      expectedOutput: "1\n1 2\n1 2 3\n1 2 3 4\n"
    },
    {
      id: "reverse_array",
      title: "Problem 2: In-Place Array Reversal (Two Pointers)",
      difficulty: "Easy (Pre-DSA Concept)",
      description: "Given an array of size N, reverse the array in-place without creating a secondary helper array.",
      inputFormat: "Array of integers.",
      outputFormat: "Space-separated reversed array.",
      sampleInput: "[1, 2, 3, 4, 5]",
      sampleOutput: "5 4 3 2 1",
      cppInitialCode: `#include <iostream>
#include <vector>

void reverseArray(std::vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        std::swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    reverseArray(arr);
    for (int x : arr) std::cout << x << " ";
    std::cout << "\n";
    return 0;
}`,
      javaInitialCode: `public class Main {
    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverseArray(arr);
        for (int x : arr) System.out.print(x + " ");
        System.out.println();
    }
}`,
      expectedOutput: "5 4 3 2 1 \n"
    }
  ],

  quizzes: [
    {
      moduleId: "m1",
      moduleTitle: "Foundations & Memory Basics Quiz",
      questions: [
        {
          id: "q1",
          question: "Why is std::ios_base::sync_with_stdio(false) used in C++ competitive programming?",
          options: [
            "To enable automatic garbage collection",
            "To disable synchronization between C++ streams and C stdio streams for faster I/O speed",
            "To prevent integer overflow in large loops",
            "To allow pass-by-reference for primitive types"
          ],
          answer: 1,
          explanation: "Disabling stdio synchronization stops C++ streams from syncing with C functions like printf/scanf, drastically accelerating input/output operations."
        },
        {
          id: "q2",
          question: "What happens in Java when modifying a String in a loop without StringBuilder?",
          options: [
            "It modifies the string in-place on the stack",
            "It automatically optimizes to StringBuilder",
            "It creates a new String object on Heap every iteration, leading to O(N^2) complexity",
            "It throws a NullPointerException"
          ],
          answer: 2,
          explanation: "Java Strings are immutable. Every string concatenation (`+`) creates a new String object on the heap, making loop concatenation inefficient."
        },
        {
          id: "q3",
          question: "What happens if a C++ program calls 'new' without calling 'delete'?",
          options: [
            "The JVM garbage collector automatically frees it",
            "A Memory Leak occurs because the allocated Heap memory remains unreleased until process termination",
            "The program throws a NullPointerException immediately",
            "The Stack frame shrinks automatically"
          ],
          answer: 1,
          explanation: "C++ requires explicit manual deallocation (`delete`). Omitting `delete` leaves allocated heap bytes trapped until the program finishes."
        }
      ]
    }
  ],

  cheatsheet: [
    {
      category: "Dynamic Array",
      cpp: "std::vector<T>",
      java: "ArrayList<T>",
      complexity: "O(1) amortized access/push",
      context: "Primary linear list container for sequential data in 90% of DSA problems."
    },
    {
      category: "Key-Value Map",
      cpp: "std::map<K, V> (O(log N) Red-Black Tree)\nstd::unordered_map<K, V> (O(1) Hash Table)",
      java: "TreeMap<K, V> (Red-Black Tree)\nHashMap<K, V> (Hash Table)",
      complexity: "Hash: O(1) avg / Tree: O(log N)",
      context: "Essential for frequency counting, hashing, memoization, and graph adjacency lists."
    },
    {
      category: "Unique Set",
      cpp: "std::set<T> (Sorted)\nstd::unordered_set<T> (Unsorted)",
      java: "TreeSet<T> (Sorted)\nHashSet<T> (Unsorted)",
      complexity: "Hash: O(1) / Tree: O(log N)",
      context: "Used for tracking visited elements in BFS/DFS algorithms and removing duplicate elements."
    },
    {
      category: "Priority Queue (Heap)",
      cpp: "std::priority_queue<T> (Max-Heap default)\nstd::priority_queue<T, vector<T>, greater<T>> (Min-Heap)",
      java: "PriorityQueue<T> (Min-Heap default)\nPriorityQueue<>(Collections.reverseOrder()) (Max-Heap)",
      complexity: "O(log N) push/pop",
      context: "Core data structure for Dijkstra's Shortest Path, Kth Largest Element, and Top-K Frequent Elements."
    },
    {
      category: "Stack (LIFO)",
      cpp: "std::stack<T>",
      java: "ArrayDeque<T> (Recommended over legacy Stack class)",
      complexity: "O(1) push/pop",
      context: "Used in Monotonic Stack problems, Parentheses Matching, and DFS iteration."
    },
    {
      category: "Queue (FIFO)",
      cpp: "std::queue<T>",
      java: "Queue<T> (via LinkedList or ArrayDeque)",
      complexity: "O(1) enqueue/dequeue",
      context: "Fundamental for Breadth-First Search (BFS) level-order traversal on Trees and Graphs."
    }
  ]
};
