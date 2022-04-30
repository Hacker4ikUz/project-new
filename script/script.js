let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
let btn_white = document.querySelector('.btn_white')
let btn_dark = document.querySelector('.btn_dark')
let btn_min = document.querySelector('.btn_min')
let modal = document.querySelector('.modal')
let modalw = document.querySelector('.modal-w')
let modal_close = document.querySelector('.modal__close')
let form = document.forms.tel

let slideIndex = 0

prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}  
next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
} 

function showSlide(n) {

    if(n >= offer__slide.length) {
        slideIndex = 0
    }
    if(n == -1) {
        slideIndex = offer__slide.length - 1
    }
    offer__slide.forEach(img => {
        img.style.display = 'none'
    });
    offer__slide[slideIndex].style.display = "block"
    
    current.innerHTML = '0' + (slideIndex+1) 
}


showSlide()

let timer = setInterval(() =>{
    seconds.innerHTML--
    if(seconds.innerHTML == 0){
        minutes.innerHTML--
        seconds.innerHTML = 59
        if(minutes.innerHTML == 0){
            hours.innerHTML--
            minutes.innerHTML = 59
            if(hours.innerHTML == 0){
                days.innerHTML--
                hours.innerHTML = 23
                if(days.innerHTML == -1){
                    clearInterval(timer)
                    alert('The End!')
                    days.innerHTML = 0
                    hours.innerHTML = 0
                    minutes.innerHTML = 0
                    seconds.innerHTML = 0
                }
            }
        }
    }
},1000)

btn_white.onclick = () =>{
    modal.classList.add('show')
    modal.classList.add('fade')
}
btn_dark.onclick = () =>{
    modal.classList.add('show')
    modal.classList.add('fade')
}
btn_min.onclick = () =>{
    modal.classList.add('show')
    modal.classList.add('fade')
}
modal_close.onclick = () => {
    modal.classList.add('hide')
}


form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value,key) => {
        user[key] = value
    })
    modal.classList.add('show')
    modalw.innerHTML = `Заявка Принята ${user.name}!`
}