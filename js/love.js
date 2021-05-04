var total = 1;
function randomImg(){
  var randomNumber = Math.floor(Math.random() * total) + 1;
  var imgName = "Q" + randomNumber + ".png";
  document.getElementById("pic").src = "../QL/" + imgName;
  document.getElementById("download").href = "../QL/" + imgName;
}