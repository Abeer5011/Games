const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.getElementById("time-left")
const start = document.getElementById("start")
let score = document.getElementById("score")
const button = document.getElementById("playAgain")

let result = 0
let currentTime = timeLeft.innerText
let timerId

start.addEventListener("click", function startGame() {
  moveMole()
  timerId = setInterval(countDown, 1000)
  start.style.display = "none"
})
button.style.display = "none"
function randomSquare() {
  square.forEach(className => {
    className.classList.remove("mole")
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add("mole")

  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1
      score.innerText = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

// moveMole()

function countDown() {
  currentTime--
  timeLeft.innerText = currentTime

  if (currentTime === 0) {
    clearInterval(timerId)
    alert("GAME OVER! Your final score is " + result)
  }
}

button.addEventListener("click", function playAgain() {
  button.style.display = "inline"
  //   grid.innerHTML = ""
  startGame()
})
