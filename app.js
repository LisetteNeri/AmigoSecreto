// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos =[];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    
    if (amigo.trim() !== '') {
        listaAmigos.push(amigo);
        mostrarAmigosEnPantalla();
        document.getElementById('amigo').value = '';
    } else {
         alert("Este campo no debe estar vacio, por favor ingresa un nombre");
    }
}

/*--------------------------------------------------------------------------------*/

function mostrarAmigosEnPantalla() {
  let listaUl = document.getElementById('listaAmigos');
  
  listaUl.innerHTML = '';
  
  for (let i = 0; i < listaAmigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = listaAmigos[i];
  
    listaUl.appendChild(li);
  }
}

/*--------------------------------------------------------------------------------*/

function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    let amigoSecreto = listaAmigos[numeroAleatorio];

    let resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = '<li>Tu amigo secreto es: ' + amigoSecreto + '</li>';
}