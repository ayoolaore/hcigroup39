
//---------------------------------------------------------------------------------
//functions for increasing and decreasing the buttons
//---------------------------------------------------------------------------------

function increment() {

    var n = document.getElementById("firstItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("firstItem").innerHTML = newNum;
}

function Decrease() {

    var n = document.getElementById("firstItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("firstItem").innerHTML = newNum;
}


function incrementFirst() {

    var n = document.getElementById("secondItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("secondItem").innerHTML = newNum;
}

function DecreaseFirst() {

    var n = document.getElementById("secondItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("secondItem").innerHTML = newNum;
}

function incrementSecond() {

    var n = document.getElementById("thirdItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("thirdItem").innerHTML = newNum;
}

function DecreaseSecond() {

    var n = document.getElementById("thirdItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("thirdItem").innerHTML = newNum;
}

function incrementThird() {

    var n = document.getElementById("fourthItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("fourthItem").innerHTML = newNum;
}

function DecreaseThird() {

    var n = document.getElementById("fourthItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("fourthItem").innerHTML = newNum;
}
  
function incrementFourth() {

    var n = document.getElementById("fifthItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("fifthItem").innerHTML = newNum;
}

function DecreaseFourth() {

    var n = document.getElementById("fifthItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("fifthItem").innerHTML = newNum;
}
    
  
function incrementFifth() {

    var n = document.getElementById("sixItem").innerHTML;
    var newNum = parseInt(n,10);
    newNum++;
    document.getElementById("sixItem").innerHTML = newNum;
}

function DecreaseFifth() {

    var n = document.getElementById("sixItem").innerHTML;
    var newNum = parseInt(n,10);
    if(newNum > 0)
    newNum--;
    document.getElementById("sixItem").innerHTML = newNum;
}
    
                                                