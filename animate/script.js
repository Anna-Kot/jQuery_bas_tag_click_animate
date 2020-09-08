$(document).ready(function() {
    $('.new_color').animate( {
       width: '234px',
       height:  '412px'
    },60000).delay(1000).animate({
        width: '234px',
        height: '0px',
    },60000)
    setTimeout(function() {
        $('h1').html('1')
    },60000)
    setTimeout(function() {
        $('h1').html('0')
    },120000)

})