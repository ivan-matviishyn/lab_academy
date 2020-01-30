let allArticles = [];
function saveArticle() {
    let articleObj = {};
 let title = document.getElementById("title").value;
 let imgUrl = document.getElementById("imgsrc").value;
 let article = document.getElementById("text").value;
 if(title==="" || imgUrl==="" || article==="") {
     alert("All inputs should not be empty")
 }else {
     articleObj.title =title;
     articleObj.image = imgUrl;
     articleObj.article = article;
     articleObj.sentences = article.split(".");
     articleObj.sentencesNum = articleObj.sentences.length;
     allArticles.push(articleObj);
     let info = document.getElementById("info");
     info.innerText = "The article has been saved";

     emptyFields();
     console.dir(allArticles);
 }

 //  this logic can be changed later

}
function emptyFields(){
   document.getElementById("title").value ="";
   document.getElementById("imgsrc").value = "";
   document.getElementById("text").value = "";

    setTimeout(function () {
        document.getElementById("info").innerText = ""
    },4000);

}
function showArticles(){
 for(var i=0;i<allArticles.length;i++){
     let obj = allArticles[i];

     let objTitle = document.createElement("h3");
     let titleText  = document.createTextNode(obj.title);
     objTitle.appendChild(titleText);

     let objArticle = document.createElement("article");
     let articleText = document.createTextNode(obj.article);
     objArticle.appendChild(articleText);

     let objContainer = document.createElement("div");
     objContainer.appendChild(objTitle);
     objContainer.appendChild(objArticle);

     console.dir(objContainer);





    document.getElementById("articleContainer").appendChild(objContainer);
 }
}
