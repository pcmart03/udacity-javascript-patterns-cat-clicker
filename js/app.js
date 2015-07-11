
var kitten = function (catName, image, altText){
  this.catName = catName;
  this.image = image;
  this.altText = altText;
  this.class = "kitten";
  this.clicks = 0;
}
var fluffy = new kitten ("Fluffy", "images/kitten.jpg", "A fluffy kitty");
var scaredy = new kitten ("Scaredy", "images/kitten2.jpg", "A kitten in hiding");
var freaked = new kitten ("Freaked", "images/kitten3.jpg", "A kitten that is a little freaked out");
var crazy = new kitten ("Crazy", "images/kitten4.jpg", "A kitten with crazy eyes");
var ralph = new kitten ("Raplh", "images/kitten5.jpg", "A kitten named Ralph");

var kittens = [fluffy, scaredy, freaked, crazy, ralph];

$(document).ready(function () {
  for (i=0; i<kittens.length; i++) {
    var cat = kittens[i]
    var catbutton = document.createElement("li");
    var buttontext = document.createTextNode(cat.catName)
    catbutton.appendChild(buttontext);
    catbutton.addEventListener('click', (function(catCopy) {
      return function() {
      catCopy.clicks += 1;
      var catstr = "<h3>" + catCopy.catName + "</h3> <img src='" +catCopy.image +"' alt='"+ catCopy.altText +"'> <p>Clicks: <span class='clicks'>" + catCopy.clicks + "</p>";
      $(".catinfo").html(catstr);
      };
    })(cat));
    $(".clickablecats").append(catbutton);


    //var divString = "<div class='" + cat.class + "'><h3>"+ cat.catName +"</h3><img src='"+ cat.image +"' alt='"+ cat.altText +"'></div>"
  };
});
