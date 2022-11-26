const serverBanner = document.querySelector(".server-banner")


serverBanner.addEventListener("click", e => {
    serverBanner.classList.toggle("open");
});



const categorieName1 = document.querySelector(".categorie-name1")
const categorie1 = document.querySelector(".categorie1")

const categorieName2 = document.querySelector(".categorie-name2")
const categorie2 = document.querySelector(".categorie2")

const categorieName3 = document.querySelector(".categorie-name3")
const categorie3 = document.querySelector(".categorie3")

const categorieName4 = document.querySelector(".categorie-name4")
const categorie4 = document.querySelector(".categorie4")


categorieName1.addEventListener("click", e => {
    categorie1.classList.toggle("open");
});

categorieName2.addEventListener("click", e => {
    categorie2.classList.toggle("open");
});

categorieName3.addEventListener("click", e => {
    categorie3.classList.toggle("open");
});

categorieName4.addEventListener("click", e => {
    categorie4.classList.toggle("open");
});