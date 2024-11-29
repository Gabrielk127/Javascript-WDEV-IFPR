function somaDivisores(X) {
  let soma = 0;
  for (let i = 1; i < X; i++) {
    if (X % i === 0) soma += i;
  }
  return soma;
}

function distanciaEuclidiana(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function contarPalavras(frase) {
  const palavras = frase
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ");
  const contagem = {};
  palavras.forEach(
    (palavra) => (contagem[palavra] = (contagem[palavra] || 0) + 1)
  );
  return contagem;
}

function dimensaoMatriz(entrada) {
  const linhas = entrada.split(";");
  const colunas = linhas[0].split(" ").length;
  return `${linhas.length} x ${colunas}`;
}

function fibonacci(N) {
  const sequencia = [];
  for (let i = 0; i < N; i++) {
    if (i === 0) sequencia.push(0);
    else if (i === 1) sequencia.push(1);
    else sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }
  return sequencia;
}

function mostrarSomaDivisores() {
  const X = parseInt(document.getElementById("numDivisores").value);
  document.getElementById("resultadoDivisores").textContent = somaDivisores(X);
}

function mostrarDistancia() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  document.getElementById("resultadoDistancia").textContent =
    distanciaEuclidiana(x1, y1, x2, y2);
}

function mostrarContagem() {
  const frase = document.getElementById("frase").value;
  const contagem = contarPalavras(frase);
  document.getElementById("resultadoContagem").textContent =
    JSON.stringify(contagem);
}

function mostrarDimensao() {
  const matriz = document.getElementById("matriz").value;
  document.getElementById("resultadoDimensao").textContent =
    dimensaoMatriz(matriz);
}

function mostrarFibonacci() {
  const N = parseInt(document.getElementById("numFibonacci").value);
  document.getElementById("resultadoFibonacci").textContent =
    fibonacci(N).join(", ");
}
