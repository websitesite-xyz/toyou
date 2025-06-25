$(document).ready(function() {
  $('h1, a').html(function(index, html) {
    return html.replace(/\S/g, '<span>$&</span>');
  });

  (function order() {
    $('h1, a').find('span').each(function() {
      var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      $(this).css('color', color);
    })
    setTimeout(order, 1000);
  })()

})


  