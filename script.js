const accessKey = "y5eXaOrZiapzTXHNQ5lxeBYltAW-hMmFJ_EqBzsiMOA";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const ShowMorebtn = document.getElementById("search-show-btn");
let Keyword = "";
let page = 1;
async function searchImage(){
  Keyword = searchBox.nodeValue;
  const url ="ttps://api.unsplash.com/search/photos?page=${page}&client_id=${accessKey}";
  const response = await fetch(url);
  const data = await response.json();
  const results =data.results;
  results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.Links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
})
}
searchImage();