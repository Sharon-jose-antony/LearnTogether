/**
 * Level 6: Object-Oriented Programming (OOP) Mastery
 * File: Inheritance_Interfaces.java
 * Topic: Abstract classes vs Interfaces, method overriding (@Override)
 */

interface Shape {
    double area(); // Implicitly public abstract method
}

class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double w, double h) {
        this.width = w;
        this.height = h;
    }

    @Override
    public double area() {
        return width * height;
    }
}

public class Inheritance_Interfaces {
    public static void main(String[] args) {
        Shape s = new Rectangle(5.0, 4.0);
        System.out.println("Polymorphic Interface Area: " + s.area());
    }
}
