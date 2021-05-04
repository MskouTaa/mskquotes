var total = 2;
function randomImg(){
  var randomNumber = Math.floor(Math.random() * total) + 1;
  var imgName = "Q" + randomNumber + ".png";
  document.getElementById("pic").src = "../QS/" + imgName;
  document.getElementById("download").href = "../QS/" + imgName;
}