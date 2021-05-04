var total = 123;
function randomImg(){
  var randomNumber = Math.floor(Math.random() * total) + 1;
  var imgName = "q" + randomNumber + ".png";
  document.getElementById("pic").src = "Q/" + imgName;
  document.getElementById("download").href = "Q/" + imgName;
}