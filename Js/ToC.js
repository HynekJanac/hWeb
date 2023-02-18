// Get ToC div
toc = document.getElementById("ToC");
   
// Create a list for the ToC entries
tocList = document.getElementById("ToCList");    

// Get the h3 tags - ToC entries
headers = document.getElementsByTagName("h2");

// For each h2
for (i = 1; i < headers.length; i++){
 
  // Create an id
  name = "h"+i;
  headers[i].id=name;
 
  // a list item for the entry
  tocListItem = document.createElement("li");

  // a link for the h3
  tocEntry = document.createElement("a");
  tocEntry.setAttribute("href","#"+name);
  tocEntry.innerText=headers[i].innerText;
 
  tocListItem.appendChild(tocEntry);
  tocList.appendChild(tocListItem);
}