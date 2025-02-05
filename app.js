alert('Ola acerto o numero ');
let numeroMaximo = 5000; 
let numeroSecreto = parseInt(math.random() * numeroMaximo + 1 );
console.log(numeroSecreto)
let chute; 
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Coloque um numero de 1 a ${numeroMaximo}`);
    // se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    break;
} else {
    if (chute > numeroSecreto){
        alert(`o numero secreto e maior que ${chute}`);  
    } else {
        alert (`O numero secreto e menor que ${chute}`);
    }
    tentativas++;

}
}

let palavraTentativa = tentativas > 1 ? 'tentativa'
alert(´Isso ai tu acertou ${numeroSecreto} com ${tentativas} ${palavraTentativa}.´);
// (tentativas > 1){
//    alert(`Isso ai tu e o cara ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai tu e o cara ${numeroSecreto} com ${tentativas} tentativa`);
//}

