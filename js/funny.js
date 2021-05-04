var total = 1;
function randomImg(){
  var randomNumber = Math.floor(Math.random() * total) + 1;
  var imgName = "Q" + randomNumber + ".png";
  document.getElementById("pic").src = "../QF/" + imgName;
  document.getElementById("download").href = "../QF/" + imgName;
}