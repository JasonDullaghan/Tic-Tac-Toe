var Oturn = document.getElementById("playerTurnO");
Oturn.style.display = "none";

var OturnWin = document.getElementById("playerTurnOWin");
OturnWin.style.display = "none";

var XturnWin = document.getElementById("playerTurnXWin");
XturnWin.style.display = "none";

let gameOver = false;

var tie = document.getElementById("tie");
tie.style.display = "none";
XNOArray = [];
flipper = 0;

("use strict");
let l = 0;
let counter = 0;
let allowed = true;
function createDiv() {
  var boardDiv = document.createElement("div");

  boardDiv.id = "new-div" + l;
  l++;
  return boardDiv;
}

function createAndModifyDivs() {
  var board = document.getElementById("board"),
    myDivs = [],
    i = 0,
    numOfDivs = 9;

  board.style.gridTemplateColumns = `repeat(3, 1fr)`;
  for (i; i < numOfDivs; i += 1) {
    myDivs.push(createDiv());
    board.appendChild(myDivs[i]);
    var div = myDivs[i];

    div.onclick = function () {
      if (gameOver === false) {
        if (flipper % 2 === 0) {
          if (
            this.innerHTML === "<h1>" + "o" + "</h1>" ||
            this.innerHTML === "<h1>" + "x" + "</h1>"
          ) {
            alert("FUCKing retard");
            this.innerHTML = "<h1>" + "o" + "</h1>";
            return;
          }
          var Oturn = document.getElementById("playerTurnO");
          Oturn.style.display = "initial";
          var Xturn = document.getElementById("playerTurnX");
          Xturn.style.display = "none";

          this.innerHTML = "<h1>" + "x" + "</h1>";
          this.style.backgroundColor = "#f6f6f6";
          ++flipper;

          ++counter;
        } else {
          if (
            this.innerHTML === "<h1>" + "o" + "</h1>" ||
            this.innerHTML === "<h1>" + "x" + "</h1>"
          ) {
            alert("R U DUM");
            this.innerHTML = "<h1>" + "x" + "</h1>";
            return;
          }
          var Xturn = document.getElementById("playerTurnX");
          Xturn.style.display = "initial";
          var Oturn = document.getElementById("playerTurnO");
          Oturn.style.display = "none";

          this.innerHTML = "<h1>" + "o" + "</h1>";
          this.style.backgroundColor = "#f6f6f6";
          ++flipper;

          ++counter;
        }
        addXNO();
        ifPlayerWins();
      }

      document.getElementById("myBtn").onclick = function () {
        window.location.reload();
      };
    };
  }
}

createAndModifyDivs();

function addXNO() {
  var first = document.getElementById("new-div0");

  let f = first.innerHTML;
  f = f.substr(4, 1);
  XNOArray.splice(0, 0, f);

  var second = document.getElementById("new-div1");
  let g = second.innerHTML;
  g = g.substr(4, 1);
  XNOArray.splice(1, 0, g);

  var third = document.getElementById("new-div2");
  let h = third.innerHTML;
  h = h.substr(4, 1);
  XNOArray.splice(2, 0, h);

  var four = document.getElementById("new-div3");
  let j = four.innerHTML;
  j = j.substr(4, 1);
  XNOArray.splice(3, 0, j);

  var five = document.getElementById("new-div4");
  let k = five.innerHTML;
  k = k.substr(4, 1);
  XNOArray.splice(4, 0, k);

  var six = document.getElementById("new-div5");
  let l = six.innerHTML;
  l = l.substr(4, 1);
  XNOArray.splice(5, 0, l);

  var seven = document.getElementById("new-div6");
  let z = seven.innerHTML;
  z = z.substr(4, 1);
  XNOArray.splice(6, 0, z);

  var eight = document.getElementById("new-div7");
  let x = eight.innerHTML;
  x = x.substr(4, 1);
  XNOArray.splice(7, 0, x);

  var nine = document.getElementById("new-div8");
  let c = nine.innerHTML;
  c = c.substr(4, 1);
  XNOArray.splice(8, 0, c);
}

