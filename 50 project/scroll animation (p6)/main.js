var contents = document.querySelectorAll('.content');
moveBox();
window.addEventListener('scroll',moveBox);
function moveBox(){
    const triggerBottom = window.innerHeight / 5 * 4;
    contents.forEach(e => {
        const boxTop = e.getBoundingClientRect().top;
        console.log('boxTop: ',boxTop,'triggerBottom: ',triggerBottom);
        if(boxTop < triggerBottom)
            e.classList.add('isShow');
        else
            e.classList.remove('isShow')
    })
}