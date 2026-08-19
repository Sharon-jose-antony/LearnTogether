/**
 * Level 6: Object-Oriented Programming (OOP) Mastery
 * File: Polymorphism_Virtual.cpp
 * Topic: Inheritance, Virtual functions, Abstract classes (Pure Virtual), VTable mechanics
 */

#include <iostream>

// Abstract Base Class
class Shape {
public:
    // Pure Virtual Function forces derived classes to implement area()
    virtual double area() const = 0; 

    // Virtual Destructor ensures derived destructors are called via base pointer!
    virtual ~Shape() {
        std::cout << "[Shape Destructor]\n";
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() const override {
        return width * height;
    }

    ~Rectangle() override {
        std::cout << "[Rectangle Destructor]\n";
    }
};

int main() {
    // Polymorphic Base Pointer pointing to Derived Object
    Shape *shape = new Rectangle(5.0, 4.0);

    // Dynamic Dispatch via VTable calls Rectangle::area()
    std::cout << "Polymorphic Area: " << shape->area() << "\n";

    delete shape; // Properly invokes Rectangle destructor then Shape destructor
    return 0;
}
