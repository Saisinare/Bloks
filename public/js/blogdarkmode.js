const mode = document.getElementById('mode')
const navigation = document.querySelector('nav')
const home = document.getElementById('home')
const contact = document.getElementById('contactus')
const logo = document.querySelector('.logo')
let i;
let type = localStorage.mode
home.addEventListener('mouseover', () => {

    home.style.color="rgb(2, 89, 255)"
})
home.addEventListener('mouseout', () => {
    if (type=="dark") {
        
        home.style.color="white"
    }
    else{
        home.style.color="black"
    }
})
contact.addEventListener('mouseover', () => {

    contact.style.color="rgb(2, 89, 255)"
})
contact.addEventListener('mouseout', () => {
    if (type=="dark") {
        
        contact.style.color="white"
    }
    else{
        contact.style.color="black"
    }
})
//Functions -----------------------------------------
function light() {
    mode.src = "img/dark-mode.png"
    navigation.style.backgroundColor = "rgba(213, 234, 251, 0.786)"
    navlist.style.border="none"
    home.style.color = "black"
    contact.style.color = "black"
    logo.style.color = "black"
    body.style.background = "white"
    document.querySelector('.read_blog').style.backgroundColor="white"
    document.querySelector('.read_blog').style.color="black"
    document.querySelector('.read_title').style.color="black"
    document.querySelector('.read_content').style.color="black"
    document.querySelector('.read_title').style.backgroundColor="rgba(213, 234, 251, 0.786)"
    document.querySelector('.read_content').style.backgroundColor = "white"
    document.querySelector('.title').style.backgroundColor="white"
    document.querySelector('.title').style.color="black"
    document.querySelector('.write_blog').style.backgroundColor="white"
    document.querySelector('#write_content').style.backgroundColor = "rgba(213, 234, 251, 0.786)"
    document.querySelector('#write_content').style.color="black"
    localStorage.setItem('mode', 'light')
    type = localStorage.mode

}
function dark() {
    mode.src = "img/light-mode.png"
    navigation.style.backgroundColor = "black"
    navlist.style.borderBottom="0.1vh rgb(28, 14, 28)"
    home.style.color = "white"
    contact.style.color = "white"
    logo.style.color = "white"
    body.style.background = "black"
    document.querySelector('.read_blog').style.backgroundColor="black"
    document.querySelector('.read_blog').style.color="white"
    document.querySelector('.read_title').style.color="white"
    document.querySelector('.read_content').style.color="white"
    document.querySelector('.read_title').style.backgroundColor="black"
    document.querySelector('.read_content').style.backgroundColor = "rgb(19, 19, 19)"
    document.querySelector('.title').style.backgroundColor="white"
    document.querySelector('.title').style.color="black"
    document.querySelector('.write_blog').style.backgroundColor="white"
    document.querySelector('#write_content').style.backgroundColor="rgba(213, 234, 251, 0.786)"
    localStorage.setItem('mode', 'dark')
    type = localStorage.mode
    location.reload();
}

if (type=="light") {
light()
}
mode.addEventListener('click', () => {
    if (type == "dark") {
        light()
    }
    else {
        dark()
    }

})

