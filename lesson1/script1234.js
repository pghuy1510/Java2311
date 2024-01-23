// const arr = [1, 54, 6, 7];
// const newArr = arr.map((value) =>{
//     return value + 5;
// });
// console.log(newArr);
// for(let element of arr){
//     newArr.push(element + 5);
// }
// console.log(newArr);

// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

// Input: "abcdef"
// // Ouput: "fedcba"

// function reverseString(inputString){
//     let arr = inputString.split('');
//     arr.reverse();
//     let reverserString = arr.join('');
//     return reverserString;
// }

// let input = 'abcdef';
// let reverse = reverseString(input);
// console.log(reverse);

// Viết một function xoá các phần từ trùng lặp trong một mảng các số:

// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]

// function deleteNumber(inputNumber){
// let arr = [...new Set(inputNumber)];
// return arr;
// }

// let input = [1, 2, 3, 4, 5, 4, 2, 6, 4];
// let check = deleteNumber(input);
// console.log(check);


