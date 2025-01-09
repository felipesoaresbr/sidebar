const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.getElementById('menu-toggle')
const submenu = document.querySelector('.submenu')
const paragraphs = Array.from(sidebar.getElementsByTagName('p'))

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.classList.toggle('closed')
    toggleBtn.classList.toggle('close')
    submenu.classList.toggle('closed')

    if (submenu.classList.contains('closed')) {
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'none'
        })
    }
    else {
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'block'
        })
    }
})