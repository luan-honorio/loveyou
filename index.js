var item = document.querySelectorAll("#imagem");
var control = document.querySelectorAll("#quote");


async function evento(){
  item.forEach((Element)=>{
    Element.addEventListener("click", ()=>{
        window.location = "flor.html"
    })
  })
}
 async function play(){
  control.forEach((Element)=>{
    Element.addEventListener("click",()=>{
      var audio = document.getElementById("audio");
  
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
    
    })
  })
 }

evento()
play()