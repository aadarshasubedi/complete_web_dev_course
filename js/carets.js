$(document).ready(function() {

  $('.collapse')
    .on('show.bs.collapse', function() {
      $(this)
      .prev()
      .find("span.glyphicon-triangle-bottom")
      .removeClass("glyphicon-triangle-bottom")
      .addClass("glyphicon-triangle-right");
      })
    .on('hidden.bs.collapse', function () {
      $(this)
      .prev()
      .find("span.glyphicon-triangle-right")
      .removeClass("glyphicon-triangle-right")
      .addClass("glyphicon-triangle-bottom");
      });
    });
