
function changeImage(imageSrc) {
    document.getElementById('displayedImage').src = imageSrc;
}
function Image(imageSrc) {
    document.getElementById('Image').src = imageSrc;
}


function myFunction() {
    var element = document.getElementById("myDIV");
    element.scrollLeft += 50;
}
function cool() {
    var element = document.getElementById("myDIV");
    element.scrollLeft -= 30;
}



function book1() {
    var element = document.getElementById("book");
    element.scrollLeft += 50;
}
function book2() {
    var element = document.getElementById("book");
    element.scrollLeft -= 30;
}



function paper1() {
    var element = document.getElementById("paper");
    element.scrollLeft += 50;
}
function paper2() {
    var element = document.getElementById("paper");
    element.scrollLeft -= 30;
}



function pen1() {
    var element = document.getElementById("pen");
    element.scrollLeft += 50;
}
function pen2() {
    var element = document.getElementById("pen");
    element.scrollLeft -= 30;
}



function pencil1() {
    var element = document.getElementById("pencil");
    element.scrollLeft += 50;
}
function pencil2() {
    var element = document.getElementById("pencil");
    element.scrollLeft -= 30;
}


function gum1() {
    var element = document.getElementById("gum");
    element.scrollLeft += 50;
}
function gum2() {
    var element = document.getElementById("gum");
    element.scrollLeft -= 30;
}


function search() {
    var x = document.getElementById("demo").value.toLowerCase();
    if (x === "books" || x === "book" || x === "notebooks" || x === "white note books") {
        window.location.href = "books.html";
    } else if (x === "a4" || x === "a4papers" || x === "papers") {
        window.location.href = "papers.html";
    } else if (x === "pencils" || x === "pencil" || x === "hbpencil" || x === "2bpencil" || x === "apsara pencils") {
        window.location.href = "pencils.html";
    } else if (x === "pens" || x === "blue pens" || x === "black pens" || x === "pen") {
        window.location.href = "pens.html";
    } else if (x === "gum" || x === "gum bottels" || x === "fevistick" || x === "fevikick" || x === "gums") {
        window.location.href = "gum.html";
    } else if (x === "chart" || x === "charts" || x === "white charts" || x === "color charts") {
        window.location.href = "charts.html";
    } else if (x === "plaster" || x === "plasters" || x === "tapes" || x === "tape") {
        window.location.href = "plaster.html";
    } else {
        window.location.href = "index.html";
    }
}


function match() {
    var xy = document.getElementById("your_number").value;
    var validationMessage = document.getElementById("validationMessage");
    if (parseInt(xy) === 10) {
        validationMessage.textContent = "";
    } else {
        validationMessage.textContent = "Please enter the valid mobile number.";
    }
}
