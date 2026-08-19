/**
 * Level 1: Foundations & Syntax
 * File: Input_Output_FastIO.java
 * Topic: BufferedReader vs Scanner for fast input processing (N > 10^5)
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Input_Output_FastIO {
    public static void main(String[] args) throws IOException {
        System.out.println("Fast I/O Demo with BufferedReader & StringTokenizer");

        // BufferedReader reads chunks of 8KB into memory buffer (10x faster than Scanner)
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        // StringTokenizer parses space-separated tokens rapidly
        String sampleLine = "100 200 300";
        StringTokenizer st = new StringTokenizer(sampleLine);

        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        System.out.println("Parsed Sum: " + (a + b + c));
    }
}
