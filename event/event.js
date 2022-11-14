// var toggleDiv = document.querySelectorAll('.toggle');
// toggleDiv.forEach(div => {
//     let id = div.getAttribute('id');
//     let btn = document.querySelector('.toggle#' + id + ' #btn');
//     let toggleContent = document.querySelector('#'+id+' .toggle-content');
//     btn.addEventListener('click',event => {
//         event.preventDefault();
//         if(toggleContent.style.display != 'none')
//             toggleContent.style.display = 'none';
//         else
//             toggleContent.style.display = 'block';
//     })
// })

var toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle =>{
    let idToggle = toggle.getAttribute('id');
    let btn = document.querySelector('.toggle#'+idToggle+' button');
    let contentDiv = document.querySelector('.toggle#'+idToggle+' .toggle-content');
    btn.addEventListener('click', event =>{
        event.preventDefault();
        if(contentDiv.classList.contains('isOpen'))
            contentDiv.classList.remove('isOpen');
        else
            contentDiv.classList.add('isOpen');
    })

})

var darkMode = document.querySelector('.dark-mode');
var spans = document.querySelectorAll('span')
spans.forEach(function (span) {
    darkMode.addEventListener('click',event=>{
        event.preventDefault();
        if(span.classList.contains('isOpen'))
        {
            document.body.style.backgroundColor = 'black';
            span.classList.remove('isOpen');
        }else{
            document.body.style.backgroundColor = 'white';
            span.classList.add('isOpen');
        }
    })
})

var tabs = document.querySelectorAll('.tab');
tabs.forEach(tab =>{
    let id = tab.getAttribute('id');
    let tabLinks = document.querySelectorAll('#'+id+' ul li a');
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click',event => {
            event.preventDefault();
            let targetID = tabLink.getAttribute('target-id');
            let targetContent = document.querySelectorAll('#'+id+' .tab-contents .tab-content');
            let tabContent = document.querySelector('#'+id+' .tab-contents .tab-content:nth-child('+targetID+')');
            for(let i = 0;i < targetContent.length; i++)
                targetContent[i].classList.remove('isOpen');
            tabContent.classList.add('isOpen');
        })
    })
})