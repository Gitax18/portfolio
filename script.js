// javascript for my roject section 

var panels = document.querySelectorAll('.mpanel');

panels.forEach(panel => {
    panel.addEventListener("click", ()=>{
        removeMactiveClass();
        panel.classList.add('mactive');
    })
})

function removeMactiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('mactive')
    })
}


