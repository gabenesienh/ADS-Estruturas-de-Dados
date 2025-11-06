#include <algorithm>
#include <chrono>
#include <iostream>
#include <vector>

#include "nums.hpp"

using std::sort;
using std::cout, std::endl;
using std::vector;

const int NUM_TO_FIND = -555;

int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;
}

int sentinelSearch(vector<int>& arr, int target) {
    int lastValue = arr[arr.size() - 1];
    arr[arr.size() - 1] = target; // Temporariamente substituir por sentinela
    
    int i = 0;

    while (arr[i] != target) {
        i++;
    }

    if (i < arr.size() - 1 || arr[i] == lastValue) {
        arr[arr.size() - 1] = lastValue;
        return i;
    }

    arr[arr.size() - 1] = lastValue;
    return -1;
}

int binarySearch(vector<int>& arr, int target) {
    int left = 0; // Inclusivo
    int right = arr.size() - 1; // Inclusivo

    while (left <= right) {
        int middle = (right + left)/2;

        if (arr[middle] == target) {
            return middle;
        }

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

int main(int argc, char** argv) {
    sort(nums.begin(), nums.end());

    /* -- Busca linear -- */

    auto linearExecStart = std::chrono::steady_clock::now();
    linearSearch(nums, NUM_TO_FIND);
    auto linearExecEnd = std::chrono::steady_clock::now();

    const std::chrono::duration<double, std::milli> linearExecDiff = (linearExecEnd - linearExecStart);
    
    cout << "Busca linear: " << linearExecDiff.count() << "ms" << endl;

    /* -- Busca sentinela -- */

    auto sentinelExecStart = std::chrono::steady_clock::now();
    sentinelSearch(nums, NUM_TO_FIND);
    auto sentinelExecEnd = std::chrono::steady_clock::now();

    const std::chrono::duration<double, std::milli> sentinelExecDiff = (sentinelExecEnd - sentinelExecStart);

    cout << "Busca sentinela: " << sentinelExecDiff.count() << "ms" << endl;

    /* -- Busca binária -- */

    auto binaryExecStart = std::chrono::steady_clock::now();
    binarySearch(nums, NUM_TO_FIND);
    auto binaryExecEnd = std::chrono::steady_clock::now();

    const std::chrono::duration<double, std::milli> binaryExecDiff = (binaryExecEnd - binaryExecStart);

    cout << "Busca binária: " << binaryExecDiff.count() << "ms" << endl;

    return 0;
}