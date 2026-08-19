/**
 * Level 5: Memory & Pointer Deep Dive (Interview-Level)
 * File: Smart_Pointers_RAII.cpp
 * Topic: std::unique_ptr, std::shared_ptr, std::weak_ptr, circular reference memory leaks
 */

#include <iostream>
#include <memory>

class Node {
public:
    int id;
    std::shared_ptr<Node> next;
    std::weak_ptr<Node> prev; // Use weak_ptr to break circular reference memory leak!

    Node(int i) : id(i) {
        std::cout << "[Node " << id << " Created]\n";
    }
    ~Node() {
        std::cout << "[Node " << id << " Destroyed]\n";
    }
};

int main() {
    std::cout << "--- 1. std::unique_ptr (Exclusive Ownership) ---\n";
    {
        std::unique_ptr<Node> uNode = std::make_unique<Node>(1);
        std::cout << "Node ID: " << uNode->id << "\n";
        // std::unique_ptr<Node> copy = uNode; // COMPILE ERROR: Cannot copy unique_ptr!
        std::unique_ptr<Node> moved = std::move(uNode); // Ownership transferred
    } // moved automatically freed here!

    std::cout << "\n--- 2. std::shared_ptr & weak_ptr (Shared Ownership) ---\n";
    {
        auto nodeA = std::make_shared<Node>(10);
        auto nodeB = std::make_shared<Node>(20);

        nodeA->next = nodeB;
        nodeB->prev = nodeA; // std::weak_ptr prevents circular reference leak!

        std::cout << "nodeA use_count: " << nodeA.use_count() << "\n";
        std::cout << "nodeB use_count: " << nodeB.use_count() << "\n";
    } // Both nodeA and nodeB destructors correctly invoked!

    return 0;
}
