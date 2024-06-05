document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.iconify.design/iconoir.json?icons=cancel")
})

document.getElementById('open-mobile-menu').addEventListener('click', (e) => {
    document.getElementById('collapse').classList.toggle('true')

    if(e.target.firstElementChild.icon === 'hugeicons:menu-05') e.target.firstElementChild.icon = "iconoir:cancel"
    else e.target.firstElementChild.icon = "hugeicons:menu-05"
})
