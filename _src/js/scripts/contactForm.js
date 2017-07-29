var $contactForm = $('[data-js-contactForm]')
var $submitButton = $('[data-js-contactFormSubmit]')
var $formNotification = $('[data-js-contactFormNotification]')
var emailAddress = $contactForm.attr('data-emailAddress')
var successMessage = $contactForm.attr('data-successMessage')

$contactForm.submit(function(e) {
  e.preventDefault()
  $submitButton.attr('disabled', 'true')
  $submitButton.blur()
  $submitButton.addClass('working')

  $.ajax({
    url: 'https://formspree.io/' + emailAddress, 
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    success: function() {
      $submitButton.attr('value', 'Sent!')
      $formNotification.addClass('active')
      $submitButton.removeClass('working')
      $formNotification.html(successMessage)
    },
    error: function() {
      $submitButton.attr('value', 'Error')
      $formNotification.addClass('active error')
      $submitButton.removeClass('working')
      $formNotification.html('Something went wrong! Please send us an email instead.')
    }
  })
})
