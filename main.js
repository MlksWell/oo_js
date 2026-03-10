class Veiculo {
constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

info() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
}
}

class Carro extends Veiculo {
constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
}

detalhes() {
    return `Carro: ${this.info()} - ${this.portas} portas`;
}
}

class Moto extends Veiculo {
constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano);
    this.cilindradas = cilindradas;
}

detalhes() {
    return `Moto: ${this.info()} - ${this.cilindradas}cc`;
}
}

const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const carro2 = new Carro("Honda", "Civic", 2023, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

console.log(carro1.detalhes());
console.log(carro2.detalhes());
console.log(moto1.detalhes());
