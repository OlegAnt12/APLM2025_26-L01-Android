// A classe Quote é o equivalente à classe de domínio Quota.java
class Quote {
  // O construtor é usado para inicializar as propriedades
  constructor(id, author, text) {
    this.id = id;
    this.author = author;
    this.text = text;
  }

  // --- MÉTODOS ---

  // Este método substitui o comportamento padrão do toString() do Java
  toString() {
    return `[Citação ID: ${this.id}] - "${this.text}" por ${this.author}`;
  }

  // Exemplo de Getters e Setters (propriedades são acessíveis diretamente em JS, 
  // mas getters/setters podem ser criados se for necessário adicionar lógica)

  getAuthor() {
    return this.author;
  }
  
  setAuthor(newAuthor) {
    this.author = newAuthor;
  }
}

// Exporta a classe para que possa ser usada (importada) por outros ficheiros
export default Quote;