class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
      console.log(`O atacou ${this.tipo} usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const meuHeroi = new Heroi('Gandalf', 1000, 'mago');
  meuHeroi.atacar(); // Saída: O mago usou magia
  
  const outroHeroi = new Heroi('Conan', 40, 'guerreiro');
  outroHeroi.atacar(); // Saída: O guerreiro usou espada
  