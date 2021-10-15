const NEXT = "Banque"
let count = 0

const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const click = document.getElementById("click")
const fakeClick = document.getElementById("fakeClick")
const progressBar = document.getElementById("progressBar")
const bubble1 = document.getElementById("bubble1")
const bubble2 = document.getElementById("bubble2")
const bubble3 = document.getElementById("bubble3")
const bubble4 = document.getElementById("bubble4")
const bubble5 = document.getElementById("bubble5")
const bubble6 = document.getElementById("bubble6")
const bubble7 = document.getElementById("bubble7")

btn1.addEventListener("click", () => (count === 0)?Success():Fail())
btn2.addEventListener("click", () => (count === 1)?Success():Fail())
btn3.addEventListener("click", () => (count === 2)?Success():Fail())
click.addEventListener("click", () => (count === 3)?Success():Fail())
btn4.addEventListener("click", () => (count === 4)?Success():Fail())
btn5.addEventListener("click", () => (count === 5)?Success():Fail())
btn6.addEventListener("click", () => (count === 6)?Success():Fail())
fakeClick.addEventListener("click", () => Fail())

function Success() {
    count++
    for (let i = 0; i < count; i++) {
        progressBar.children[i].style.backgroundColor = "rgb(71, 190, 71)"
    }
    if (count === 7) {
        nextPlace.innerHTML = `
			<h2>Lieu suivant</h2>
            <div class="box" id="box">
                <video controls autoplay src="../src/video/BDE/indice.mp4" id="infoImg"></video>
                <img src="../src/img/BDE/indice2.png" alt="presentation.png" id="infoImg">
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
         11 <img src="../src/img/global/folder2.png" class="folder-img"> MDmR
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
}
function Fail() {
    progressBar.children[count].style.backgroundColor = "rgb(255, 61, 61)"
    indice.innerHTML=`
        <div class="result-text">
            <red>&#10060; Mauvaise réponse &#10060;</red>
        </div>
    `
    setTimeout(() => {
        for (let i = 0; i < count+1; i++) progressBar.children[i].style.backgroundColor = "rgb(31, 31, 31)"
        indice.innerHTML = ""
        count=0
    }, 1500)
}