function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var cookiepolicy = getCookie("cookiepolicy");

if (cookiepolicy == "True"){
   document.getElementById("cookie-consent").style.display = "none"; 
}

function GotIt() {
    document.cookie = "cookiepolicy=True ; expires=Thu, 9 Dec 2030 12:00:00 UTC";
    window.location.reload(true) 

}
