//có 2 cách để gọi 1 object:
    //cách 1: dùng object.key       VD: person.name
    //cách 2: dùng object['key']    VD: person['name']


//thêm thuộc tính phone vào object
var phone = 'numberPhone';
var person = {
    name: 'long',
    age: 19,
    school: 'uit',
    [phone]: '0849960603'
};

//cách để thêm 1 key vào object: 
person.email = "ltphilong2001@gmail.com";

//cách gọi key có chứa -
person['my-key'] = 'đây là key'

//cách gán key cho biến khác
var myAge = 'age';
console.log(person[myAge])

//cách xóa 1 key
delete person.age;
console.log(person);