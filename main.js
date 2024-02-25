let body = document.querySelector(".body");
let siledownnavbar = document.querySelector(".slide-navbar-down");
let slideuppernavbar = document.querySelector(".slide-navbar-upper");
let slidenavbar = document.querySelector(".slide-navbar");
let mous = true;


// menu click for smart phone

document.querySelector(".menubtn").addEventListener("click", () => {

    if (mous === true) {

        slidenavbar.style.display = "flex"

        // setTimeout(() => {

        //     slidenavbar.style.width = "260px"
        //     slidenavbar.style.height = "100vh"

        // }, 100)

        mous = false;

    } else {


        // document.querySelector(".slide-navbar").style.width = "0px"

        // setTimeout(() => {

        //     slidenavbar.style.display = "none"
        //     slidenavbar.style.height = "0px"

        // }, 1000)

        mous = true;
    }
});

// Menu click for smart phone

// slide account & menu options

document.querySelector(".slide-account").addEventListener("click", () => {

    siledownnavbar.style.display = "none"
    slideuppernavbar.style.display = "flex"
});

document.querySelector(".slide-menu").addEventListener("click", () => {

    slideuppernavbar.style.display = "none"
    siledownnavbar.style.display = "flex"
});

// slide account & menu options

let searchicon = document.querySelector(".searchicon");
let searchbox = document.querySelector(".search-box");

searchicon.addEventListener("click", () => {

})

searchicon.addEventListener("mouseover", () => {
    searchbox.style.height = "30px"
})

let productlist = document.querySelector(".productlist");
let productmenu = document.querySelector("#productmenu");

productmenu.addEventListener("mouseover", () => {
    productlist.style.display = "flex";
});

productmenu.addEventListener("mouseleave", () => {
    productlist.style.display = "none";
});

productlist.addEventListener("mouseover", () => {
    productlist.style.display = "flex";
});

productlist.addEventListener("mouseleave", () => {
    productlist.style.display = "none";
});