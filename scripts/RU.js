// Réponse attendu
const REPONSE = "AMPHI"

const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const formulaire = document.getElementById("form")


formulaire.addEventListener("submit", e => {
    e.preventDefault();

    const reponse = formulaire.elements["reponse"];
    if (reponse.value.sansAccent().toUpperCase().replaceAll(" ","").includes(REPONSE.replaceAll(" ",""))){
        nextPlace.innerHTML = `
			<h2>Lieu suivant</h2>
			<input type="text" value="45.7607043,3.1147672" class="indice">
                <button onclick="CopyClassText()" class="button">Copier</button>
            </br>
            <div class="box" id="box">
                <img src="../src/img/RU/indice2.png" alt="presentation.png" id="infoImg">
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
               17 <img src="../src/img/global/folder2.png" class="folder-img"> ZkYP
                   <img src="../src/img/global/folder2.png" class="folder-img"> ????
                    <img src="../src/img/global/folder2.png" class="folder-img"> ????
                     <img src="../src/img/global/file.png" class="folder-img"> <img src="../src/img/global/lock.png" class="folder-img"> ????.html</pre>
        </div>
			`
    }
    else {
        indice.innerHTML=`
            <div class="result-text">
                <red>&#10060; Mauvaise réponse &#10060;</red>
            </div>
        `
		setTimeout(() => indice.innerHTML="", 3000)
    }
})

function CopyClassText(){
    var textToCopy = document.querySelector(".indice");

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        textToCopy.contentEditable = true;
        textToCopy.readOnly = true;

        var range = document.createRange();
        range.selectNodeContents(textToCopy);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

    }

    else {
        textToCopy.select();
    }

    document.execCommand("copy");
}

String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
    
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
    
    return str;
}