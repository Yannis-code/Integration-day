// Réponse attendu
const REPONSE = "BIENVENUEAISIMA"

const nextPlace = document.getElementById("next-place")
const indice = document.getElementById("indice")
const textIn = document.getElementById("textIn")
const textOut = document.getElementById("textOut")
const formulaire = document.getElementById("form")

btnShort = document.getElementById("short")
btnLong = document.getElementById("long")
btnABC = document.getElementById("ABC")
const short = new Audio('../../../../../../../../../../../../../../../../../../../src/audio/short.wav');
const long = new Audio('../../../../../../../../../../../../../../../../../../../src/audio/long.wav');
const ABC = new Audio('../../../../../../../../../../../../../../../../../../../src/audio/ABC.wav');

formulaire.addEventListener("submit", e => {
    e.preventDefault();

    const reponse = formulaire.elements["reponse"];
    if (reponse.value.sansAccent().toUpperCase().replaceAll(" ","").includes(REPONSE)) {
        nextPlace.innerHTML = `
			<h2>Félicitation!!</h2>
			<div class="result-text">
				Vous avez terminé le parcours, RDV à l'entrée d'ISIMA pour découvrir votre résultat.
            </div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173.9748815852756!2d3.111380682003974!3d45.759202465570745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71c70f75dec15%3A0x3bcec5a13c4c5008!2sISIMA!5e0!3m2!1sfr!2sfr!4v1630161383083!5m2!1sfr!2sfr" class="carte" allowfullscreen="" loading="lazy"></iframe>
			Si vous jouez à Rocket League rejoignez ce serveur:

<iframe src="https://discord.com/widget?id=773438822041911336&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
			`
            indice.innerHTML = ''
    }
    else{
        indice.innerHTML=`
            <div class="result-text">
                <red>&#10060; Mauvaise réponse &#10060;</red>
            </div>
        `
		setTimeout(() => indice.innerHTML="", 3000)
    }
})

textIn.oninput = (e) => textOut.value = decodeMorse(e.target.value)

btnShort.addEventListener("click", () => {
	short.play()
	btnShort.src = "../../../../../../../../../../../../../../../../../../../src/img/global/pause.png"
	setTimeout(() => btnShort.src = "../../../../../../../../../../../../../../../../../../../src/img/global/play.png", 500)
})
btnLong.addEventListener("click", () => {
	long.play()
	btnLong.src = "../../../../../../../../../../../../../../../../../../../src/img/global/pause.png"
	setTimeout(() => btnLong.src = "../../../../../../../../../../../../../../../../../../../src/img/global/play.png", 500)
})
btnABC.addEventListener("click", () => {
	if (ABC.paused) {
		ABC.play()
		btnABC.src = "../../../../../../../../../../../../../../../../../../../src/img/global/pause.png"
}
	else{
		ABC.pause()
		btnABC.src = "../../../../../../../../../../../../../../../../../../../src/img/global/play.png"
	}
})
ABC.addEventListener("ended", () => {
	btnABC.src = "../../../../../../../../../../../../../../../../../../../src/img/global/play.png"
})

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

function decodeMorse(morseCode) {
	var ref = { 
		'.-':     'A',
		'-...':   'B',
		'-.-.':   'C',
		'-..':    'D',
		'.':      'E',
		'..-.':   'F',
		'--.':    'G',
		'....':   'H',
		'..':     'I',
		'.---':   'J',
		'-.-':    'K',
		'.-..':   'L',
		'--':     'M',
		'-.':     'N',
		'---':    'O',
		'.--.':   'P',
		'--.-':   'Q',
		'.-.':    'R',
		'...':    'S',
		'-':      'T',
		'..-':    'U',
		'...-':   'V',
		'.--':    'W',
		'-..-':   'X',
		'-.--':   'Y',
		'--..':   'Z',
		'.----':  '1',
		'..---':  '2',
		'...--':  '3',
		'....-':  '4',
		'.....':  '5',
		'-....':  '6',
		'--...':  '7',
		'---..':  '8',
		'----.':  '9',
		'-----':  '0',
		'/':		' '
	};
  
	return morseCode
		.replaceAll("…", "...")
	  .split('/')
	  .map(
		a => a
		  .split(' ')
		  .map(
			b => ref[b]
		  ).join('')
	  ).join(' ');
}