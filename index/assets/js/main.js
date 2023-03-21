const peso = document.querySelector(".form>input.peso");
const altura = document.querySelector(".form>input.altura");
const calculo = document.querySelector(".form button");
const resultado = document.querySelector(".resultado");
const limpa = document.querySelector(".clear button");

calculo.addEventListener("click", () => {
  if (peso.value == "" || altura.value == "") {
    resultado.innerHTML = `<p> Os campos não podem ficar vazios<p/>`;
  } else if (peso.value == 0 || altura.value == 0) {
    resultado.innerHTML = `<p> Os campos não podem ficar zerados<p/>`;
  } else if (peso.value != 0 && altura.value != 0) {
    let resultados;
    let alturaQuadrado = altura.value * altura.value;
    resultados = peso.value / alturaQuadrado;

    if (resultados <= 18.5) {
      let imc = "Abaixo do peso";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    } else if (resultados >= 18.51 && resultados <= 24.9) {
      let imc = "Peso normal";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    } else if (resultados >= 24.91 && resultados <= 29.9) {
      let imc = "Sobrepeso";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    } else if (resultados >= 29.91 && resultados <= 34.9) {
      let imc = "Obesidade grau 1";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    } else if (resultados >= 34.91 && resultados <= 39.9) {
      let imc = "Obesidade grau 2";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    } else if (resultados >= 39.91) {
      let imc = "Obesidade grau 3";
      resultado.innerHTML = `<p>O seu resultado deu ${resultados.toFixed(
        2
      )}, voce esta com ${imc}</p>`;
    }
  }
});
limpa.addEventListener("click", () => {
  resultado.innerHTML = "";
  peso.value = "";
  altura.value = "";
});
