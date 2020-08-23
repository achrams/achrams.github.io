$(document).ready(() => {
  run()
})

const run = () => {
  const born = new Date('22 Jan 1996')
  const now = new Date()
  const age = Math.floor((now - born) / 31556952000)
  $('.age').empty()
  $('.age').append(`${age} Years Old`)
}

$(window).scroll((event) => {
  var pos = $(window).scrollTop()
  if(pos > 100) {
    $('.navbar').addClass('bg-dark')
  } else if (pos < 100) {
    $('.navbar').removeClass('bg-dark')
  }
})