// custom scripts

$(document).ready( function () {
  var menu_visible = false;
  $("#menu-button").on("click", function () {
    if (menu_visible) {
      $("#overlay").removeClass("menu-visible");
      $("#compass").text("");
      $("#menu-button").addClass("wobble");
      menu_visible = false;
    } else {
      $("#overlay").addClass("menu-visible");
      $("#compass").text("");
      $("#menu-button").removeClass("wobble");
      menu_visible = true;
    }
    
    console.log("hey");
  });
});