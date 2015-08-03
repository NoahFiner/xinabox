var Car = function(num, header, text) {
  this.num = num;
  this.header = header;
  this.text = text;
  this.img = "photos/carousel/"+num+".png";
  this.init = function() {
    $("#carousel-outer").css("background-image", "url('"+this.img+"')");
    $("#carousel-buttons").append('<div class="carousel-button" id="carousel-button'+this.num+'"><div class="carousel-button-graphics"></div></div>');
  };
  var that = this;
  setTimeout(function() {that.init();}, 100);
}

var currentCar = 0;

var c0 = new Car(0, "xinabox.us", "Use xinabox.us to join xinabox, a unique experience you'll never forget!");
var c1 = new Car(1, "our staff", "Our staff have been trained to respond the best in any situation");
var c2 = new Car(2, "minigames", "We're loaded with dozens of minigames, each perfected in gameplay");
var c3 = new Car(3, "community", "We are devoted to maintaining a friendly community on the server to invite all players!");
var c4 = new Car(4, "communication", "Join ts.xinabox.us for our teamspeak server and go ahead and ask to join our Skype groups!");

var cars = [c0, c1, c2, c3, c4];

var amtOfCars = cars.length;

$(".carousel-button").css("width", 100/amtOfCars+"%");

var setNewCarousel = function(num, img, header, text) {
  $("#carousel-h1").html(header);
  $("#carousel-p").html(text);
  $("#carousel-outer").css("background-image", "url('"+img+"')");
  $(".carousel-button").removeClass("active");
  $('#carousel-button'+num).addClass("active");
}

var nextCar = function() {
  currentCar += 1;
  if(currentCar === cars.length) {
    currentCar = 0;
  }
  var currCar = cars[currentCar];
  setNewCarousel(currentCar, currCar.img, currCar.header, currCar.text);
}

var slideshow = setInterval(function() {
  nextCar();
}, 4000);

setNewCarousel(0, currentCar.img, currentCar.header, currentCar.text);

setTimeout(function() {
  $('#carousel-button0').addClass("active");
}, 1000)

$(document).on("click", ".carousel-button", function() {
  clearInterval(slideshow);
  slideshow = setInterval(function() {
    nextCar();
  }, 4000);
  var id = $(this).attr("id").toString();
  var num = parseInt(id[15]);
  currentCar = num;
  var currCar = cars[num];
  setNewCarousel(num, currCar.img, currCar.header, currCar.text);
})

$(document).ready(function() {
})
