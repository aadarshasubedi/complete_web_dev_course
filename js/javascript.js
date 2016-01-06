$(document).ready(function() {

  $('.collapse')
    .on('show.bs.collapse', function() {
      $(this)
      .prev()
      .find("span")
      .removeClass("glyphicon-triangle-right")
      .addClass("glyphicon-triangle-bottom");
      })
    .on('hide.bs.collapse', function () {
      $(this)
      .prev()
      .find("span")
      .removeClass("glyphicon-triangle-bottom")
      .addClass("glyphicon-triangle-right");
      });
    });

  $(function() {
    $("[rel='tooltip']").tooltip();
  });