var height = window.innerHeight;
var hgHeight, factionsHeight, plotsHeight, prisonHeight, boxcraftHeight;

var updateVars = function() {
  height = window.innerHeight;
  var gameHeight = height*0.9;
  hgHeight = 450;
  factionsHeight = 450 + gameHeight;
  plotsHeight = factionsHeight + gameHeight;
  prisonHeight = plotsHeight + gameHeight;
  boxcraftHeight = prisonHeight + gameHeight;
}

var goTo = function(height) {
  $("html, body").animate({
    scrollTop: (height + 10)+"px"
  }, 500);
}

var selecty = function(wat) {
  $(".game-prev").removeClass("selected");
  $("#"+wat+"-prev").addClass("selected");
}

$(document).ready(function() {
  updateVars();
  $('.header-link-dropdown, .dropdown-outer').hover(function() {
    $('.dropdown-outer').addClass('shown');
  }, function() {
    $('.dropdown-outer').removeClass('shown');
  })
  $(window).scroll(function() {
    var yo = $(window).scrollTop();
    $('.game-prev').css("background-position-y", -(yo/20)+"px");
    if(yo >= 425) {
      $("#content-left-outer").addClass("shown");
    }
    else {
      $("#content-left-outer").removeClass("shown");
    }
    if(yo >= 450 && yo < factionsHeight) {
      selecty("hg");
    }
    if(yo >= factionsHeight && yo < plotsHeight) {
      selecty("factions");
    }
    if(yo >= plotsHeight && yo < prisonHeight) {
      selecty("plots");
    }
    if(yo >= prisonHeight && yo < boxcraftHeight) {
      selecty("prison");
    }
    if(yo > boxcraftHeight) {
      selecty("boxcraft");
    }
    $(window).resize(function() {
      updateVars();
    })
  })

  $("#hg-prev, #hg-prev-upper").click(function(e) {
    e.stopPropagation();
    goTo(hgHeight);
  })
  $("#factions-prev, #factions-prev-upper").click(function(e) {
    e.stopPropagation();
    goTo(factionsHeight);
  })
  $("#plots-prev, #plots-prev-upper").click(function(e) {
    e.stopPropagation();
    goTo(plotsHeight);
  })
  $("#prison-prev, #prison-prev-upper").click(function(e) {
    e.stopPropagation();
    goTo(prisonHeight);
  })
  $("#boxcraft-prev, #boxcraft-prev-upper").click(function(e) {
    e.stopPropagation();
    goTo(boxcraftHeight);
  })
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
