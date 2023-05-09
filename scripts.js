function openModal1() {
  var modal1 = document.getElementById("modal1");
  var modal2 = document.getElementById("modal2");
  var ans1 = document.querySelector("#answer1").value;
  var ans2 = document.querySelector("#answer2").value;
  var ans3 = document.querySelector("#answer3").value;
  if (ans1 == "" && ans2 == "" && ans3 == "") {
    modal2.style.display = 'block';
  } else {
    modal1.style.display = 'block';
  }
}

function openModal2() {
  var modal3 = document.getElementById("modal3");
  var modal4 = document.getElementById("modal4");
  var ans4 = document.querySelector("#answer4").value;
  var ans5 = document.querySelector("#answer5").value;
  var ans6 = document.querySelector("#answer6").value;
  var ans7 = document.querySelector("#answer7").value;
  var ans8 = document.querySelector("#answer8").value;
  var ans9 = document.querySelector("#answer9").value;
  var ans10 = document.querySelector("#answer10").value;
  var ans11 = document.querySelector("#answer11").value;
  if (ans4 == "" && ans5 == "" && ans6 == "" && ans7 == "" && ans8 == "" && ans9 == "" && ans10 == "" && ans11 == "") {
    modal4.style.display = 'block';
  } else {
    modal3.style.display = 'block';
  }
}

document.onclick = (event) => {
  var modal1 = document.getElementById("modal1");
  var modal2 = document.getElementById("modal2");
  var modal3 = document.getElementById("modal3");
  var modal4 = document.getElementById("modal4");
  var answer1 = document.getElementById("first-answer");
  var answer2 = document.getElementById("learning-activity-answer-button");
  if (event.target != modal1 && event.target != answer1) {
    modal1.style.display = "none";
  }
  if (event.target != modal2 && event.target != answer1) {
    modal2.style.display = "none";
  }
  if (event.target != modal3 && event.target != answer2) {
    modal3.style.display = "none";
  }
  if (event.target != modal4 && event.target != answer2) {
    modal4.style.display = "none";
  }
}
