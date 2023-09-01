import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



class Result {

    /*
     * Complete the 'anagram' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts STRING s as parameter.
     */

    public static int anagram(String s) {
    // Write your code here
    if (s.length() % 2 == 1) {
        return -1;
    }
    int len = s.length() / 2;
    String first = s.substring(0, len);
    String second = s.substring(len);
        
    int[] count = new int[26];
    
    for(int i = 0; i < len; i++) {
        count[first.charAt(i) - 'a']++;
        count[second.charAt(i) - 'a']--;
    }
    
    int changes = 0;
    for (int i = 0; i < 26; i++) {
        changes += Math.abs(count[i]);
    }
    
    return changes / 2;

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, q).forEach(qItr -> {
            try {
                String s = bufferedReader.readLine();

                int result = Result.anagram(s);

                bufferedWriter.write(String.valueOf(result));
                bufferedWriter.newLine();
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
