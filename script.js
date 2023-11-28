let randomNumber = math.trunc(math.random() * 20) + 1;
console.log(randomNumber)
document.querySelector(".check").addEventListener('click', function (){

    const input = document.querySelector(".guess").value= 1
    if(input === randomNumber) {
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector('.number').innerHTML = randomNumber

    } else {
        console.log("wrong")
    }
})
document.querySelector('.again').addEventListener("click", function() {
    
})