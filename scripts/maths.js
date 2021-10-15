// Lieu suivant
const FIRST = `
    <h2>Lieu suivant</h2>
    <div class="div-text">
        Cliquez sur les images qui évoquent le mot "Python"
    </div>
    <div class="box" id="box">
        <div class="image"><input type="checkbox" id="checkbox1" alt="Python"><label for="checkbox1"></label></div>
        <div class="image"><input type="checkbox" id="checkbox2" alt="Python"><label for="checkbox2"></label></div>
        <div class="image"><input type="checkbox" id="checkbox3" alt="Python"><label for="checkbox3"></label></div>
        <div class="image"><input type="checkbox" id="checkbox4" alt="Python"><label for="checkbox4"></label></div>
        <div class="image"><input type="checkbox" id="checkbox5" alt="Python"><label for="checkbox5"></label></div>
        <div class="image"><input type="checkbox" id="checkbox6" alt="Python"><label for="checkbox6"></label></div>
        <div class="image"><input type="checkbox" id="checkbox7" alt="Python"><label for="checkbox7"></label></div>
        <div class="image"><input type="checkbox" id="checkbox8" alt="Python"><label for="checkbox8"></label></div>
    </div>
    <button id="Valider" class="button">Valider</button>
`
const SECOND = `
    <h2>Lieu suivant</h2>
    <div class="div-text">
        Cliquez sur les images qui évoquent le mot "Vert"
    </div>
    <div class="box" id="box">
        <div class="image"><input type="checkbox" id="checkbox1" alt="Vert"><label for="checkbox1"></label></div>
        <div class="image"><input type="checkbox" id="checkbox2" alt="Vert"><label for="checkbox2"></label></div>
        <div class="image"><input type="checkbox" id="checkbox3" alt="Vert"><label for="checkbox3"></label></div>
        <div class="image"><input type="checkbox" id="checkbox4" alt="Vert"><label for="checkbox4"></label></div>
        <div class="image"><input type="checkbox" id="checkbox5" alt="Vert"><label for="checkbox5"></label></div>
        <div class="image"><input type="checkbox" id="checkbox6" alt="Vert"><label for="checkbox6"></label></div>
        <div class="image"><input type="checkbox" id="checkbox7" alt="Vert"><label for="checkbox7"></label></div>
        <div class="image"><input type="checkbox" id="checkbox8" alt="Vert"><label for="checkbox8"></label></div>
    </div>
    <button id="Valider" class="button">Valider</button>
`

const THIRD = `
    <h2>Lieu suivant</h2>
    <div class="div-text">
        Cliquez sur les images qui évoquent le mot "Pierre"
    </div>
    <div class="box" id="box">
        <div class="image"><input type="checkbox" id="checkbox1" alt="Vert"><label for="checkbox1"></label></div>
        <div class="image"><input type="checkbox" id="checkbox2" alt="Vert"><label for="checkbox2"></label></div>
        <div class="image"><input type="checkbox" id="checkbox3" alt="Vert"><label for="checkbox3"></label></div>
        <div class="image"><input type="checkbox" id="checkbox4" alt="Vert"><label for="checkbox4"></label></div>
        <div class="image"><input type="checkbox" id="checkbox5" alt="Vert"><label for="checkbox5"></label></div>
        <div class="image"><input type="checkbox" id="checkbox6" alt="Vert"><label for="checkbox6"></label></div>
        <div class="image"><input type="checkbox" id="checkbox7" alt="Vert"><label for="checkbox7"></label></div>
        <div class="image"><input type="checkbox" id="checkbox8" alt="Vert"><label for="checkbox8"></label></div>
    </div>
    <button id="Valider" class="button">Valider</button>
`

const FINAL = `
    <h2>Lieu suivant</h2>
    <div class="box" id="box">
        <img src="../src/img/maths/indice.png" alt="presentation.png" id="infoImg">
        <img src="../src/img/maths/indice2.png" alt="presentation.png" id="infoImg">
    </div>
`

const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const reponse = document.getElementById("reponse")
const noRobot = document.querySelectorAll(".startCaptcha")

let state = 1


// Preload des images des captcha
var preload = [];
const path = "../src/img/maths/captcha"

// Captcha 1
preload.push(path+"1/python.png")
preload.push(path+"1/cython.png")
preload.push(path+"1/Python_Code.png")
preload.push(path+"1/vipere.png")
preload.push(path+"1/colt.png")
preload.push(path+"1/couleuvre.png")
preload.push(path+"1/ruby.png")
preload.push(path+"1/coltPython.png")

