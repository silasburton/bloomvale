var $siteHeader = $('[data-js-siteHeader]')
var $siteFooter = $('[data-js-siteFooter]')
var topOut

window.onscroll = function() {
  topOut = (window.innerHeight / 100 * 36) - 48
  if ($(window).scrollTop() >= topOut) {
    $siteHeader.addClass('fixed')
    $siteFooter.addClass('fixed')
  } else {
    $siteHeader.removeClass('fixed')
    $siteFooter.removeClass('fixed')
  }
}
