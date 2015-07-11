var totalClicks = 0;
var clickable = $(".catcontainer").find(".kitten");
clickable.click(function(e){
  totalClicks += 1;
  $(".clicks").html(totalClicks);
  console.log(totalClicks);
});
