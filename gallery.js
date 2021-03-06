$(function() {

   $("#gallery-top").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta);

      event.preventDefault();

   });

});

var amtOfSlides = 15;
var currSlide = 0;
var preloading = [];
for(i = 0; i < amtOfSlides; i++) {
  preloading.push('a');
}

$(document).ready(function() {
  for(i = 0; i < amtOfSlides; i++) {
    // preloading -- removed because it takes forever :(
    // preloading[i] = new Image(175,50);
    // preloading[i].src = "photos/gallery/"+i+".png";
    $("#gallery-top").append('<div class="gal-prev" id="gal-prev'+i+'" style="background-image: url(\'photos/gallery-thumbnails/'+i+'.png\')"><div class="gal-prev-overlay"></div></div>')
  }
  setPhoto = function(num) {
    currSlide = parseInt(num);
    console.log(currSlide);
    $("#gallery-bottom-blurred").css("background-image", "url('photos/gallery/"+num+".png')");
    setTimeout(function() {
      $("#gallery-bottom-img").css("background-image", "url('photos/gallery/"+num+".png')");
      $(".gal-prev").removeClass("selected");
      $("#gal-prev"+num).addClass("selected");
    }, 500);
  };

  nextSlide = function() {
    currSlide += 1;
    if(currSlide === amtOfSlides) {
      currSlide = 0;
    }
    setPhoto(currSlide);
  }

  prevSlide = function() {
    currSlide -= 1;
    if(currSlide === -1) {
      currSlide = amtOfSlides - 1;
    }
    setPhoto(currSlide);
  }

  setPhoto(0);
  $(".gal-prev").click(function() {
    var id = $(this).attr("id").toString();
    if(id.length === 9) {
      setPhoto(parseInt(id[8]));
    }
    else {
      var number = id[8] + id[9];
      setPhoto(parseInt(number));
    }
  })
})
