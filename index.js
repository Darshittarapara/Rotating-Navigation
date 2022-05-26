let btn = document.getElementById('btn');
let rotate = document.querySelector('.rotate')
let menubtn = document.getElementById('menu')
let closebtn = document.getElementById('close')
console.log(closebtn)
function rotateblock() {

    if (closebtn.style.display != 'block') {
        menubtn.style.display = 'none'
        closebtn.style.display = 'block'

    }
    else if (menubtn.style.display != 'block') {
        menubtn.style.display = 'block'
        closebtn.style.display = 'none'

    }
    rotate.classList.toggle('change')
    document.body.style.overflow = 'hidden'

}