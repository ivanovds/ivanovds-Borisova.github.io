/*-------------------menu--------------------*/
function changenav(){
	var x = document.getElementById("navbar");
	if(x.className === "navbar") {
		x.className += " changenav";

	}else {
		x.className = "navbar";
	}
}
/*---------------------- menu scroll -------------*/
function menuScroll(){
  var tophead = document.getElementById("tophead");
  var ytop = window.pageYOffset;
  tophead.style.transition = "1.5s"
  if(ytop > 200) {
    tophead.style.background = "#020104";
  }
  else {
    tophead.style.background = "none";
  }
}
window.addEventListener("scroll",menuScroll);
/*---------------------------------------*/

/*---------------------logotip---------------------*/
function logoScroll(){
  var logo = document.getElementById("logo");
  var ztop = window.pageYOffset;
  if(ztop > 200) {
    logo.style.display = "block";
  }
  else {
    logo.style.display = "none";
  }
}
window.addEventListener("scroll",logoScroll);

/*---------------slides----------------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

 function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) { 
      x[i].className = "slide"; 
  }
     x[slideIndex-1].className = "slide showing";
}

/* ----------------------CAMERA ---------------*/
var i = 0;
var j = 1;
blinking();
function blinking() {
    var x = document.getElementsByClassName("camera");  
    x[ i ].style.display = "none";
    x[ j ].style.display = "block";
    [i, j] = [j, i]
    setTimeout(blinking, 1000);
}
/*------------------button-up-------------*/
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
AOS.init({
 duration: 3000
});