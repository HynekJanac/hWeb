//Article contents generator
var ToC = "<nav role='navigation' class='table-of-contents'>" +  "<h2 class='contents-title'>Contents</h2><a id='showhide-contents' onclick='ShowHideContents()'>(hide)</a>" + '<ul class="table-of-contents-list" id="table-of-contents-list">';

var newLine, el, title, link;

$("article h2").each(function() {

el = $(this);
title = el.text();
link = "#" + el.attr("id");

newLine =  "<li>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";

ToC += newLine;});

ToC += "</ul>" + "</nav>";
$("article").prepend(ToC)