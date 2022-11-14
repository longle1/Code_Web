var divContainer = document.querySelector('.container');
var panels = divContainer.querySelectorAll('.container .panel');
panels.forEach(function(element){
    element.addEventListener('click',function(e){
        e.stopPropagation();
        removeActive();
        element.classList.add('active');
    })
})
function removeActive(){
    panels.forEach(function(e){
        e.classList.remove('active');
    })
}