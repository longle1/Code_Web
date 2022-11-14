//destructuring: nghĩa là phá vỡ 1 array hoặc là 1 object
//2 bên dấu bằng viết tương tự nhau
var arrs = [1,2,3];
var [a,b,c] = arrs;

var objects = {
    name: 'long',
    age: 19
}
var {name,age} = objects;
console.log(name);
//muốn đổi tên object thì dùng :
var {name: ten,age: tuoi} = objects;


//spread operator
var persons = ['long',19,'uit']
function showInfo(ten,tuoi,truong){
    console.log(ten,tuoi,truong);
}
showInfo(...persons); 
