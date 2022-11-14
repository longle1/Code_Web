var arrs = [1,3,5,2,6,7,8,2,9];

var filter = arrs.filter(function (evenNum){
    return evenNum%2==0;
})
console.log(filter);

var Students = [
    {name: 'long',age: 19},
    {name: 'hung',age: 20},
    {name: 'huy',age: 11},
    {name: 'nghia',age: 25},
    {name: 'tung',age: 10},
    {name: 'hung',age: 13}
]
var filterStudents = Students.filter(function (student){
    return student.age > 19;
})
console.log(filterStudents);
