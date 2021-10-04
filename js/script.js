let menu = document.querySelector("#menu-bars");
let accessibility = document.querySelector("#accessibility_btn");
let navbar = document.querySelector(".navbar");
let mybutton = document.getElementById("btn-back-to-top");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// function myFunc() {
//   var x = document.getElementById("myNavbar");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function myFunction() {
  let dots = document.querySelector(".dots");
  let moreText = document.querySelector(".more");
  let btnText = document.querySelector(".myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  let dots1 = document.querySelector(".dots1");
  let moreText1 = document.querySelector(".more1");
  let btnText1 = document.querySelector(".myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}
function myFunction2() {
  let dots2 = document.querySelector(".dots2");
  let moreText2 = document.querySelector(".more2");
  let btnText2 = document.querySelector(".myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

function myFunction3() {
  let dots3 = document.querySelector(".dots3");
  let moreText3 = document.querySelector(".more3");
  let btnText3 = document.querySelector(".myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}
function myFunction4() {
  let dots4 = document.querySelector(".dots4");
  let moreText4 = document.querySelector(".more4");
  let btnText4 = document.querySelector(".myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
  }
}
function myFunction5() {
  let dots5 = document.querySelector(".dots5");
  let moreText5 = document.querySelector(".more5");
  let btnText5 = document.querySelector(".myBtn5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "Read more";
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "Read less";
    moreText5.style.display = "inline";
  }
}
function myFunction6() {
  let dots6 = document.querySelector(".dots6");
  let moreText6 = document.querySelector(".more6");
  let btnText6 = document.querySelector(".myBtn6");

  if (dots6.style.display === "none") {
    dots6.style.display = "inline";
    btnText6.innerHTML = "Read more";
    moreText6.style.display = "none";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = "Read less";
    moreText6.style.display = "inline";
  }
}
function myFunction7() {
  let dots7 = document.querySelector(".dots7");
  let moreText7 = document.querySelector(".more7");
  let btnText7 = document.querySelector(".myBtn7");

  if (dots7.style.display === "none") {
    dots7.style.display = "inline";
    btnText7.innerHTML = "Read more";
    moreText7.style.display = "none";
  } else {
    dots7.style.display = "none";
    btnText7.innerHTML = "Read less";
    moreText7.style.display = "inline";
  }
}
function myFunction8() {
  let dots8 = document.querySelector(".dots8");
  let moreText8 = document.querySelector(".more8");
  let btnText8 = document.querySelector(".myBtn8");

  if (dots8.style.display === "none") {
    dots8.style.display = "inline";
    btnText8.innerHTML = "Read more";
    moreText8.style.display = "none";
  } else {
    dots8.style.display = "none";
    btnText8.innerHTML = "Read less";
    moreText8.style.display = "inline";
  }
}
function myFunction9() {
  let dots9 = document.querySelector(".dots9");
  let moreText9 = document.querySelector(".more9");
  let btnText9 = document.querySelector(".myBtn9");

  if (dots9.style.display === "none") {
    dots9.style.display = "inline";
    btnText9.innerHTML = "Read more";
    moreText9.style.display = "none";
  } else {
    dots9.style.display = "none";
    btnText9.innerHTML = "Read less";
    moreText9.style.display = "inline";
  }
}
function myFunction10() {
  let dots10 = document.querySelector(".dots10");
  let moreText10 = document.querySelector(".more10");
  let btnText10 = document.querySelector(".myBtn10");

  if (dots10.style.display === "none") {
    dots10.style.display = "inline";
    btnText10.innerHTML = "Read more";
    moreText10.style.display = "none";
  } else {
    dots10.style.display = "none";
    btnText10.innerHTML = "Read less";
    moreText10.style.display = "inline";
  }
}
function myFunction11() {
  let dots11 = document.querySelector(".dots11");
  let moreText11 = document.querySelector(".more11");
  let btnText11 = document.querySelector(".myBtn11");

  if (dots11.style.display === "none") {
    dots11.style.display = "inline";
    btnText11.innerHTML = "Read more";
    moreText11.style.display = "none";
  } else {
    dots11.style.display = "none";
    btnText11.innerHTML = "Read less";
    moreText11.style.display = "inline";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
