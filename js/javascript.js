$(document).ready(function() {

  $('.collapse')
    .on('show.bs.collapse', function() {
      $(this)
      .prev()
      .find(".glyphicon-triangle-right")
      .removeClass("glyphicon-triangle-right")
      .addClass("glyphicon-triangle-bottom");
      })
    .on('hide.bs.collapse', function () {
      $(this)
      .prev()
      .find(".glyphicon-triangle-bottom")
      .removeClass("glyphicon-triangle-bottom")
      .addClass("glyphicon-triangle-right");
      });
    });

  $(function() {
    $("[rel='tooltip']").tooltip();
  });