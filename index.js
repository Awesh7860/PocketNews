
var maincontainer=document.getElementById("maincontainer")
var middlesection=document.getElementById("middlesection")
var counter=0;
function hambar(){
    sidebar=document.createElement("div")
   sidebar.setAttribute("class","sidebar")
   sidebar.setAttribute("id","sidebar")
   sidebar.innerHTML=`<div class="side-bar-heading">
   <h4>Categories</h4>
</div>
<ul class="side-bar-categories">
   <li id="headlines" onclick="fetchHeadlines()">Headlines</li>
   <li id="allnews" onclick="fetchGeneralNews()">All News</li>
   <li id="business" onclick="fetchBusinessNews()">Business</li>
   <li id="sports" onclick="fetchSportsNews()">Sports</li>
   <li id="technology" onclick="technology()">Technology</li>
   <li id="entertainment" onclick="entertainment()">Entertainment</li>
</ul>`
   maincontainer.appendChild(sidebar)
   const X=`
   <p id="clear" onclick="clearSidebar()">X Close</p>`
  const clear=document.createElement("div")
  clear.setAttribute("class","clear")
  clear.setAttribute("id","clear")
  clear.innerHTML=X
  const logo=document.getElementById("logo")
  logo.appendChild(clear)
}
function clearSidebar(){
const sidebar=document.getElementById("sidebar")
const clear=document.getElementById("clear")
sidebar.remove()
clear.remove()
}

const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1948e9099135491b97d60c1f03e4e401";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1948e9099135491b97d60c1f03e4e401";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1948e9099135491b97d60c1f03e4e401";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1948e9099135491b97d60c1f03e4e401";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1948e9099135491b97d60c1f03e4e401";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=1948e9099135491b97d60c1f03e4e401";
var newsData=[]
const fetchHeadlines=async ()=>{
    const response=await fetch(HEADLINES_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    console.log(newsData);
    displayNews()
}
const fetchGeneralNews=async ()=>{
    const response=await fetch(GENERAL_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    clearAll()
    displayNews()
}
const fetchBusinessNews =async ()=>{
    const response=await fetch(BUSINESS_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    clearAll()
    displayNews()
}
const fetchSportsNews=async ()=>{
    const response=await fetch(SPORTS_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    clearAll()
    displayNews()
}
const  fetchEntertainmentNews=async ()=>{
    const response=await fetch(ENTERTAINMENT_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    clearAll()
    displayNews()
}
const  fetchTechnologyNews=async ()=>{
    const response=await fetch(TECHNOLOGY_NEWS)
    newsData=[]
    const myJson=await response.json()
    newsData=myJson.articles
    clearAll()
    displayNews()
}
window.onload=function(){
    fetchHeadlines()
}
function displayNews(){
   newsData.forEach(news=>{
    const card=document.createElement("div")
    card.className="card"
    console.log(news);
    card.innerHTML=`
    <div class="imagesection">
      <img
        src="${news.urlToImage}"
        alt="Image Not Found"
        id="image"
        style="width: 100%;height: 100%;border-radius: 5px;"
      />
    </div>
    <div class="contentsection" id="contentsection">
      <div class="headingsection">
        <h2>
          "${news.title}"
        </h2>
        <p>short by <span>${news.author}<span>&nbsp<span>${news.publishedAt.toLocaleString()}</span></span></p>
      </div>
      <div class="newssection">
        <p>
          "${news.content}"
        </p>
      </div>
      <div class="linksection">
      <span>read more at: <a href="${news.url}">${news.source.name}</></a></span>
      </div>`
      middlesection.appendChild(card)
   })
}
function clearAll(){
const card=document.getElementById("card")
card.innerHTML=""
}