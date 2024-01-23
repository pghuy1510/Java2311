// Bài 5: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
//  Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [1, 6, 8, 9, 0];
// let arr = arr1.filter((element) => arr2.includes(element));
// console.log(arr);

// Bài 6: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
// let arr = [1, 54, 6, 7];
// let newArr = arr.map(number => number + 5);
// console.log(newArr);

// Bài 7: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
// let m = [1,2,4,5,6,7];
// let n = [3,5,675,8,96];
// function removeElements(m, n){
//     let arr = [1, 8,10,96,7];
//     let shouleRemove = elment => arr.includes(elment);
//     let filteredArr1 = m.filter(element => !shouleRemove(element));
//     let filteredArr2 = n.filter(element => !shouleRemove(element));
//     return {m : filteredArr1, n : filteredArr2};
// }

// let result = removeElements(m, n);
// console.log(result.m);
// console.log(result.n);

// Bài 8: Cho array 1 như sau: 
// players = [
// 	{ id: 11, name: 'Messi', age: 33 },
// 	{ id: 12, name: 'Ronaldo', age: 34 },      
// 	{ id: 13, name: 'Young', age: 35 },        
// 	{ id: 14, name: 'Mane', age: 21 },          
// 	{ id: 15, name: 'Salah', age: 24 },
// ]
// Hãy chuyển đổi nó về array có dạng sau: 
// playersModified = { 
// 	11: {id: 11, name: "Messi", age: 33},
// 	12: {id: 12, name: "Ronaldo", age: 34},
// 	13: {id: 13, name: "Young", age: 35},
// 	14: {id: 14, name: "Mane", age: 21},
// 	15: {id: 15, name: "Salah", age: 24}
// }.

// let players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]

// let playersModified = [];
// for(let player of players){
//     playersModified[player.id] = {...player};
// }
// console.log(playersModified);

// Cho mảng A = [1,5,3,8,10]
// +Viết chương trình JS tính giá trị trung bình của mảng.
// function average(arr){
//     const sum = arr.reduce((acc, sum) => acc + sum, 0);
//     return sum / arr.length;
// }

// +Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
// function sapXep(arr){
//     return arr.slice().sort((a, b) => b - a);
// }
// let arr = [1, 5, 3, 8, 10];
// let arr2 = sapXep(arr);
// console.log(arr2);
// 	Input: A = [1,5,3,8,10]
// 	Output: A = [10, 8, 5, 3, 1]
// +Tính tổng các số dương trong mảng
// function positiveTotal(arr){
//     return arr.filter(number => number > 0).reduce((acc, number) => acc + number, 0);
// }
// let arr = [1, 5, 3, 8, 10];
// let arr2 = positiveTotal(arr);
// console.log(arr2);
// +Tính tổng các số lẻ trong mảng
// function oddTotal(arr){
//     return arr.filter(number => number % 2 !== 0).reduce((acc, number) => acc + number, 0);
// }

// +Tìm số lớn thứ 2 trong mảng
// function searchNumber2(arr){
//     let unique = Array.from(new Set(arr));
//     let search = unique.sort((a, b) => b - a);
//     return search[1];
// }
// let arr = [1, 5, 3, 8, 10];
// let arr2 = searchNumber2(arr);
// console.log(arr2);
// 	Output: 8
// +Đếm các số chính phương có trong mảng
function countPerfectSquares(arr) {
    return arr.filter(num => Math.sqrt(num) % 1 === 0).length;
}

let arr = [1, 5, 3, 8, 10];
let arr2 = countPerfectSquares(arr);
console.log(arr2);
