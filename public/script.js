//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);
}

function myFun(){
  alert("hello");
}

function myFun2(){
  console.log("myFun2 called");
}

//receives event object
function logEventType(event){
  console.log(event.type);
}

window.onload = function(event){
   console.log("Page has loaded");

   //modify the span
   const result = document.querySelector('#result');
   result.innerHTML = '<h2>My Span</h2>';
   result.style.color = 'blue';

   let myBtn = document.querySelector("#myBtn");

   //attach extra events
   myBtn.addEventListener("click", myFun2);
   myBtn.addEventListener("mouseover", logEventType);
   myBtn.addEventListener("mouseout", logEventType);
}