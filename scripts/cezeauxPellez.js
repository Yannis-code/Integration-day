const switches = document.getElementById("switches")
const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")

let count = 1

switches.addEventListener("click", e => {
    if (e.target.id.includes("slider")) {
        for (let i = 0; i < switches.children.length; i++) {
            const condition1 = switches.children[i].children[0].id[6] <= count && !switches.children[i].children[0].checked
            const condition2 = switches.children[i].children[0].id[6] > count && switches.children[i].children[0].checked
            if (condition1 || condition2){
                for (let i = 0; i < switches.children.length; i++) {
                    switches.children[i].children[0].checked = false
                }
                count=1
                indice.innerHTML=`
                    <div class="result-text">
                        <red>&#10060; Mauvaise séquence &#10060;</red>
                    </div>
                `
                break
            }
        }
        if (document.getElementById(`slider${count}`).checked) {count++; indice.innerHTML=""}
        if (count == switches.children.length+1) {
            nextPlace.innerHTML = `
                <h2>Lieu suivant</h2>
                <div class="box" id="box">
                    <video controls autoplay src="../src/video/cezeauxPellez/indice.mp4" id="infoImg"></video>
                    <img src="../src/img/cezeauxPellez/indice2.png" alt="presentation.png" id="infoImg">
                </div>
            `
            indice.innerHTML = `
                <h2>Indice pour l'énigme finale</h2>
                <div class="path">
            <pre>
 <img src="../src/img/global/folder.png" class="folder-img"> Site
  <img src="../src/img/global/folder2.png" class="folder-img"> ????
   <img src="../src/img/global/folder2.png" class="folder-img"> ????
  3 <img src="../src/img/global/folder2.png" class="folder-img"> QUci
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
    }
})