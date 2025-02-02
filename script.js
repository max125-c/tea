let tea = document.getElementById("image1")
const sound = new Audio('./Garam Hai Garam Hai.mp3')
tea.addEventListener('mouseenter',function(){
    setTimeout(function (){
        sound.currentTime = 0;
  sound.play();
    },300)
  
})