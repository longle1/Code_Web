//1.indexOf: trả về vị trí đầu tiên của chuỗi con và nếu không tồn tại thì trả về -1
var text = "Lê Trần Phi Long";
console.log(text.indexOf('Trần'));

//2.LastIndexOf: trả về vị trí cuối cùng mà chuỗi con nằm trong chuỗi cha
console.log(text.lastIndexOf('Phi'));

//3.Includes: trả về true,false -> nếu chuỗi con có trong chuỗi cha
console.log(text.includes('Long'));

//4.subString(start,end): hàm cắt chuỗi 
//hoặc là subString(start): cắt từ start tới cuối chuỗi
var tenDaCat = text.substring(3,8);
console.log(tenDaCat);

//5. toUpperCase(): viết hoa
//6. toLowerCase(): viết thường
//7. length: trả về độ dài của chuỗi
console.log(text.length);

