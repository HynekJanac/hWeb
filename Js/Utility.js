
// Settings

var preloader_active = false
var infobox_message = 'none'

//Infobox enables me to show one messeage on all my webpages
// set display value betwen none and block
//if you want ot add a link <a class="infobox-link" href="https://twitter.com/HynekJanac" target="_blank"> </a>

if (infobox_message != "none"){
document.getElementById("infobox").style.display = "block";
document.getElementById("infobox").innerHTML = infobox_message
}


//Nav
//Enables me to change nav across all the pages
//Add [NEW] to the tittle to add notification
var subpage1 ='<li class="nav_list_items"><a title="Blog" href="../blog.html" class="nav_link">Blog</a></li>';
var subpage2 ='<li class="nav_list_items"><a title="Gallery [NEW]" href="../gallery.html" class="nav_link">Gallery</a></li>'
var subpage3 ='<li class="nav_list_items"><a title="Donate" href="../donate.html" class="nav_link">Donate 💙</a></li>';
var subpage4 ='<li class="nav_list_items"><a title="Search" href="../search.html" class="nav_link"><i class="fa-solid fa-magnifying-glass"></i></li>';


var subpages =String(subpage1 + subpage2 + subpage3 + subpage4);
document.getElementById("nav-list").innerHTML = subpages;

//Newsletter
var newsletter_name = '<p class="sub">Newsletter</p>';
var newsletter_description = String('<p class="info" id="">If there were an award for the most irregular newsletter, this one would be a runner-up. So you do not have to worry about it flooding your inbox. Plus, you can receive updates on everything that is happening here.📰' + "</p>");
var newsletter_subscribe_link = '<div class="form">  <a title="Subscribe" href="http://eepurl.com/hfZ4P1" class="sing-btn" >Subscribe</a></div>';
var footnote ='<p class="footnote">You will not recive any spam from me</p>';

var newsletter = String(newsletter_name + newsletter_description + newsletter_subscribe_link);
document.getElementById("newsletter_id").innerHTML = newsletter;


//Social changes social links
var currenturl = window.location.href

var social1 = '<a title="Follow me on Masstodon!" class="social" href="https://fosstodon.org/@HynekJanac" target="_blank"><i class="icon fa-brands fa-mastodon"></i></a>';
var social2 = '<a title="Subscribe to me on YouTube!" class="social" href="https://www.youtube.com/@hynekjanac" target="_blank"><i class="icon fab fa-youtube" ></i></a>';
var social3 = '<a title="Follow me on instagram!" class="social" href="https://www.instagram.com/HynekJanac" target="_blank"><i class="icon fab fa-instagram" ></i></a>';
var social4 = '<a title="Check out my github!"class="social" href="https://github.com/HynekJanac" target="_blank"><i class="icon fab fa-github" ></i></a>';
var report = '<a title="Report site issue!"class="social" href="mailto:hynekjanac@gmail.com?subject=Site%20Issue&body=Link:%20'+ currenturl +'%0D%0AIssue%20description:%0D%0A %0D%0AScreenshot:%0D%0A" target="_blank"><i class="icon fas fa-exclamation-triangle"></i></a>';
var donation ='<a title="Donate!" class="social donate-btn" href="https://www.hynekjanac.com/donate"><i class="icon fas fa-heart"></i></a>';
var social = String(donation + report + social1 + social2 + social3 + social4);
document.getElementById("social-grid").innerHTML = social;

// cookie consent
var cookienotice = 'This website uses cookies to ensure you get the best experience. <a style="color: var(--main-color);" href="../Writing/000-cookies.html">Learn more</a> </p> <a class="enable-cookies cookie-btn" href="#" onclick="GotIt()">Got it!</a>';
document.getElementById("cookie-consent").innerHTML = cookienotice;


//Calloutfunctions
function CopyLink() {
    document.getElementById("Copy").style.display = "block";
    //select the text in the text box
    document.getElementById("Copy").select();
    //copy the text to the clipboard
    document.execCommand("copy");
    document.getElementById("Copy").style.display = "none";
    
    document.getElementById("Copy_Info").style.opacity = "1";
    document.getElementById("Copy_Info").style.position = "relative";
  }
// When the user clicks on the button, hide or show table of contents
function ShowHideContents(){
if (document.getElementById("table-of-contents-list").style.display == "none"){
    document.getElementById("table-of-contents-list").style.display = "block";
    document.getElementById("showhide-contents").innerHTML = "(hide)"
}
else{
    document.getElementById("table-of-contents-list").style.display = "none";
    document.getElementById("showhide-contents").innerHTML = "(show)"
}
}

//Script used to find url for sharing
function ShareUrl(){
    var currenturl = window.location.href
    var windowname = document.title

    var facebookshare = "https://www.facebook.com/sharer/sharer.php?u=" + currenturl
    var twittershare = "https://twitter.com/intent/tweet?text=" + windowname + "%20by%20@HynekJanac%20" + currenturl

    document.getElementById("Copy").value = currenturl
    document.getElementById("twitter_share").href = twittershare
    document.getElementById("facebook_share").href = facebookshare
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    mybutton.style.opacity = 1;
    mybutton.style.transform = "scale(1)";
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.transform = "scale(0)";
  }
}


// shows and hides navigation menu
function Menu(){
    var nav = document.getElementById("nav");

    if (nav.style.display ==="none"){
        nav.style.display = "block";
    }else{
        nav.style.display = "none"
    }

}

function ShowNav(){
    // Optimize layout for mobile
    document.getElementById("nav").style.display = "block";
}

// Layout gets optimized if the screen widht is lower or higher than 1100px
function Layout_handler(){
    if (window.innerWidth > 850){
        ShowNav();
    }
}

// Image viewer is a copied from Gallery.js, here is used for in article images
function ArticleImageViewer(){
    document.querySelectorAll('article img').forEach(image => {
        image.onclick = () =>{
            document.querySelector('.popup-container').style.display = "block";
            document.querySelector('.popup-container img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.popup-container span').onclick = () => {
        document.querySelector('.popup-container').style.display = "none";
    }
    document.querySelector('.popup-container').onclick = () => {
        document.querySelector('.popup-container').style.display = "none";
    }
}

// Cookie consent

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


function LoadContent(){
    var total_section_number = document.querySelectorAll('.section').length;
    var current = total_section_number;
    current -= 1;
    document.getElementById("section_" + String(current)).style.display = "grid";
    if (current == 1){
        document.getElementById("loadmore").style.display = "none";
    }
}
// Script activates on refresh or on when you resize page
window.onload = Layout_handler;
window.onresize = Layout_handler;
Layout_handler();

//Preloader

if (preloader_active == true){
const preloaderwrap = document.createElement("div")
preloaderwrap.className = "preloader"
preloaderwrap.id = "preloader"
preloaderwrap.innerHTML = '<img class="loader" src="../Img/Svg/Logo.svg" alt="" srcset="">'

var header = document.getElementsByClassName("header");
header[0].appendChild(preloaderwrap);

window.onload = setTimeout(
    function(){
    var op = 1;  // initial opacity
    var timer = setInterval(function (){
    if (op <= 0.1){
        clearInterval(timer);
        document.getElementById("preloader").style.display = 'none';}

    document.getElementById("preloader").style.opacity = op;
    document.getElementById("preloader").style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;}, 50);}, 1000)  }


ArticleImageViewer();