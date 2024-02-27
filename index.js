const form = document.getElementById("form");
const input = document.getElementById("TextInput");
const invia = document.getElementById("invia");
const cancel = document.getElementById("cancel");

// class utente {
//   constructor(nome) {
//     this.nome = nome;
//   }
// }

// invia.addEventListener("click", function () {
//   localStorage.setItem(input.value, JSON.stringify(input.value));
// });

form.onsubmit = function (e) {
  e.preventDefault();

  const nome = input.value;
  console.log(nome);

  localStorage.setItem("nome", JSON.stringify(nome));
};

cancel.onclick = function () {
  localStorage.removeItem("nome");
};

// function mostraValoreSalavto() {
//   const valoreSalvato = localStorage.getItem("nome");
//   const elementoMostrato = document.getElementById("valore");

//   if (valoreSalvato) {
//     elementoMostrato.textContent = "Nome:" + valoreSalvato;
//   } else {
//     elementoMostrato.textContent = "Nome non salvato";
//   }
// }
// mostraValoreSalavto();

////////////////C O N T A T O R E /////////////////////////////////////////////////////////////

function updateCounter() {
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }
  counter++;
  sessionStorage.setItem("counter", counter);
  document.getElementById("contatore").textContent = counter;
}
window.onload = function () {
  updateCounter();
  setInterval(updateCounter, 1000);
};
