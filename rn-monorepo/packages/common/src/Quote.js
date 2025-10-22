// packages/common/src/Quote.js
export class Quote {
  constructor(id, author, text) {
    this.id = id;
    this.author = author;
    this.text = text;
  }
  toString() {
    return `[#${this.id}] "${this.text}" - ${this.author}`;
  }
  // Exemplo de uso de biblioteca externa como commons-lang3
  getDisplayText() {
    // Simula uma função utilitária
    return `Citação: ${this.toString().toUpperCase()}`; 
  }
}