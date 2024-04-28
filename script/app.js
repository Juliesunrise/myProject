//-----------------------------//

let modal=document.querySelector('.wrapper_modal')
let btn=document.querySelector('#btn-circle')
let close=document.querySelector('#btn_close')

if( window.innerWidth <= 768)
{
    btn.addEventListener('click', function () {

        if (btn) {
            modal.classList.remove('hide')
        }
    })

    close.addEventListener('click', function () {
        if (close) {
            modal.classList.add('hide')

        }
    })
}

