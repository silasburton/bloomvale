var $siteHeader = $('[data-js-siteHeader]')
var $siteFooter = $('[data-js-siteFooter]')
var topOut

function headerScroll() {
  if (window.innerWidth >= 768) {
    topOut = 96
    if ($(window).scrollTop() >= topOut) {
      $siteHeader.addClass('fixed')
    } else {
      $siteHeader.removeClass('fixed')
    }
  }
}
