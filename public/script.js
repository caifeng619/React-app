// js for hamburger nav bar
const hamburger=document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
})

links.forEach(link =>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove("open");
    })
})