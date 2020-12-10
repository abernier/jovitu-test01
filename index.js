console.log('coucou')

const $overlay = document.querySelector('.overlay')
const $img = document.querySelector('.img')
const $tds = document.querySelectorAll('[data-img]')

$overlay.onclick = e => {
  $img.src = ""
  $overlay.classList.remove('active')
}

$tds.forEach($td => $td.addEventListener('click', e => {
  $img.src = $td.dataset.img
  $overlay.classList.add('active')
}))