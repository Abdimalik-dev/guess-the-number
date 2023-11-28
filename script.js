let randomNumber = Math.trunc(Math.random() * 20) + 1; // 1 - 20 //number
let score = 20
let highScore = 0
console.log(randomNumber)


document.querySelector(".check").addEventListener("click",function(){
   if(score === 0) return 

  const input = document.querySelector(".guess").value * 1 //number

  if(input === randomNumber){
    document.querySelector("body").style.backgroundColor = "green"
    document.querySelector(".message").innerText = "Correct Number!"
    document.querySelector(".number").innerText = randomNumber
    if(score > highScore){
      document.querySelector(".highscore").innerText = score
    }
  }else{
    score-- //0

     document.querySelector(".score").innerText = score
    if(score === 0){
    
    document.querySelector("body").style.backgroundColor = "red"
    
    document.querySelector(".message").innerText = "Game Over!"
    return
    }
    if(input > randomNumber){
      document.querySelector(".message").innerText = "Too High!"
    }else{
      document.querySelector(".message").innerText = "Too Low!"
    }
  }
})

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    document.querySelector(".message").innerText = "Start guessing..."
    document.querySelector(".number").innerText = "?"
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".guess").value = ''
    document.querySelector(".score").innerText = score

})