var container = document.querySelector('.container');
var circles = document.querySelectorAll('.circle')
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');
var currentValue = 1;
btnNext.addEventListener('click',function(e){
    currentValue++;
    if(currentValue > circles.length)
        currentValue = circles.length;
    setting();
})
btnPrev.addEventListener('click',function(e){
    currentValue--;
    if(currentValue < 1)
        currentValue = 1;
    setting();
})
function setting(){
    circles.forEach(function(e,index){
       if(index < currentValue)
        {
            e.classList.add('active');
        }else{
            e.classList.remove('active')
        }
    });
    let actives = document.querySelectorAll('.active');
    let progress = document.getElementById('progress');
    progress.style.width = ((actives.length - 1)/(circles.length - 1))*100 + '%';
    if(currentValue === 1)
        btnPrev.disabled = true;
    else if(currentValue === circles.length)
        btnNext.disabled = true;
    else
    {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}