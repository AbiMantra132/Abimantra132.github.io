const navbar = document.querySelector(".bars")
const link = document.querySelector(".link")

navbar.addEventListener("click", ()=>{
    link.classList.toggle("toggle")
})