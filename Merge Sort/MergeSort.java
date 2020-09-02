public class MergeSort {

    // int array to store values
    int[] ms;

    // Constructor to initialize array
    MergeSort(int[] ms) {
        this.ms = ms;
    }

    // sorting algorithm
    public void mergeSort(int l, int h) {
        // if low index is less than high
        if (l < h) {
            // calculate middle index
            int m = (l + h) / 2;
            // make recursive call for left and right partitions
            mergeSort(l, m);
            mergeSort(m + 1, h);
            // merge both partitions
            merge(l, m, h);
        }
    }

    // merging legic
    public void merge(int l, int m, int h) {

        // length of left and right partitions
        int n1 = m - l + 1;
        int n2 = h - m;

        // initializing left and right partition arrays
        int left[] = new int[n1];
        int right[] = new int[n2];

        // storing values in left and right partitions
        for (int i = 0; i < n1; i++) {
            left[i] = ms[l + i];
        }
        for (int i = 0; i < n2; i++) {
            right[i] = ms[m + 1 + i];
        }

        // Storing values in original array from left and right paritions accoring to
        // order of elements
        int i = 0, j = 0; // index of partitions
        int k = l; // index of original array
        // store when both arrays have indexes less than their size
        while (i < n1 && j < n2) {
            if (left[i] > right[j]) {
                ms[k] = right[j];
                j++;
            } else {
                ms[k] = left[i];
                i++;
            }
            k++;
        }

        // store remaining elements from both arrays
        while (i < n1) {
            ms[k] = left[i];
            i++;
            k++;
        }
        while (j < n2) {
            ms[k] = right[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        MergeSort ms1 = new MergeSort(new int[] { 9, 10, 2, 3, 4 });
        ms1.mergeSort(0, ms1.ms.length - 1);
        for (int a : ms1.ms) {
            System.out.println(a);
        }
    }

}