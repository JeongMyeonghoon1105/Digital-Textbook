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
document.onclick = (event) => {
  var modal1 = document.getElementById("modal1");
  var modal2 = document.getElementById("modal2");
  var answer = document.getElementById("answer");
  if (event.target != modal1 && event.target != answer) {
    modal1.style.display = "none";
  }
  if (event.target != modal2 && event.target != answer) {
    modal2.style.display = "none";
  }
}
