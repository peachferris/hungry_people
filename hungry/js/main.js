const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger, .main-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
  
});