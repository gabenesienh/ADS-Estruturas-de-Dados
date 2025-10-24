// Bubble e insertion sorts

#include <iostream>
#include <vector>
#include <chrono>
#include <random>

using std::cout;
using std::vector;
using std::mt19937, std::random_device;

mt19937 rng = mt19937(std::random_device{}());

const int TAMANHO_VETOR = 100000;

vector<int> nums = vector(TAMANHO_VETOR, 0);
//const vector<int> nums = {67, 2, 978, 12, 76, 0, -13, 42, -8, -55};

vector<int> bubbleSort(vector<int> arr) {
    // endOffset previne comparações redundantes
    for (int endOffset = 1; endOffset < arr.size(); endOffset++) {
        bool wasModified = false;

        for (int i = 0; i < arr.size() - endOffset; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                wasModified = true;
            }
        }

        // Se não houve modificações, o sort está completo
        if (!wasModified) break;
    }

    return arr;
}

vector<int> insertionSort(vector<int> arr) {
    // Pular primeiro índice (pois nunca terá um número antes, duh)
    for (int round = 1; round < arr.size(); round++)  {
        int currIndex = round;

        while (arr[currIndex] < arr[currIndex - 1]
        &&     currIndex > 0) {
            int temp = arr[currIndex];
            arr[currIndex] = arr[currIndex - 1];
            arr[currIndex - 1] = temp;

            currIndex--;
        }
    }

    return arr;
}

int main(int argc, char** argv) {
    // Popular nums
    for (int i = 0; i < nums.size(); i++) {
        nums[i] = rng();
    }
    
    vector<int> numsSorted;

    /* -- Bubble sort -- */

    auto bubbleExecStart = std::chrono::steady_clock::now();
    numsSorted = bubbleSort(nums);
    auto bubbleExecEnd = std::chrono::steady_clock::now();

    const std::chrono::duration<double, std::milli> bubbleExecDiff = (bubbleExecEnd - bubbleExecStart);

    /*
    cout << "{";
    for (int num : numsSorted) {
        cout << num << ",";
    }
    cout << "}\n";
    */

    cout << "Tempo de exec. bubble sort: " << bubbleExecDiff.count() << "ms\n";

    /* -- Insertion sort -- */

    auto insertionExecStart = std::chrono::steady_clock::now();
    numsSorted = insertionSort(nums);
    auto insertionExecEnd = std::chrono::steady_clock::now();

    const std::chrono::duration<double, std::milli> insertionExecDiff = (insertionExecEnd - insertionExecStart);

    /*
    cout << "{";
    for (int num : numsSorted) {
        cout << num << ",";
    }
    cout << "}\n";
    */

    cout << "Tempo de exec. insertion sort: " << insertionExecDiff.count() << "ms\n";

    return 0;
}