//Menu
const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if( nav.classList.toggle('open')){
        navBtnImg.src="./img/icons/nav_close.svg"
    } else {
        navBtnImg.src="./img/icons/nav_open.svg"
    }
}
//Scroll

const scroll =document.getElementById('up')
let isCh = false
console.log(scroll)
window.addEventListener("scroll", (event) => {
    if(!isCh && this.scrollY > 1000){
        isCh = true
        scroll.style.display = 'block'
    }else if(isCh && this.scrollY < 900){
        isCh = false
        scroll.style.display = 'none'
    }

});