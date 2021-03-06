var Staff = function(ign, role, quote, bio) {
  this.ign = ign;
  this.role = role;
  this.quote = quote;
  this.bio = bio;
  this.color = "#1f1f1f";
  this.photo = "photos/staff/"+this.ign+".png";
  if((this.role).search("admin") != -1) {
    this.color = "#FF5555";
    $("#left-admins").append('<div class="player-prev" id="'+this.ign+'"><img src="'+this.photo+'" class="player-prev-img"/><p class="player-prev-name">'+this.ign+'</p></div>')
  }
  if((this.role).search("dev") != -1) {
    this.color = "#FFFF55";
    $("#left-devs").append('<div class="player-prev" id="'+this.ign+'"><img src="'+this.photo+'" class="player-prev-img"/><p class="player-prev-name">'+this.ign+'</p></div>')
  }
  if((this.role).search("moderator") != -1) {
    this.color = "#AA00AA";
    $("#left-mods").append('<div class="player-prev" id="'+this.ign+'"><img src="'+this.photo+'" class="player-prev-img"/><p class="player-prev-name">'+this.ign+'</p></div>')
  }
  if((this.role).search("chatmod") != -1) {
    this.color = "#FF55FF";
    $("#left-chatmods").append('<div class="player-prev" id="'+this.ign+'"><img src="'+this.photo+'" class="player-prev-img"/><p class="player-prev-name">'+this.ign+'</p></div>')
  }
  if((this.role).search("builder") != -1) {
    this.color = "#00AA00";
    $("#left-builder").append('<div class="player-prev" id="'+this.ign+'"><img src="'+this.photo+'" class="player-prev-img"/><p class="player-prev-name">'+this.ign+'</p></div>')
  }
}

var staffers = [];

$(document).ready(function() {
  s0 = new Staff("xinabox", "admin/server owner",
  '"brb"',
  "xinabox has worked really hard to maintain the server but he has not worked hard at writing a bio and it is currently incomplete");
  staffers.push(s0);

  s1 = new Staff("Bajan", "admin",
  '"Sorry, I\'m busy"',
  "once upon a time i made a name for myself and called myself bajan");
  staffers.push(s1);

  s2 = new Staff("Coords", "admin",
  '"12"',
  "Coords is an American Minecraft PvP professional best known for beating many of the top-elo players on Kohi and most competitive PvP servers on Minecraft. She is also a wonderful, friendly admin with a load of experience on the server.");
  // "Spencer Howells Nelson (born July 11, 1980) is an American-Born PvP champion.");
  // "[6:38:46 PM] xinabox: do u have a legit bio for the site<br>[6:38:51 PM] Coords: no");
  staffers.push(s2);

  s3 = new Staff("Bacon_Waffles", "website developer/mod",
  '"By sitting on the couch all day you are statistically less likely to die than if you are social and move."',
  "Starting in the earlier days of the server, Bacon_Waffles has contributed to the server in many different ways, with the most recent contribution of this website.");
  staffers.push(s3);

  s4 = new Staff("Mr_Toast_", "moderator",
  '"toast is like life"',
  "I was once a child, but then I was bathed in butter and became toast.");
  staffers.push(s4);

  s5 = new Staff("poopinabox", "chatmod",
  '"ure all made of potato"',
  "i got pooped out one day. yeah, i wasn't birthed, but pooped out.");
  staffers.push(s5);

  s5 = new Staff("JonnyBallgame18", "builder",
  '"i once built a ballgame and then i blew it up with tnt because i felt like it"',
  "once upon a time I played a ballgame and i fell in love so i named myself after it");
  staffers.push(s5);

  s5 = new Staff("KillerCondor", "builder",
  '"condors are my favorite bird"',
  "one day i was bird watching when there was this condor and i fell in love with it");
  staffers.push(s5);

  s5 = new Staff("KillinSpree", "builder",
  '"murdering people is my favorite past time, right behind cradling kittens"',
  "once upon a time i learned about this cool animal called Krill. I tried to name myself after them but failed. :(");
  staffers.push(s5);

  s5 = new Staff("skymarzmine", "builder",
  '"the sky must be blue because of me"',
  "one day i looked at the sky but i got blinded because of the sun so now i'm handicapped forever");
  staffers.push(s5);

  s5 = new Staff("Willbobbob", "builder",
  '"WILL you marry me hahahaha"',
  "my first name is will my middle name is bob and my last name is bob why did my mother make me this way");
  staffers.push(s5);

  s5 = new Staff("CO2_Donkey", "builder",
  '"everyone that consumes H20 dies ... eventually"',
  "when i was young i had a pet donkey so i rode him all the time. one day when i was riding him he darted into a C02 tank. then i was inspired to run away from my house so I could build for this minecraft server.");
  staffers.push(s5);

  setStaffer = function(num) {
    $("html, body").animate({
      scrollTop: 440
    }, 500);
    var player = staffers[num];
    $(".player-prev").removeClass('selected');
    $("#"+player.ign).addClass('selected');
    $(".name").html(player.ign);
    $(".roles").html(player.role);
    $(".quote").html("<i>"+player.quote+"</i>");
    $(".bio").html(player.bio);
    $(".player-img").attr("src", ""+player.photo+"");
    $('#right-background-inner').css("background-image", "url('"+player.photo+"')");
    $(".roles").css("color", player.color);
    $("#right-background").css("background-color", player.color);
  }

  setStaffer(0);

  getStaffer = function(name) {
    for(i = 0; i < staffers.length; i++) {
      if(staffers[i].ign === name) {
        return i;
      }
    }
    return -1;
  }

  $(".player-prev").click(function() {
    var id = $(this).attr("id");
    setStaffer(getStaffer(id));
  })

  category = (location.hash).replace('#','');
  setStaffer(parseInt(category)); //call function

});
