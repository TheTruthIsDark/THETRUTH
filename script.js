function verificar(){


let resposta = document
.getElementById("codigo")
.value
.toUpperCase()
.trim();



let resultado = document
.getElementById("resultado");



if(
resposta === "ENTRE DE ESGOTO" ||
resposta === "ENTREDE ESGOTO"
){


resultado.innerHTML =

`
✅ Mensagem decodificada.

<br><br>

"ENTRE DE ESGOTO"

<br><br>

Pista encontrada:

Existe uma passagem escondida
pela rede de esgoto.

Daniel utilizou essa entrada
para acessar uma área subterrânea.
`;



}


else{


resultado.innerHTML =

`
❌ Código incorreto.

A mensagem parece seguir
o padrão:

A=1 B=2 C=3...
`;

}



}