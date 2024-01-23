// Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// function timNghiem(a, b, c){
// if(a === 0){
// console.log('phuong trinh vo nghiem');
// }
//     let denta = b * b - 4 * a * c;
// if(denta > 0){
// let x1 = (-b + Math.sqrt(denta))/ 2 * a;
// let x2 = (-b - Math.sqrt(denta))/2*a;
// return[x1, x2];
// }
//     else if(denta == 0){
// let x = -b/2*a;
// return x;
// }
//     else{
// return('phuong trinh vo nghiem');
// }
// }
// console.log(timNghiem(1, -3, 2));
// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
// function kiemTra(a, b, c){
//     if(a + b > c && a + c > b && b + c > a){
//         return true;
//     }
//     else{
//         return false;
//     }
// } 
// let result = kiemTra(3, 4, 5);
// if(result){
//     console.log('ba so tao thanh tam giac');
// }
// else{
//     console.log('ba so khong tao thanh tam giac');
// }
// 3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
function kiemTra(day, month, year){
    
}

// Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let users = [
//     { id: 1, name: 'User1' },
//     { id: 2, name: 'User2' },
//     { id: 3, name: 'User3' },
// ];
// let n = Number(prompt('nhap vao 1 so n'));
// function check(usersID){
//     return users.find(users => users.id === usersID)
// }
// let check1 = check(n);
// if(check1){
//     console.log('co so thoa man', check1);
// }
// else{
//     console.log('khong co so thoa man');
// }
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let users = [
//     { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' },
//     { first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@example.com' },
//     { first_name: 'Alice', last_name: 'Smith', email: 'alice.smith@example.com' },
// ]
// function getEmailByKeyword(keyword){
//     let kiemTra = users.filter(user =>{
//         let fullName = (user.first_name + ' ' + user.last_name).toLowerCase();
//         return fullName.includes(keyword.toLowerCase());
//     })
//     let emails =  kiemTra.map(user => user.email);
//     return emails;
// }
// let keyword = prompt('nhap vao chuoi keyword');
// let kiemTra = getEmailByKeyword(keyword);
// if(kiemTra.length > 0){
//     console.log('email found', kiemTra);
// }
// else{
//     console.log('email not found' + keyword + ' ');
// }
// -Đếm số lượng user có age > 50.
// let users = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 55 },
//     { name: 'Alice', age: 60 },
// ]
// function dem(users){
//     return users.filter(user => user.age > 50).length;
// }
// let dem1 = dem(users);
// console.log(dem1);
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let users = [
    //     { name: 'John', maritalStatus: 'married' },
    //     { name: 'Jane', maritalStatus: 'single' },
    //     { name: 'Alice', maritalStatus: 'married' },
// ]
// function married(users){
    //     return users.filter(user => user.maritalStatus === 'married').length;
// }
// function single(users){
    //     return users.filter(user => user.maritalStatus === 'single').length;
// }
// let dem1 = married(users);
// console.log(dem1);
// let dem2 = single(users);
// console.log(dem2);
// -Đếm số lượng user theo từng ngành nghề tương ứng.
    //     Output:
    //     {
//         "Dentist": 5,
        //         "Developer": 13,
        //         "Doctor": 6,
        //         "Farmer": 8,
        //         "Project Manager": 5,
        //         "Teacher": 9,
        //         "Worker" : 4
    //     }

// let users = [
    //     { name: 'John', occupation: 'Developer' },
    //     { name: 'Jane', occupation: 'Teacher' },
    //     { name: 'Alice', occupation: 'Dentist' },
    //     { name: 'Bob', occupation: 'Developer' },
    //     { name: 'Charlie', occupation: 'Doctor' },
    //     { name: 'David', occupation: 'Farmer' },
    //     { name: 'Eve', occupation: 'Project Manager' },
    //     { name: 'Frank', occupation: 'Teacher' },
    //     { name: 'Grace', occupation: 'Worker' },
    //     { name: 'Helen', occupation: 'Developer' },
// ]


// // function countUsersByOccupation(users) {
// //     let occupationCount = {};

// //     users.forEach(user => {
// //         let occupation = user.occupation;

// //         if (occupationCount[occupation]) {
// //             occupationCount[occupation]++;
// //         } else {
// //             occupationCount[occupation] = 1;
// //         }
// //     });

// //     return occupationCount;
// // }

// // // Gọi hàm và hiển thị kết quả
// // let result = countUsersByOccupation(users);
// // console.log(result)
// Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
// const storage = {
//     name: 'Fake Storage',
//     address: 'HN',
//     owner: 'Dung Tien',
//     items: [
//         {
//             id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
//         },
//         {
//             id: 2, name: 'Product 2', category: 'Device', pricce: 110
//         },
//         {
//             id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
//         },
//     ]
// }
// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