function CheckXNO() {
  var first = document.getElementById("new-div0");
  let f = first.innerHTML;
  f = f.substr(4, 1);
  if (f == "x" || f == "o") {
  }

  var second = document.getElementById("new-div1");
  let g = second.innerHTML;
  g = g.substr(4, 1);
  if (g == "x" || g == "o") {
    alert("R u dum");
    allowed = false;
  }

  var third = document.getElementById("new-div2");
  let h = third.innerHTML;
  h = h.substr(4, 1);
  if (h == "x" || h == "o") {
    alert("R u dum");
    allowed = false;
  }

  var four = document.getElementById("new-div3");
  let j = four.innerHTML;
  j = j.substr(4, 1);
  if (j == "x" || j == "o") {
    alert("R u dum");
    allowed = false;
  }

  var five = document.getElementById("new-div4");
  let k = five.innerHTML;
  k = k.substr(4, 1);
  if (k == "x" || k == "o") {
    alert("R u dum");
    allowed = false;
  }

  var six = document.getElementById("new-div5");
  let l = six.innerHTML;
  l = l.substr(4, 1);
  if (l == "x" || l == "o") {
    alert("R u dum");
    allowed = false;
  }

  var seven = document.getElementById("new-div6");
  let z = seven.innerHTML;
  z = z.substr(4, 1);
  if (z == "x" || z == "o") {
    alert("R u dum");
    allowed = false;
    return;
  }

  var eight = document.getElementById("new-div7");
  let x = eight.innerHTML;
  x = x.substr(4, 1);
  if (x == "x" || x == "o") {
    alert("R u dum");
    allowed = false;
    return;
  }

  var nine = document.getElementById("new-div8");
  let c = nine.innerHTML;
  c = c.substr(4, 1);
  if (c == "x" || c == "o") {
    alert("R u dum");
    allowed = false;
    return;
  }

  return (allowed = true);
}

function ifPlayerWins() {
  if (
    (XNOArray[0] === "x" && XNOArray[1] === "x" && XNOArray[2] === "x") ||
    (XNOArray[3] === "x" && XNOArray[4] === "x" && XNOArray[5] === "x") ||
    (XNOArray[6] === "x" && XNOArray[7] === "x" && XNOArray[8] === "x") ||
    (XNOArray[0] === "x" && XNOArray[3] === "x" && XNOArray[6] === "x") ||
    (XNOArray[1] === "x" && XNOArray[4] === "x" && XNOArray[7] === "x") ||
    (XNOArray[2] === "x" && XNOArray[5] === "x" && XNOArray[8] === "x") ||
    (XNOArray[0] === "x" && XNOArray[4] === "x" && XNOArray[8] === "x") ||
    (XNOArray[2] === "x" && XNOArray[4] === "x" && XNOArray[6] === "x")
  ) {
    var Xturn = document.getElementById("playerTurnX");
    Xturn.style.display = "none";
    var Oturn = document.getElementById("playerTurnO");
    Oturn.style.display = "none";
    var XturnWin = document.getElementById("playerTurnXWin");
    XturnWin.style.display = "initial";
    gameOver = true;
    return;
  }

  if (
    (XNOArray[0] === "o" && XNOArray[1] === "o" && XNOArray[2] === "o") ||
    (XNOArray[3] === "o" && XNOArray[4] === "o" && XNOArray[5] === "o") ||
    (XNOArray[6] === "o" && XNOArray[7] === "o" && XNOArray[8] === "o") ||
    (XNOArray[0] === "o" && XNOArray[3] === "o" && XNOArray[6] === "o") ||
    (XNOArray[1] === "o" && XNOArray[4] === "o" && XNOArray[7] === "o") ||
    (XNOArray[2] === "o" && XNOArray[5] === "o" && XNOArray[8] === "o") ||
    (XNOArray[0] === "o" && XNOArray[4] === "o" && XNOArray[8] === "o") ||
    (XNOArray[2] === "o" && XNOArray[4] === "o" && XNOArray[6] === "o")
  ) {
    var Xturn = document.getElementById("playerTurnX");
    Xturn.style.display = "none";
    var Oturn = document.getElementById("playerTurnO");
    Oturn.style.display = "none";
    var OturnWin = document.getElementById("playerTurnOWin");
    OturnWin.style.display = "initial";
    gameOver = true;
    return;
  }
  let isOver = true;
  for (let i = 0; i < 9; i++) {
    if (XNOArray[i] === "") {
      isOver = false;
    }
  }
  if (isOver === true) {
    var Xturn = document.getElementById("playerTurnX");
    Xturn.style.display = "none";
    var Oturn = document.getElementById("playerTurnO");
    Oturn.style.display = "none";
    var tie = document.getElementById("tie");
    tie.style.display = "initial";
    gameOver = true;
  }
}
