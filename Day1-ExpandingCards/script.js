const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses() // önce tüm active classları kaldırıyor ardından tıkladığımıza active ekliyor.
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}