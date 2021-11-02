function getCookie(name) {
  var cName = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(cName) == 0) return c.substring(cName.length,c.length);
  }
  console.log(cName);
  return null;
}