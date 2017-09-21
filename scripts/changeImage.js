/**
 * Created by mingxin on 2017/9/20.
 */
  function changeImage(whichPic){
    let source = whichPic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
  }
   function countBodyChildren(){
    let bodyElement = document.getElementsByTagName("body")[0];
    alert(bodyElement.childNodes.length);  
   }
   window.onload = countBodyChildren;