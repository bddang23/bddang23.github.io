let elem = [];
// assign the entire table row for hole 1 to a variable, elem
let rows = document.getElementsByTagName("tr");
for (let i =0;i<rows.length;i++){
  elem[i]=document.getElementById(i);
}

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};
 
// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else if ((parseInt(elem.children[2].innerHTM)/parseInt(elem.children[1].innerHTM)) >= 2){
    alert("Score is over spar!");
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}