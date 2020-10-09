let elem = [];
// assign the entire table row for hole 1 to a variable, elem
let rows = document.getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
    elem[i] = document.getElementById(i);
}

// assign a function to the + button
elem[1].children[4].children[0].onclick = function() {
    add1(elem[1]);
};
elem[1].children[4].children[1].onclick = function() {
    sub1(elem[1]);
};
elem[1].children[4].children[2].onclick = function() {
  clear(elem[1]);
};

elem[2].children[4].children[0].onclick = function() {
    add1(elem[2]);
};
elem[2].children[4].children[1].onclick = function() {
    sub1(elem[2]);
};
elem[2].children[4].children[2].onclick = function() {
  clear(elem[2]);
};

elem[3].children[4].children[0].onclick = function() {
    add1(elem[3]);
};
elem[3].children[4].children[1].onclick = function() {
    sub1(elem[3]);
};
elem[3].children[4].children[2].onclick = function() {
  clear(elem[3]);
};

elem[4].children[4].children[0].onclick = function() {
    add1(elem[4]);
};
elem[4].children[4].children[1].onclick = function() {
    sub1(elem[4]);
};
elem[4].children[4].children[2].onclick = function() {
  clear(elem[4]);
};

elem[5].children[4].children[0].onclick = function() {
    add1(elem[5]);
};
elem[5].children[4].children[1].onclick = function() {
    sub1(elem[5]);
};
elem[1].children[4].children[2].onclick = function() {
  clear(elem[5]);
};

elem[6].children[4].children[0].onclick = function() {
    add1(elem[6]);
};
elem[6].children[4].children[1].onclick = function() {
    sub1(elem[6]);
};
elem[6].children[4].children[2].onclick = function() {
  clear(elem[6]);
};

elem[7].children[4].children[0].onclick = function() {
    add1(elem[7]);
};
elem[7].children[4].children[1].onclick = function() {
    sub1(elem[7]);
};
elem[7].children[4].children[2].onclick = function() {
  clear(elem[7]);
};

elem[8].children[4].children[0].onclick = function() {
    add1(elem[8]);
};
elem[8].children[4].children[1].onclick = function() {
    sub1(elem[8]);
};
elem[8].children[4].children[2].onclick = function() {
  clear(elem[8]);
};

elem[9].children[4].children[0].onclick = function() {
    add1(elem[9]);
};
elem[9].children[4].children[1].onclick = function() {
    sub1(elem[9]);
};
elem[9].children[4].children[2].onclick = function() {
  clear(elem[9]);
};

elem[10].children[4].children[0].onclick = function() {
    add1(elem[10]);
};
elem[10].children[4].children[1].onclick = function() {
    sub1(elem[10]);
};
elem[10].children[4].children[2].onclick = function() {
  clear(elem[10]);
};

elem[11].children[4].children[0].onclick = function() {
    add1(elem[11]);
};
elem[11].children[4].children[1].onclick = function() {
    sub1(elem[11]);
};
elem[11].children[4].children[2].onclick = function() {
  clear(elem[11]);
};

elem[12].children[4].children[0].onclick = function() {
    add1(elem[12]);
};
elem[12].children[4].children[1].onclick = function() {
    sub1(elem[12]);
};
elem[12].children[4].children[2].onclick = function() {
  clear(elem[12]);
};

elem[13].children[4].children[0].onclick = function() {
    add1(elem[13]);
};
elem[13].children[4].children[1].onclick = function() {
    sub1(elem[13]);
};
elem[13].children[4].children[2].onclick = function() {
  clear(elem[13]);
};

elem[14].children[4].children[0].onclick = function() {
    add1(elem[14]);
};
elem[14].children[4].children[1].onclick = function() {
    sub1(elem[14]);
};
elem[14].children[4].children[2].onclick = function() {
  clear(elem[14]);
};

elem[15].children[4].children[0].onclick = function() {
    add1(elem[15]);
};
elem[15].children[4].children[1].onclick = function() {
    sub1(elem[15]);
};
elem[15].children[4].children[2].onclick = function() {
  clear(elem[15]);
};

elem[16].children[4].children[0].onclick = function() {
    add1(elem[16]);
};
elem[16].children[4].children[1].onclick = function() {
    sub1(elem[16]);
};
elem[16].children[4].children[2].onclick = function() {
  clear(elem[16]);
};

elem[17].children[4].children[0].onclick = function() {
    add1(elem[17]);
};
elem[17].children[4].children[1].onclick = function() {
    sub1(elem[17]);
};
elem[17].children[4].children[2].onclick = function() {
  clear(elem[17]);
};

elem[18].children[4].children[0].onclick = function() {
    add1(elem[18]);
};
elem[18].children[4].children[1].onclick = function() {
    sub1(elem[18]);
};
elem[18].children[4].children[2].onclick = function() {
  clear(elem[18]);
};

// create an "add1" function

function add1 (elem) {
  if(elem.children[2].innerHTML == "-"){ 
    elem.children[2].innerHTML = "1";
    
}
  else if (elem.children[2].innerHTML == "8"){
    alert("Score is double Spar. Try to substract or Reset!");
    elem.children[2].innerHTML = "8";
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    diff(elem);
    
  }
}

// create an "sub1" function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") {
    alert("Score is negative. Try to plus or Reset!");
    elem.children[2].innerHTML == "-"
  }
   
  else if (elem.children[2].innerHTML == "0"){
    alert("Score is negative. Try to plus or Reset!");
    elem.children[2].innerHTML = "0";
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    diff(elem);
  
  }
}

function diff(elem) {
  
  let currentScore = elem.children[2].innerHTML;
  currentScore = Number.parseInt(currentScore);
  let par = elem.children[1].innerHTML;
  par = Number.parseInt(par);
  elem.children[3].innerHTML = currentScore - par;
}

function clear(elem) {
  elem.children[2].innerHTML="-";
  elem.children[3].innerHTML="-";
}


  
