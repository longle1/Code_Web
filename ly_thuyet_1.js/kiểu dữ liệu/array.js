var arr = [1,2,3,4,5];

//1.push: thêm phần tử vào cuối mảng
arr.push(10);

//2.shift: xóa đi phần tử ở đầu mảng
arr.shift();

//3.unshift: thêm 1 phần tử vào đầu mảng
arr.unshift(1000);

//4.pop: xóa 1 phần tử ở cuối mảng
arr.pop();

//5.indexOf():
console.log(arr.indexOf(3));
//6.lastIndexOf()
console.log(arr.lastIndexOf(3));

//7.includes()

//8.sort(): hàm sắp xếp mảng theo thứ tự tăng dần

//9.reverse(): đảo ngược thứ tự của mảng

//10. .sort().reverse(): sắp xếp giảm dần

//11.slice(start,end): chỉ cắt mà không ảnh hưởng tới mảng ban đầu
var cutArr = arr.slice(3);
console.log(cutArr);
console.log(arr);
//12.splice(start, count): cắt các phần tử chỉ định ra khỏi mảng cha và làm ảnh hưởng tới mảng cha
var cutArr1 = arr.splice(3);
console.log(cutArr1);
console.log(arr);

//13. filter(fn): hàm lọc
var arr1s = [1,2,3,4,5,6,k7,8,9];
var evenNum = arr1s.filter(function(index){
    return index % 2 == 0;
})
console.log((evenNum));

//Vd khác về hàm filter
var Students = [
    {name: 'Long',gender: 'Nam',age: 19},
    {name: 'Hưng',gender: 'Nam',age: 20},
    {name: 'Thúy',gender: 'Nữ',age: 30},
]
var filterStudents = Students.filter( student => student.age >= 20 && student.gender == 'Nam')
console.log(filterStudents);

//14.map(fn): là hàm ánh xạ tạo ra 1 mảng mới từ mảng cũ => bằng cách cho từng phần tử đi qua hàm
var digit = [1,2,3,4,5,6];
var diemX2 = digit.map(diem => diem*2);
console.log(diemX2);

//15.reduce(fn,initializeValue): 
var products = [
    {phone: 'oppo K3',price: 7000000},
    {phone: 'iphoneX',price: 20000000},
    {phone: 'samsung galaxy zphone 3',price: 50000000}
]
//muốn tính tổng tiền của sản phẩm thì làm sao?
var total = products.reduce((sum,product) => sum + product.price,0);
console.log(total);


//tính tổng tiền của sản phẩm có giá trên 20
var products1 = [
    {phone: 'oppo K3',price: 10},
    {phone: 'iphoneX',price: 20},
    {phone: 'samsung galaxy zphone 3',price: 15},
    {phone: 'samsung',price: 25},
    {phone: 'iphone 13',price:   30},
    {phone: 'iphone  11',price: 5}
];
var sum = products1.reduce((accumalator, product) => {
    if(product.price > 20)
        return accumalator + product.price;
    return accumalator;
}, 0);
console.log(sum);   

//16.forEach(): lặp qua từng phần tử của mảng
products1.forEach(product => {
    console.log(product);
})

//17.some(): trả về true/false
    //chạy qua từng phần tử và kiểm tra xem có phần tử nào thỏa mãn hay không
    //chỉ cần trong mảng có ít nhất 1 phần tử là true thì kết qủa là true
var checkProduct = products1.some(product =>product.price > 20); 
console.log(checkProduct);

//18.every(): chạy qua tất cả phần tử trong mảng và kiểm tra xem tất cả phần tử có thỏa mãn hay không
    //Nếu chỉ có 1 phần tử false thì tất cà sẽ false