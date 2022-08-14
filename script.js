const panels = document.querySelectorAll('.panel') 


panels.forEach(panel => panel.addEventListener('click', toggleActive))



function toggleActive(e) {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

    e.target.classList.add('active')
}