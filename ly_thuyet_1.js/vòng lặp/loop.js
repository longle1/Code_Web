

/**
  Vòng lặp for/in: lặp qua từng key của đối tượng (có thể là array,object,string)
  Vòng lặp for/of: lặp qua value của đối tượng
  
 */

  //for...in thường dùng để lặp qua các property của object (không nên sử dụng cho array và muốn dùng array thì dùng for each)
var objects = {
  name: 'long',
  age: 19,
  school: 'uit'
}

for(nameOfProperty in objects){
  console.log(nameOfProperty, objects[nameOfProperty]);
}

