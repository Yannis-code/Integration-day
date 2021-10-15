// Réponse attendu
const path_rep = "next"
const file_rep = "next.html"

const boxCode = document.getElementById("box-code")
const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const question = document.getElementById("question")
const rngOutput = document.getElementById("rng")
const codeResult = document.getElementById("code-result")
const formulaire = document.getElementById("form")

const max = 20
const min = 10

const rng = Math.floor(Math.random() * (max - min + 1)) + min;

question.innerHTML = `Complètez ce code qui calcul la factorielle des ${rng} premiers entiers naturels (= ${rng}!)`
rngOutput.innerHTML = rng

formulaire.addEventListener("submit", e => {
    e.preventDefault();

    const init = formulaire.elements["init"];
    const calcul = formulaire.elements["calcul"];

    if (init.value === "1" && calcul.value === "res * i") {
        codeResult.innerHTML+=`
            <green>${fact(1, rng)}</green></br>
            `
        nextPlace.innerHTML = `
            <h2>Lieu suivant</h2>
            <div class="box" id="box">
                <video controls autoplay src="../src/video/chateauDEau/indice.mp4"></video>
                <img src="../src/img/chateauDEau/indice2.png" alt="presentation.png" id="infoImg">
            </div>
			`
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
          12 <img src="../src/img/global/folder2.png" class="folder-img"> RsXX
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
        let res = 0
        if (calcul.value === "res * i"){
            res = (init.value === "-1")?fact(-1, rng):0
        }
        else if (calcul.value === "res + i"){
            res = sum(Number(init.value), rng)
        }
        else if (calcul.value === "res + 1"){
            res = (init.value === "-1")?rng-1:(init.value === "0")?rng:rng+1
        }
        else{
            res = rng
        }
        codeResult.innerHTML += `
            <red>${res}</red></br>
            `
		setTimeout(() => indice.innerHTML="", 3000)
    }
})

function fact (start, nb) {
    let res = start
    for (let i = 2; i <= nb; i++) {
        res = res * i
    }
    return res
}

function sum (start, nb) {
    let res = start
    for (let i = 2; i <= nb; i++) {
        res = res + i
    }
    return res
}