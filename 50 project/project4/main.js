var btn = document.querySelector('.btn');
var div = document.querySelector('.search');
var input = document.querySelector('.input');
console.log(input);
btn.addEventListener('click',function(){
    if(!div.classList.contains('isShow')){
        div.classList.add('isShow');
    }else{
        div.classList.remove('isShow');
    }
})