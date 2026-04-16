class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempoETroco() {
        if (this.valor < 1) {
            return "Valor insuficiente";
        }

        let tempo = 0;
        let troco = 0;

        if (this.valor >= 3) {
            tempo = 120;
            troco = this.valor - 3;
        } else if (this.valor >= 1.75) {
            tempo = 60;
            troco = this.valor - 1.75;
        } else {
            tempo = 30;
            troco = this.valor - 1;
        }

        return `Tempo: ${tempo} minutos | Troco: R$ ${troco.toFixed(2)}`;
    }
}

function calcular() {
    const valorInput = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valorInput)) {
        resultado.innerText = "Digite um valor válido!";
        return;
    }

    const parquimetro = new Parquimetro(valorInput);
    resultado.innerText = parquimetro.calcularTempoETroco();
}