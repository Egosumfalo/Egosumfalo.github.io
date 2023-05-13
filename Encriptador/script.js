const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text-msg');
const copyButton = document.getElementById('copy-button');
const convertButton = document.getElementById('convert-button');
const encryptRadio = document.getElementById('encrypt-radio');
const decryptRadio = document.getElementById('decrypt-radio');
let outputtitle = document.getElementById('output-title');
let outputhint = document.getElementById('output-hint');
let imgoutput = document.getElementById('img-output');

function encrypt(text) {
  return text.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

function decrypt(text) {
  return text.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}

function convertText() {
  const text = inputText.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let result = '';

  if(text.length == 0){
    alert('Ingresa alguna palabra o frase para ejecutar el proceso')
  } else{

    if (encryptRadio.checked) {
      result = encrypt(text);
      outputtitle.textContent = 'Texto Encriptado con Éxito';
      imgoutput.src = "img/Encriptar.png"
    } else {
      result = decrypt(text);
      outputtitle.textContent = 'Texto Desencriptado con Éxito';
      imgoutput.src = "img/Desencriptar.png"
    }

    inputText.value = result;
    //outputText.value = result;
    outputhint.textContent = ''
    

    if (result) {
      copyButton.disabled = false;
    } else {
      copyButton.disabled = true;
    }
  }
}

function copyToClipboard() {
  inputText.select();
  //outputText.select();
  document.execCommand('copy');
}

convertButton.addEventListener('click', convertText);
copyButton.addEventListener('click', copyToClipboard);
