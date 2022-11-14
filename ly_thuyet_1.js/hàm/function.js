//hàm bình thường
function chao(){
    console.log('chao');
}
chao();

//cách khai báo hàm:
    //function [tên hàm] (){statement}

//hàm có tham số
function chao1(ten){
    console.log('xin chao '+ ten);
}
chao1('long');

//dùng hàm không tên: anonymous function
(function (ten){
    console.log('chao' + ten);
})('long');

var chao2 =  function(){
    console.log('hello');
}

//arrow function
var chao3 = () =>console.log('chao');
chao3();
//Nếu hàm chỉ có 1 tham số thì không cần để trong ()

//muốn trả về 1 kết quả trong 1 dòng thì không cần dùng return
var tong = (a,b) => a + b;
console.log(tong(2,3));




//chú ý: 2 hàm này là khác nhau
var hello = () => console.log('đây là hàm trả về kết quả');
var hello1 = function () {
    console.log('đây chỉ là hàm xuất ra kết quả');
}