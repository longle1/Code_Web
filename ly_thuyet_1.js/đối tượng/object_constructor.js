//object constructor: xây dựng đối tượng


//xây dựng hàm chứa các thuộc tính chung của 2 object
function User(firstName,lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        //this ở bên ngoài hàm và this trong hàm là 2 cái khác nhau
            //this ngoài hàm là tượng trưng cho object
            //this trong hàm là tượng trưng cho từng object được lấy ra
        return `${this.firstName} ${this.lastName}`;
    }
}

//thêm vào hàm tạo bằng thuộc tính prototype
User.prototype.addAge = '19';

var author = new User('lê','long','avatar');
var user = new User('no','name','avatar');

//muốn thêm thuộc tính thì:
author.title = "đây là tác giả";
user.comment = 'đây chứa conmment';

console.log(author.getName());
console.log(author.addAge);
console.log(user.getName());