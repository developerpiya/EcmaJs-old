a = [1, 2, 3, 4, 5];
console.log(...a);

arr1 = [1, 2, 3];
arr2 = [3, 4, 5];
arr3 = [5, 6, 7];
arr4 = [6, 7, 8];
arr1 = [...arr1, ...arr2, ...arr3, ...arr4];
console.log(arr1)