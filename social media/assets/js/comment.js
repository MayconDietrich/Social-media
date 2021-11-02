var modal = document.getElementById("myModal");
var scrollLock = document.getElementById("html");
var hideModal = document.getElementById("modal__js");

function comment() {
  modal.classList.remove("display-none");
  scrollLock.classList.add("scroll-lock")
}

function closeModal() {
  modal.classList.add("display-none");
  scrollLock.classList.remove("scroll-lock");
}

document.addEventListener("keydown", function(event){
  if (event.keyCode == 27) {
    closeModal();
  }  
})

modal.addEventListener("click", function(event) {
  if(event.target == hideModal) {
    modal.classList.add("display-none");
    scrollLock.classList.remove("scroll-lock");
  }
})