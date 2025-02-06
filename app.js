// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // Obtener el nombre del amigo
  let amigo = document.getElementById("amigo").value;
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  } else {
    // Agregar el amigo al vector
    amigos.push(amigo);
    // Mostrar la lista de amigos y limpiar el campo de texto
    limpiarcampo();
    mostrarListaAmigos();
  }

  console.log(amigos);
}

function limpiarcampo() {
  // Limpiar el campo de texto y enfocarlo en el Input
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

function mostrarListaAmigos() {
  //obtener el elemento de la lista de amigos
  let listaAmigos = document.getElementById("listaAmigos");
  // Limpiar la lista de amigos
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento de lista
    let li = document.createElement("li");
    // Agregar el nombre del amigo al elemento de lista
    li.textContent = amigos[i];
    console.log("Amigo:", amigos[i]);

    // Agregar el elemento a la lista
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, agregue al menos un amigo.");
    return;
  } else if (amigos.length === 1) {
    alert(
      "Por favor, para realizar el sorteo se requiere como mínimo dos amigos."
    );
    return;
  } else {
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log("Índice aleatorio:", indiceAleatorio);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    console.log("Amigo sorteado:", amigoSorteado);
    // Limpiar la lista de amigos
    limpiarListaAmigos();
    // Mostrar el resultado
    document.getElementById(
      "resultado"
    ).innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    console.log("El amigo sorteado es:", amigoSorteado);
  }
}
//limpiar lista de amigos en pantalla
function limpiarListaAmigos() {
  document.getElementById("listaAmigos").innerHTML = "";
}
