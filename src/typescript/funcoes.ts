function calculaArea(base: number, altura: number): number {
  return base * altura;
}

function somar(...numeros: number[]): void {
  //numeros.reduce()
  console.log(numeros);
}

function teste(): string | number {
  if (10 > 5) {
    return "dez maior que cinco";
  } else {
    return 5;
  }
}

const resultadoDeTeste = teste();