// Captcha 2
preload.push(path+"2/betterave.jpg")
preload.push(path+"2/turquoise.jpg")
preload.push(path+"2/feuVert.jpg")
preload.push(path+"2/vers.jpg")
preload.push(path+"2/vert-lagon.jpg")
preload.push(path+"2/versVert.jpg")
preload.push(path+"2/bouteille.jpg")
preload.push(path+"2/bouteilleVerte.jpg")

// Captcha 3
preload.push(path+"3/terre.jpeg")
preload.push(path+"3/Stone.png")
preload.push(path+"3/Pierre.png")
preload.push(path+"3/GrosCailloux.png")
preload.push(path+"3/Bois.jpg")
preload.push(path+"3/Basalte.jpg")
preload.push(path+"3/Ambre.jpg")
preload.push(path+"3/Nuage.jpg")

let loadedimages = []
for(let i=0; i<preload.length; i++) {
    loadedimages[i] = new Image();
    loadedimages[i].src = preload[i];
}



noRobot[0].addEventListener("click", () => startCaptcha())
noRobot[1].addEventListener("click", () => startCaptcha())
function startCaptcha() {
    nextPlace.innerHTML = FIRST
    for (let i = 0; i < 8; i++) {
        nextPlace.children[2].children[i].children[1].appendChild(loadedimages[i])
    }
}

function goodCheck(good, wrong) {
    const box = document.getElementById("box")
    let goodCount = 0
    let wrongCount = 0
    for (let i = 0; i < good.length; i++) {
        if (box.children[good[i]-1].children[0].checked) goodCount++
    }
    for (let i = 0; i < wrong.length; i++) {
        if (box.children[wrong[i]-1].children[0].checked) wrongCount++
    }
    return (goodCount + wrongCount < 4)?-1:(goodCount < 4)?goodCount:(wrongCount === 0)?4:-goodCount
}

if (nextPlace.addEventListener) nextPlace.addEventListener('click', handler, false)
else if (nextPlace.attachEvent) nextPlace.attachEvent('onclick', handler)
function handler(e) {
    if (e.target.id === "Valider") {
        const goodAnswers  = (state === 1)?[1, 2, 3, 8]:(state === 2)?[3, 5, 6, 8]:[2, 3, 4, 6]
        const wrongAnswers = (state === 1)?[4, 5, 6, 7]:(state === 2)?[1, 2, 4, 7]:[1, 5, 7, 8]
        const answers = goodCheck(goodAnswers, wrongAnswers)
        if (answers === 4) {
            nextPlace.innerHTML = (state === 1)?SECOND:(state === 2)?THIRD:FINAL
            if (state < 3) {
                for (let i = 0; i < 8; i++) {
                    nextPlace.children[2].children[i].children[1].appendChild(loadedimages[state*8+i])
                }
            }
            state++
        }
        else {
            let text = ``
            if (answers === -1){
                text = `
                    <div class="div-text">
                        <red>&#10060; Mauvaise réponse</red>, sélectionnez au moins <green>4</green> cartes &#10060;
                    </div>
                `
            }
            else {
                text = `
                    <div class="div-text">
                        <red>&#10060; Mauvaise réponse</red> <green>${Math.abs(answers)}</green> bonnes réponses &#10060;
                    </div>
                `
            }
            indice.innerHTML = text
            setTimeout(() => indice.innerHTML="", 3000)
        }
        if (state === 4) {
            indice.innerHTML = `
                <h2>Indice pour l'énigme finale</h2>
                <div class="path">
            <pre>
 <img src="../src/img/global/folder.png" class="folder-img"> Site
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
            14 <img src="../src/img/global/folder2.png" class="folder-img"> WafO
                <img src="../src/img/global/folder2.png" class="folder-img"> ????
                 <img src="../src/img/global/folder2.png" class="folder-img"> ????
                  <img src="../src/img/global/folder2.png" class="folder-img"> ????
                   <img src="../src/img/global/folder2.png" class="folder-img"> ????
                    <img src="../src/img/global/folder2.png" class="folder-img"> ????
                     <img src="../src/img/global/file.png" class="folder-img"> <img src="../src/img/global/lock.png" class="folder-img"> ????.html</pre>
        </div>
            `
        }
    }
}