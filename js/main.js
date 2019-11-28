jQuery(function ($) {

  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });

});

$('.option').click(function () {
  var option = this.id;

  switch (this.id) {
    case 'option-1':
      window.location.href = "http://www.w3schools.com";
      break;
    case 'option-2':
      window.location.href = "http://www.w3schools.com";
      break;
    case 'option-3':
      window.location.href = "http://www.w3schools.com";
      break;
    case 'option-4':
      window.location.href = "http://www.w3schools.com";
      break;
    case 'option-5':
      window.location.href = "http://www.w3schools.com";
      break;
    case 'option-6':
      window.location.href = "http://www.w3schools.com";
      break;
    default:
      alert("Id no especificada")
      break;
  }

});