$(document).ready(function() {
  $('.header-link-dropdown, .dropdown-outer').hover(function() {
    $('.dropdown-outer').addClass('shown');
  }, function() {
    $('.dropdown-outer').removeClass('shown');
  })
});
