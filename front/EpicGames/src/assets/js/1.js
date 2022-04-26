let body = document.getElementsByTagName('body')[0],
  dots = document.querySelectorAll('.product__dots')


dots.forEach(elem =>{
  elem.addEventListener('click', function (){

    settings = elem.querySelector('.product__settings')
    console.log('settings')
    settings.classList.toggle('active')
  })
})


