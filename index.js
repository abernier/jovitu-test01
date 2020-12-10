console.log('coucou')

const $overlay = document.querySelector('.overlay')
const $img = document.querySelector('.img')
const $tds = document.querySelectorAll('td')

$overlay.onclick = e => $overlay.classList.remove('active')

$tds.forEach($td => $td.addEventListener('click', e => $overlay.classList.add('active')))