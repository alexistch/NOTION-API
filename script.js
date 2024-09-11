 // identifier le btn
 const btn = document.getElementById("btn");

 // définir une fonction
 function handleClick(e) {
     e.target.innerHTML = "bonjour";
 }

 // ajouter un événement click
 btn.addEventListener("click", handleClick);

 // log pour tester
 console.log("test ...", btn);