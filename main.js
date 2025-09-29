const numeroSenha  = document.querySelector('.parametro-senha__texto')
let tamanhoSenha= 12;
numeroSenha= tamanhoSenha

const botoes = document.querySelector('.parametro-senha__botão')

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
      if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha~1
        tamanhoSenha--;
      }
      numeroSenha.textContent = tamanhoSenha;
    }
    function aumentaTamanho()
    if (tamanhoSenha < 20){
        // tamanhosenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasMinusculas = 'abcdefghigklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '!@%*?';

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }

    let senha ='';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() *alfabeto.length;
        numeroAleatorio = Math.floor (numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio]
    }
    campoSenha.value=senha;
}