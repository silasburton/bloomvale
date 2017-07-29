var $contactForm = $('[data-js-contactForm]')
var emailAddress = $contactForm.attr('data-emailAddress')

$contactForm.submit(function(e) {
  e.preventDefault()

  $.ajax({
    url: 'https://formspree.io/' + emailAddress, 
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json'
  })
})
