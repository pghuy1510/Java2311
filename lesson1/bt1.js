// // Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’. Cho biết kiểu dữ liệu của 2 mảng đó? -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả? -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?
// // const list1 = ['a', 'b' , 'c'];
// // const list2 = ['a' , 'b', 'c'];
// // const list = list1 + list2;
// // console.log(list);
// // console.log(list1 == list2);
// // Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. -In ra phần tử có chỉ số 0 và 3 trong mảng. -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// const list = ['a', 'b', 'c', 'd'];
// console.log(list[0], list[3]);
// console.log(list[1] + list[2]);

// let tmp = list[1];
// list[1] = list[3];
// list[3] = tmp;
// console.log(list);
// Khai báo 1 mảng gồm các số bất kỳ. -Hãy in ra các số chẵn trong mảng đó. -Hãy tính tổng các phần tử trong mảng. -Hãy tìm phần tử nhỏ nhất trong mảng.
// Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.
// Khai báo 1 mảng gồm các số bất kỳ. 
// const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33]
// // -Tính tích của các phần tử trong mảng đó.
// let tich = 1;
// for(let i = 0; i <numbers.length; i++){
//     tich *= numbers[i];

// }
// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// const count = numbers.filter((number) => number % 2 === 0);
// console.log(count);
// let min = count[0];

// for(let i = 0; i < count.length ; i++){
//     if(count[i] < min){
//         min = count[i];
//     }
// }
// console.log(min);
// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// const count = numbers.filter((number) => number % 3 === 0);
// console.log(count);
// let max = count[0];
// for(let i = 0; i < count.length ; i++){
//     if(count[i] > max){
//         max = count[i];
//     }
// }
// console.log(max);
// -Tính giá trị trung bình của mảng.
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// let giaTriTB = sum / numbers.length;
// console.log(giaTriTB);
// -Lọc ra các số nguyên tố trong mảng.
// for (let number of numbers) {
// 	let count = 0;
// 	for (let i = 1; i <= number; i++) {
// 		if (number % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number + ' là số nguyên tố');
// 	}
// }
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// const count = numbers.filter((number) => number < 10);
// if(count !== undefined){
//     console.log('co so nho hon 10');
// }
// else{
//     console.log('khong co');
// }
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// for(let number of numbers){
//     if(number > 20){
//         console.log('co so lon hon 20');
//         break;
//     }
// }
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// let n ;
// while(true){
//     n = Number(prompt('nhap vao n'));
//     if(numbers.includes(n)){
//         console.log('so n ton tai trong mang');
//         break;
//     }
//     else{
//         console.log('vui long nhap lai');
//     }
// }
// 
// // Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần
// for(let i = 0; i < numbers.length; i++){
//     for(let j = i; j < numbers.length; j++){
//         if(numbers[i] > numbers[j]){
//             const tmp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = tmp;
//         }
//     }
// }
// console.log(numbers);





// Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// const list = ['javascript so 3', 'php so 4', 'html so 1', 'css so 2'];
// const myString = "so";
// // -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// // let min = list[0];
// // for(let i = 0; i < list.length; i++){
// //     if(min.length > list[i].length){
// //         min = list[i];
// //         break;
// //     }
// // }
// // console.log(min);
// // // -Tìm những chuỗi trong mảng có chứa giá trị text.
// // const chuoiThoaMan = list.filter(chuoi => chuoi.includes(myString));
// // console.log(chuoiThoaMan);
// // -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// const newS =['jav', 'php', 'htm', 'css'];
// // -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// console.log(newS.join(' - '))

// Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
const d1 = [1, 3, 5 , 6, 4];
const d2 = [10, 2, 68, 23, 801];
// console.log(d1.concat(d2));
// // -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// const kiemTra = d1.every(value => d2.includes(value));
// if(kiemTra){
//     console.log('tất cả các giá trị số trong d1 có nằm trong d2');
// }
// else{
//     console.log('co it nhat 1 giá trị số trong d1 có nằm trong d2')
// }
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sum = 0;
// for(let i = 0; i < d1.length; i++){
//     sum += d1[i];
// }
// const kiemTra = d2.some(value => value % sum === 0);
// if(kiemTra){
//     console.log('có phần tử nào trong d2 chia hết cho tổng của d1');
// }
// else{
//     console.log('khong co');
// }
// // -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// const kiemTra2 = d2.filter(number => number % 2 === 0);
// const kiemTra1 = d1.filter(number => number % 2 === 0);
// console.log(kiemTra2.concat(kiemTra1));
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort)





// Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// // // Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// // // -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// // let count = [];
// // for(let i = 0 ; i < growth.length; i++){
// //     let chuoi = 0;
// //     for(let j = 0; j < growth[i].length; j++){
// //         chuoi += growth[i][j];
// //     }
// //     let giaTriTB = chuoi / growth[i].length;
// //     count.push(giaTriTB);
// // }
// // console.log(count);
// // // -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// // let max = count[0];
// // for(let number of count){
// //     if(number > max){
// //         max = number;
// //     }
// // }
// // console.log(max);
// // // -Tìm giá trị tăng trưởng theo quý lớn nhất.
// let maxGrowthByQuarter = Math.max(...growth.map(row => Math.max(...row)));

// console.log("Giá trị tăng trưởng theo quý lớn nhất:", maxGrowthByQuarter);
// // -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
// let count1 = [];
// for(let j = 0 ; j < growth[0].length; j++){
//     let chuoi1 = 0;
//     for(let i = 0; i < growth.length; i++){
//         chuoi1 += growth[i][j];
//     }
//     let giaTriTB1 = chuoi1 / growth.length;
//     count1.push(giaTriTB1);
// }
// console.log(count1);

// // Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
// let array = [];
// for(let i = 0; i < 10; i++){
//     array.push(Math.floor(Math.random() * 100));
// }
// console.log(array);
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 !== 0){
//         sum += array[i];
//     }
// }
// console.log(sum);


// // Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
let inputString = prompt("Nhập vào dãy số, mỗi số cách nhau bởi dấu phẩy:");

let numberArray = inputString.split(",").map(Number);

console.log("Dãy số đã nhập:", numberArray);

// // -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// let result = null;
// for(let number of numberArray){
//     if(number > 5 && number % 2 === 0){
//         console.log(number);
//         break;
//     }
// }
// if(result == null){
//     console.log('trong mang khong co so nao thoa man');
// }
// else{
//     console.log('co phan tu thoa man');
// }
// // -Tìm tất cả số lẻ trong dãy s .
// for(let number of numberArray){
//     if(number % 2 !== 0){
//         console.log(number);
//     }
// }
// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.

for(let i = 0; i < numberArray.length; i++){
    numberArray =  numberArray ** 2;
}
let x = numberArray.join(',');
console.log(x);
