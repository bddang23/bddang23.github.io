let elem = [];
// assign the entire table row for hole 1 to a variable, elem
let rows = document.getElementsByTagName("tr");

for (let i = 1; i < rows.length - 1; i++) {
    elem[i] = document.getElementById(i);
    elem[i].children[4].children[0].onclick = function() {
      add1(elem[i]);
  };
  elem[i].children[4].children[1].onclick = function() {
      sub1(elem[i]);
  };
  elem[i].children[4].children[2].onclick = function() {
      clear(elem[i]);
  }
}

// create an "add1" function
function add1(elem) {
    if (elem.children[2].innerHTML == "-") {
        elem.children[2].innerHTML = "1";
        diff(elem);
    } else if (elem.children[2].innerHTML == "8") {
        alert("Score is double Spar. Try to substract or Reset!");
        elem.children[2].innerHTML = "8";
    } else {
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore + 1;
        diff(elem);
    }
    addTotal();
}

// create an "sub1" function
function sub1(elem) {
    if (elem.children[2].innerHTML == "-") {
        alert("Score is negative. Try to plus or Reset!");
        elem.children[2].innerHTML == "-"
    } else if (elem.children[2].innerHTML == "0") {
        alert("Score is negative. Try to plus or Reset!");
        elem.children[2].innerHTML = "0";
    } else {
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore - 1;
        diff(elem);
    }
    addTotal();
}

function diff(elem) {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    elem.children[3].innerHTML = currentScore - par;
}


function addTotal() {
    let totalScore = 0;
    let parTotal = 0;
    let overTotal = 0;

    for (let i = 0; i < rows.length - 1; i++) {
        let score = elem[i].children[2].innerHTML;
        let par = elem[i].children[1].innerHTML;
        let over = elem[i].children[3].innerHTML;

        if (isNaN(score)) {
            totalScore += 0;
            parTotal += 0;
            overTotal += 0;
        } else {
            totalScore += parseInt(score);
            parTotal += parseInt(par);
            overTotal += parseInt(over);
        }
    }

    if (totalScore == 0 && parTotal == 0 && overTotal == 0) {
        rows[19].children[2].innerText = "-";
        rows[19].children[1].innerText = "-";
        rows[19].children[3].innerText = "-";
    } else {
        rows[19].children[2].innerText = totalScore;
        rows[19].children[1].innerText = parTotal;
        rows[19].children[3].innerText = overTotal;
    }
}

function clear(elem) {
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
    addTotal(elem);
}
