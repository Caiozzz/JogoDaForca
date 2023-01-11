// Código inicial do 'forca.js'

const telaCanvas = document.querySelector('#forca');
const pincel = telaCanvas.getContext('2d');

let palavras = ['ALURA', 'ORACLE', 'FORCA', 'DESAFIO', 'LOGICA', 'PROGRAMA', 'PESQUISA'];
let palavraSecreta = sorteiaPalavra();

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';
let letras = [];

let chances = 7;


function sorteiaPalavra() {
   let palavra = palavras[Math.floor(Math.random() * palavras.length)];
   return palavra;
}

function adicionaErro(){
   chances -= 1;
	desenhaForca();
}


function iniciarJogo() {
	document.querySelector('.botoes-home').style.display = "none";
	document.querySelector('.forca').style.display = "initial";
	
	desenhaBase();
	desenhaTracos();
	
	console.log(palavraSecreta);

	document.onkeydown = (evento) => {
		let letra = evento.key.toUpperCase();
		if (!letras.includes(letra) && verificarLetra(letra)) {
			if (palavraSecreta.includes(letra)) {
				for (let i = 0; i < palavraSecreta.length; i++){
					if (palavraSecreta[i] === letra){
						escreverLetraCorreta(i);
					}
				}
			} else {
				adicionaErro();
				escreverLetraIncorreta(letra, chances);
			}
		}
	};
}

//Capturar a tecla digitada no teclado
// Verificar se é uma letra

function verificarLetra(key) {
   let estado = false;
   if(alfabeto.includes(key) ){
      estado = true;
      letras.push(key);
      return estado;
   }
   else{
      return estado;
   }
}

function resetarJogo(){
	palavraSecreta = sorteiaPalavra();
	pincel.clearRect(0, 0, 1200, 800);
	letras = [];
	chances = 7;
}

function iniciarNovoJogo() {
	resetarJogo();

	iniciarJogo();
}