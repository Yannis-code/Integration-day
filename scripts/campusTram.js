const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const startButton = document.getElementById("start")
const info = document.getElementById('info')
const errorMsg = document.getElementById('error')
const heading = document.querySelector(".heading")
const container = document.getElementById("containerSimon")

const red = new Audio("../src/audio/campusTram/simonSound1.mp3")
const green = new Audio("../src/audio/campusTram/simonSound2.mp3")
const blue = new Audio("../src/audio/campusTram/simonSound3.mp3")
const yellow = new Audio("../src/audio/campusTram/simonSound4.mp3")


let sequence = []
let humanSequence = []
let level = 0
let minSequence = 4
let remainChance = 3
let roundsToWin = 3

container.addEventListener('click', e => {
    const tile = e.target.id
    if (tile !== "containerSimon") handleClick(tile)
})

function startGame() {
    startButton.classList.add('hidden')
    info.classList.remove('hidden')
    container.classList.remove("unclickable")
    info.textContent = 'Wait for the computer'
    setTimeout(() => {
        nextRound();
    }, 500);
}

function resetGame() {
    sequence = [];
    humanSequence = [];
    level = 0;
    startButton.classList.remove('hidden')
    heading.textContent = 'Simon Game'
    container.classList.add('unclickable')
}

async function nextRound() {
    level++

    container.classList.add('unclickable')
    info.textContent = 'Reproduisez cette séquence'
    heading.textContent = `Niveau ${level} sur ${roundsToWin}`
  
    const nextSequence = []
    for (let i = 0; i < minSequence+level; i++) nextSequence.push(nextStep())
    await playRound(nextSequence)

    sequence = nextSequence
    humanTurn(level)
}

