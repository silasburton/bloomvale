var sections = $('[data-js-belowFoldSection]')

window.onload = function() {
  $(sections).each(function(index, el) {
    if ((el.getBoundingClientRect().top - window.innerHeight) >= -100) {
      $(el).addClass('paused')
    }
  })
}

function animateScroll() {
  $(sections).each(function(index, el) {
    if ((el.getBoundingClientRect().top - window.innerHeight) <= -100) {
      $(el).removeClass('paused')
      $(el).addClass('playing')
    }
  })
}
