import java.util.Arrays;
import java.util.List;

public class BubbleSort {

    public static void bubble_sort(List<Integer> arr) {
        for (int i = arr.size() - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr.get(j) > arr.get(j + 1)) {
                    Integer temp = arr.get(j);
                    arr.set(j, arr.get(j + 1));
                    arr.set(j + 1, temp);
                }
            }
        }
        System.out.println(arr.toString());
    }

    public static void main(String[] args) {

        // Reference - https://www.youtube.com/watch?v=euPlXW7dnlI

        // Best Case - swaps=0, comp=((n)*(n-1))/2
        BubbleSort.bubble_sort(Arrays.asList(1, 2, 3, 4, 5));
        // Worst Case - swaps=((n)*(n-1))/2, comp=((n)*(n-1))/2
        BubbleSort.bubble_sort(Arrays.asList(5, 4, 3, 2, 1));
        // Average Case - swaps=((n)*(n-1))/4 [Considering Exceptional Probability],
        // comp=((n)*(n-1))/2
        BubbleSort.bubble_sort(Arrays.asList(1, 2, 4, 3, 5));
    }
}
