import "bootstrap";
import "./style.css";



window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let extension = [ ".com,", ".net", ".us" , ".io" , "etc"]
  console.log(pronoun);

for (let i = 0; i < pronoun.lenght; i++) {
  for (let x = 0; i < adj.length; x++){
   for (let y = 0; y < noun.lenght; y++) {
    for (let m = 0; y < extension.lenght; m++) { 
     console.log(pronoun.adj[i]+ adj [x]+noun [y]+ extension[m]);
    }
   }
  }

}

}
