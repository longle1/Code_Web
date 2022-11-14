var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    }
];

//using map fn
var ListCourse = courses.map(function(course){
    return course.name;
});
console.log(ListCourse);

//using reduce fn
var total = courses.reduce(function(total, currentValue){
    return total + currentValue.coin;
},0);
console.log(total);


//Flat - "làm phẳng" mảng từ Depth array - "mảng sâu" 
var DepthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = DepthArray.reduce(function(newArray, currentValue){
    return newArray.concat(currentValue);
}, []);
console.log(flatArray);

//lấy ra các khóa học đưa vào mảng mới
var topics = [
    {
        topic: 'front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];
var courses = topics.reduce(function(newArray, value){
    return newArray.concat(value.courses);
}, []);
var listCourses = courses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
});
console.log(listCourses.join(' '));