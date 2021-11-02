var btn = document.querySelector(".button");

btn.classList.add("display-none");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", function(){
  setTimeout(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});