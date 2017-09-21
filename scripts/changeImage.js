/**
 * Created by mingxin on 2017/9/20.
 */
function changeImage(whichPic) {
  let source = whichPic.getAttribute("href");
  let title = whichPic.getAttribute("title");
  let placeholder = document.getElementById("placeholder");
  let desctiption = document.getElementById("description");
  placeholder.setAttribute("src", source);
  desctiption.firstChild.nodeValue = title;
  // alert(desctiption.childNodes[0].nodeValue);

}

function countBodyChildren() {
  let bodyElement = document.getElementsByTagName("body")[0];
  // alert(bodyElement.childNodes.length);
  // alert(bodyElement.nodeType);
  
}

window.onload = countBodyChildren;