function nextStep() {
    const tiles = ['red', 'green', 'blue', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
  
    return random;
}

function activateTile(color) {
    const tile = document.getElementById(color);
    const sound = (color === "red")?red:(color === "green")?green:(color === "blue")?blue:yellow
  
    tile.classList.add('activated')
    sound.play();
  
    setTimeout(() => {
        tile.classList.remove('activated')
    }, 350);
    return new Promise((resolve, reject)=>{
        sound.onerror = reject;
        sound.onended = resolve;
    })
}
  
async function playRound(nextSequence) {
    for (let i = 0; i < nextSequence.length; i++) {
        await activateTile(nextSequence[i])
    }
}

function humanTurn(level) {
    container.classList.remove('unclickable');
    info.textContent = `A vous: ${level+minSequence} notes restantes`;
}

function handleClick(tile) {
    humanSequence.push(tile)
    const index = humanSequence.length - 1
    const sound = (tile === "red")?red:(tile === "green")?green:(tile === "blue")?blue:yellow
    sound.play();
    container.classList.add('unclickable')
    sound.addEventListener("ended", ()=>container.classList.remove('unclickable'))
  
    const remainingTaps = sequence.length - humanSequence.length

    if (humanSequence[index] !== sequence[index]) {
        info.innerHTML=`<red>&#10060; Mauvaise réponse &#10060;</red>`
        startButton.innerHTML = "Restart"
        resetGame()
        return;
    }
  
    if (humanSequence.length === sequence.length) {
        if (humanSequence.length === roundsToWin+4) {
            nextPlace.innerHTML = `
            <h2>Lieu suivant</h2>
            <div class="box" id="box">
                <img src="../src/img/campusTram/indice.png" alt="presentation.png" id="infoImg">
                <img src="../src/img/campusTram/indice2.png" alt="presentation.png" id="infoImg">
            </div>
			`
		indice.innerHTML = `
        <h2>Indice pour l'énigme finale</h2>
        <div class="path">
            <pre>
 <img src="../src/img/global/folder.png" class="folder-img"> Site
  <img src="../src/img/global/folder2.png" class="folder-img"> ????
 2 <img src="../src/img/global/folder2.png" class="folder-img"> YUyo
    <img src="../src/img/global/folder2.png" class="folder-img"> ????
     <img src="../src/img/global/folder2.png" class="folder-img"> ????
      <img src="../src/img/global/folder2.png" class="folder-img"> ????
       <img src="../src/img/global/folder2.png" class="folder-img"> ????
        <img src="../src/img/global/folder2.png" class="folder-img"> ????
         <img src="../src/img/global/folder2.png" class="folder-img"> ????
          <img src="../src/img/global/folder2.png" class="folder-img"> ????
           <img src="../src/img/global/folder2.png" class="folder-img"> ????
            <img src="../src/img/global/folder2.png" class="folder-img"> ????
             <img src="../src/img/global/folder2.png" class="folder-img"> ????
              <img src="../src/img/global/folder2.png" class="folder-img"> ????
               <img src="../src/img/global/folder2.png" class="folder-img"> ????
                <img src="../src/img/global/folder2.png" class="folder-img"> ????
                 <img src="../src/img/global/folder2.png" class="folder-img"> ????
                  <img src="../src/img/global/folder2.png" class="folder-img"> ????
                   <img src="../src/img/global/folder2.png" class="folder-img"> ????
                    <img src="../src/img/global/folder2.png" class="folder-img"> ????
                     <img src="../src/img/global/file.png" class="folder-img"> <img src="../src/img/global/lock.png" class="folder-img"> ????.html</pre>
        </div>
			`
            return
        }
        humanSequence = [];
        info.textContent = 'OK!';
        setTimeout(() => {
            nextRound();
        }, 1500);
        return;
    }
  
    info.textContent = `A vous: ${remainingTaps} note${remainingTaps > 1 ? 's' : ''} restant${remainingTaps > 1 ? 's' : ''}`;
}

/*
function addColor(tab) {
    var colorArray = ["green", "red", "yellow", "blue"]
    return tab.push(colorArray[Math.floor(Math.random() * colorArray.length)])
}

function activateTile(color) {
    const tile = document.getElementById(color);
    const tmp = tile.style.backgroundColor
    tile.style.backgroundColor = "white"
    setTimeout(() => {
        tile.style.backgroundColor = tmp
    }, 300);
    const sound = ((color === "red")?red:(color === "green")?green:(color === "blue")?blue:yellow)
    sound.play();
}
  
function playRound(nextSequence) {
    for (let i = 0; i < nextSequence.length; i++) {
        setTimeout(() => activateTile(nextSequence[i]), (i + 1) * 600)
    }
}

function resetAnswers() {answers = []}

function resetGame() {
    rounds = 0
    remainChance = 3
    computerMovements = []
}

start.addEventListener("click", () => {
    lives.innerHTML = `Chances restantes: ${remainChance}`
    for (let i = 0; i < 2; i++) addColor(computerMovements)
    playerTurn()
})

function playerTurn() {
    if (rounds === 3) {
        nextPlace.innerHTML = `
            <h2>Lieu suivant</h2>
            <div class="div-text">Trouvez l'emplacement de cette photo</div>
            <div class="img-container">
                <img src="../src/img/campusTram/indice.png" class="png">
            </div>
			`
		indice.innerHTML = `
        <h2>Indice pour l'énigme finale</h2>
        <div class="path">
            <pre>
 <img src="../src/img/global/folder.png" class="folder-img"> Site
  <img src="../src/img/global/folder2.png" class="folder-img"> ????
 2 <img src="../src/img/global/folder2.png" class="folder-img"> YUyo
    <img src="../src/img/global/folder2.png" class="folder-img"> ????
     <img src="../src/img/global/folder2.png" class="folder-img"> ????
      <img src="../src/img/global/folder2.png" class="folder-img"> ????
       <img src="../src/img/global/folder2.png" class="folder-img"> ????
        <img src="../src/img/global/folder2.png" class="folder-img"> ????
         <img src="../src/img/global/folder2.png" class="folder-img"> ????
          <img src="../src/img/global/folder2.png" class="folder-img"> ????
           <img src="../src/img/global/folder2.png" class="folder-img"> ????
            <img src="../src/img/global/folder2.png" class="folder-img"> ????
             <img src="../src/img/global/folder2.png" class="folder-img"> ????
              <img src="../src/img/global/folder2.png" class="folder-img"> ????
               <img src="../src/img/global/folder2.png" class="folder-img"> ????
                <img src="../src/img/global/folder2.png" class="folder-img"> ????
                 <img src="../src/img/global/folder2.png" class="folder-img"> ????
                  <img src="../src/img/global/folder2.png" class="folder-img"> ????
                   <img src="../src/img/global/folder2.png" class="folder-img"> ????
                    <img src="../src/img/global/folder2.png" class="folder-img"> ????
                     <img src="../src/img/global/file.png" class="folder-img"> <img src="../src/img/global/lock.png" class="folder-img"> ????.html</pre>
        </div>
			`
    }
    else{
        rounds++
        addColor(computerMovements)
        playRound(computerMovements)
        //console.log("1")
        //console.log(answers)
        
        if (container.addEventListener) container.addEventListener('click', (e) => {
            //console.log("2")
            //console.log(answers)
            activateTile(e.target.id)
            answers.push(e.target.id)
            //console.log("3")
            //console.log(answers)
            for (let i = 0; i < answers.length; i++) {
                if (JSON.stringify(computerMovements) === JSON.stringify(answers)) {
                    resetAnswers()
                    playerTurn()
                    break
                }
                if (answers[i] !== computerMovements[i]) {
                    if (remainChance > 0) {
                        playRound(computerMovements)
                        resetAnswers()
                        remainChance--
                        lives.innerHTML = `Chances restantes: ${remainChance}`
                    }
                    else{
                        indice.innerHTML=`
                            <div class="result-text">
                                <red>&#10060; Mauvaise réponse &#10060;</red>
                            </div>
                        `
                        setTimeout(() => indice.innerHTML = "", 1500)
                        break
                    }
                }  
            }
        })
    }
}
*/