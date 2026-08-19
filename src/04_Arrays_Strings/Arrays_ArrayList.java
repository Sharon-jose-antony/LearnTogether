/**
 * Level 4: Arrays, Strings & Memory Storage
 * File: Arrays_ArrayList.java
 * Topic: Fixed arrays vs ArrayList<T> dynamic storage
 */

import java.util.ArrayList;
import java.util.Arrays;

public class Arrays_ArrayList {
    public static void main(String[] args) {
        // 1. Fixed Array (Primitive storage)
        int[] fixedArr = new int[]{10, 20, 30, 40, 50};
        System.out.println("Fixed Array Length: " + fixedArr.length);

        // 2. Dynamic ArrayList (Object reference storage)
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            list.add(i * 10);
        }
        System.out.println("ArrayList Size: " + list.size());

        // 3. 2D Matrix Grid
        int[][] matrix = new int[2][3];
        matrix[1][2] = 99;
        System.out.println("Matrix[1][2]: " + matrix[1][2]);
    }
}
