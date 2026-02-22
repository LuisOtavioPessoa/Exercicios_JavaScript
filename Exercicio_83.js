// Exercício 83: Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos.

const tempo = {
    horas: 2,
    minutos: 30,
    segundos: 50,

    tempoParaSegundos(){
        const horasEmSegundos = this.horas * 3600;
        const minutosEmSegundos = this.minutos * 60;
        const tempoEmSegundos = this.segundos + horasEmSegundos + minutosEmSegundos;

        return `${this.horas}H:${this.minutos}M:${this.segundos}S convertidos em segundos: ${tempoEmSegundos}`;
    }
}

console.log(tempo.tempoParaSegundos());