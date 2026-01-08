var arr= [
    "",
    ""
]


function left() {
    const menu = document.querySelector("#menu");
    menu.scrollLeft -= 150;

    if (menu.scrollLeft > 0) {
        document.querySelector("#left-arrow").style.display = "inline";
    }

    if (menu.scrollLeft <= 1) {
        document.querySelector("#left-arrow").style.display = "none";
    }

    if (menu.scrollLeft + menu.clientWidth < menu.scrollWidth - 1) {
        document.querySelector("#right-arrow").style.display = "inline";
    }
}

function right() {
    const menu = document.querySelector("#menu");
    menu.scrollLeft += 150;

    if (menu.scrollLeft > 0) {
        document.querySelector("#left-arrow").style.display = "inline";
    }

    if (menu.scrollLeft + menu.clientWidth >= menu.scrollWidth - 1) {
        document.querySelector("#right-arrow").style.display = "none";
    }
}
function playVid(element){
    element.querySelector(".thumb").style.display="none"
    element.querySelector(".side-vid").style.display="inline"
    element.querySelector(".vid-length").style.display="none"
    element.querySelector(".points").style.left="28px"
}
function returnThumb(element){
    element.querySelector(".thumb").style.display="inline"
    element.querySelector(".side-vid").style.display="none"
    element.querySelector(".vid-length").style.display="inline"
    element.querySelector(".points").style.left="-1px"
}
let expanded = false;

function more(element){
    if (!expanded) {
        element.innerHTML = `
        <p>54,745 views  May 10, 2024 <span class='blue'>CSS Tutorial</span></p><p>This video is an introduction to Background Reabeat and Position in CSS.</p><p id='third-desc'>Part of a series of video tutorials to learn CSS for biggeners!<span class='bold'></span></p><p>The page this is based on:<br><a href='#' class='blue'>https://www.w3schools.com/css/css_bac...</a><br>The full tutorial this is based on: <a href='#' class='blue'>https://www.w3schools.com/css/default...</a><br>Run HTML in your browser: <a href='#' class='blue'>https://www.w3schools.com/tryit/tryit...</a><br>Get your own website: <a href='#' class='blue'>https://www.w3schools.com/spaces/inde...</a><br><br>Chapters in this video:<br><span class='blue'>00:00</span> - Introduction to Background Repeat and Position<br><span class='blue'>00:08</span> - CSS Background Repeat<br><span class='blue'>00:19</span> - CSS background-repeat repeat-x Example<br><span class='blue'>00:50</span> - CSS Show Background Image Only Once<br><span class='blue'>01:05</span> - CSS Background Position<br><br><br><span class='bold' onclick='showLess(this)'>Show less</span> </p>
        `;
        expanded = true;
    } else {
        element.innerHTML = `
        <p>54K views 1 year ago <span class='gray'>CSS Tutorial</span></p>
        <p>This video is an introduction to Background Repeat and Position in CSS.</p>
        <p id='third-desc'>Part of a series of video tutorials to learn CSS for beginners!...
        <span class='bold'>more</span></p>
        `;
        expanded = false;
    }
}
function changeBackground(){
    var z = document.querySelector(".header");

    if (window.scrollY > 0){
        z.style.background = "#0f0f0f";
    } else {
        z.style.background = "#161718";
    }
}
function toggleTheme() {
    document.body.classList.toggle("light");

    const icon = document.querySelector(".theme-icon");

    if (document.body.classList.contains("light")) {
        icon.innerHTML = `
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42ZM1 11h3v2H1v-2Zm10-9h2v3h-2V2Zm7.66 3.46 1.41-1.41-1.79-1.8-1.42 1.42 1.8 1.79ZM17 11h3v2h-3v-2Zm-5 4a4 4 0 100-8 4 4 0 000 8Zm1 7h-2v-3h2v3Zm4.24-2.84 1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42ZM6.34 19.54l-1.41 1.41 1.79 1.8 1.42-1.42-1.8-1.79Z"/>
        `;
    } else {
        icon.innerHTML = `
        <path d="M21.861 14.006a8 8 0 01-10.87-10.87c.452-.816-.101-1.976-1-1.721C5.379 2.724 2 6.965 2 11.998c0 6.075 4.925 11 11 11 5.032 0 9.275-3.38 10.584-7.992.255-.9-.905-1.451-1.723-1Z"/>
        `;
    }
}


function changeBackground(){
    const header = document.querySelector(".header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}
