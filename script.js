//CÓDIGO DO MODAL
leb bntAjuda = document.querySelector(".botao-ajuda");
let bntFechar =  document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");
btnAjuda.addEventListener("click" , abreModal);
btnFechar.addEventListener("click" ,fechaModal);
function abreModal(){
  modal.style.display="block",
}
function fechaModal() {
   modal.style.display="none",
}
//TAMANHO DE FONTES
let tamanhoFonteatual= 16;
const valoradicionado=2;
const valorsubtraido=2;
let btnAumentaFonte = document .getElementByld("btnAumentaTexto");
let btnAumentaFonte = document .getElementByld("btnDiminuiTexto");
btnAumentaTexto.addEventListenerr("click", aumentaFonte);
btnDiminuiTexto.addEventListenerr("click", diminuiFonte);
function aumentaFonte(){
tamanhoFonteAtual=tamanhoFonteAtual + valorAdicionado;
  document. documentElement.style.fontSize= '$(tamanhoFonteAtual)px';
}
// LEITURA DE TELA
let lendo = false;
let btnLeitura = document.querySelector(".botao-leitura");
btnLeitura.addEventListener("click", lerEmVozAlta);
function lerEmVozAlta() {
    //se ja esta lendo
    if(lendo == true)
}
// se estiver pausado
if ( speechSynthesis.paused == true) {
    // continua de onde parou
    speechSynthesis.resume();
}
else{
    //speechSynthesis.pause();
}
return;
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");


btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);
