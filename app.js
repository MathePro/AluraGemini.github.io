// Função para realizar uma pesquisa com base em um termo de pesquisa
function pesquisar() {
  // Seleciona o elemento de seção onde os resultados da pesquisa serão exibidos
  const section = document.getElementById("resultadosPesquisa");

  // Obtém o termo de pesquisa do campo de entrada e converte-o para minúsculas para pesquisa insensível a maiúsculas e minúsculas
  const campoPesquisa = document.getElementById("campoPesquisa").value.toLowerCase();

  // Cria um DocumentFragment para manipulação eficiente do DOM
  const fragment = document.createDocumentFragment();

  // Loop por cada item no array 'dados'
  for (const dado of dados) {
     //se o campo pesquisa estiver vazio entao nao mostre nada.
     if(campoPesquisa.trim() === ""){
      section.innerHTML = "<p> Nenhum Resultado Encontrado</p>" 
      return
    }
    // Verifica se o título do item atual (em minúsculas) inclui o termo de pesquisa
    if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.
    descricao.includes(campoPesquisa)) {
      // Cria um novo elemento 'div' para cada resultado da pesquisa
      const div = document.createElement('div');
      div.classList.add('item-resultado'); // Adiciona classe para estilo

     

      // Cria um elemento 'h2' para o título
      const h2 = document.createElement('h2');

      // Cria um elemento 'a' (link) para o título
      const a = document.createElement('a');
      a.href = dado.link; // Define a URL do link a partir do objeto 'dado'
      a.target = '_blank'; // Abre o link em uma nova aba
      a.rel = 'noopener noreferrer'; // Atributos de segurança para links externos
      a.textContent = dado.titulo; // Define o texto do título a partir do objeto 'dado'
      h2.appendChild(a); // Adiciona o link ao elemento 'h2'

      // Cria um elemento 'p' para a descrição
      const p = document.createElement('p');
      p.classList.add('descricao-meta'); // Adiciona classe para estilo
      p.textContent = dado.descricao; // Define o texto da descrição a partir do objeto 'dado'

      // Adiciona o título ('h2') e a descrição ('p') ao 'div' de resultado
      div.appendChild(h2);
      div.appendChild(p);

      // Adiciona o 'div' de resultado ao DocumentFragment para atualização eficiente do DOM posteriormente
      fragment.appendChild(div);
    }
  }

  // Limpa o conteúdo existente da seção de resultados
  section.innerHTML = "";

  // Por fim, adiciona o DocumentFragment contendo todos os resultados da pesquisa ao elemento de seção
  section.appendChild(fragment);
}