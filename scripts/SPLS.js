// Réponse attendu
const REPONSE = "1993"

const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const formulaire = document.getElementById("form")
const reponse = document.getElementById("reponse")

formulaire.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.id.includes("numpad") && e.target.id !== "numpadX" && e.target.id !== "numpadV") {
        reponse.innerHTML += e.target.innerHTML
    }
    else if (e.target.id === "numpadX") {
        reponse.innerHTML = ""
    }
    else if (e.target.id === "numpadV") {
        if (reponse.innerHTML.replaceAll(" ","").includes(REPONSE)){
            nextPlace.innerHTML = `
                <h2>Lieu suivant</h2>
                <audio autoplay controls><source src="../src/audio/saxo.mp3#t=00:00:40"></audio>
                <div class="box" id="box">
                    <img src="../src/img/SPLS/indice2.png" alt="presentation.png" id="infoImg">
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
             <img src="../src/img/global/folder2.png" class="folder-img"> ????
              <img src="../src/img/global/folder2.png" class="folder-img"> ????
               <img src="../src/img/global/folder2.png" class="folder-img"> ????
                <img src="../src/img/global/folder2.png" class="folder-img"> ????
                 <img src="../src/img/global/folder2.png" class="folder-img"> ????
                  <img src="../src/img/global/folder2.png" class="folder-img"> ????
                   <img src="../src/img/global/folder2.png" class="folder-img"> ????
                 19 <img src="../src/img/global/folder2.png" class="folder-img"> fwsE
                     <img src="../src/img/global/file.png" class="folder-img"> <img src="../src/img/global/lock.png" class="folder-img"> ????.html</pre>
            </div>
            `
        }
        else{
            reponse.innerHTML = ""
            indice.innerHTML=`
                <div class="result-text">
                    <red>&#10060; Mauvaise réponse &#10060;</red>
                </div>
            `
            setTimeout(() => indice.innerHTML="", 3000)
        }
    }
})