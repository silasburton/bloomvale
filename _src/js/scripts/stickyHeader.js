var $siteHeader = $('[data-js-siteHeader]')
var $siteFooter = $('[data-js-siteFooter]')
var topOut

window.onscroll = function() {
  if (window.innerWidth >= 768) {
    topOut = (window.innerHeight / 100 * 29) - 48
    if ($(window).scrollTop() >= topOut) {
      $siteHeader.addClass('fixed')
      $siteFooter.addClass('fixed')
    } else {
      $siteHeader.removeClass('fixed')
      $siteFooter.removeClass('fixed')
    }
  }
}
