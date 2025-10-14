// run.js
// Importa a classe Quote que criámos em src/Quote.js
import Quote from './src/Quote.js'; 

console.log("Aplicação Quota em execução (Script Node.js)");

// 1. Instanciar a classe Quote (substitui 'Quota q = new Quota()')
// No JS, passamos os valores no construtor
const q = new Quote(
    1, // ID
    "Joao Costa", // Autor
    "Deus é vida." // Texto
);

// 2. Imprimir o objeto (chama implicitamente o método toString() que definimos na classe)
console.log(q); 

// Adicionalmente, podemos chamar o método toString explicitamente:
console.log(`Resultado do toString(): ${q.toString()}`); 

// Exemplo de uso de um setter
q.setAuthor("Fernando Pessoa");
console.log(`Autor alterado: ${q.getAuthor()}`);