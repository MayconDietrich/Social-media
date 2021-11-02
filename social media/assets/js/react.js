function likeClick(e) {
  var btn = (e.target);
  var closestElement = btn.closest(":not(img, button)");
  var span = closestElement.querySelector("#counter");

  span.innerHTML = (parseInt(span.innerHTML) + 1);
}