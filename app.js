let amigos = []

function agregarAmigo() {
  let nombres = document.getElementById('amigo').value
  console.log(nombres)
  if (nombres === "") {
    alert('Por favor ingresa un nombre')
  } else {
    amigos.push(nombres)
  }
  console.log(amigos)
  document.getElementById('amigo').value = ""

  let lista = document.getElementById('listaAmigos')
  lista.innerHTML = ""
// Acá inicio el recorrido para poder hacer la lista con los nombres de los amigos
for (let i = 0; i < amigos.length; i++) {
  let li = document.createElement('li')
  li.textContent = amigos[i]
  lista.appendChild(li)
}
}


function sortearAmigo () {
  if (amigos.length === 0) {
    alert('Por favor inglesa los nombres de tus amigos para sortearlos')
  } else {
    let indiceDeAmigo = Math.floor(Math.random()*amigos.length)
   console.log(indiceDeAmigo)

   let resultado = document.getElementById('resultado')
    resultado.innerHTML = amigos[indiceDeAmigo]
  }
}