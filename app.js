// Função para realizar a pesquisa
function pesquisar() {

    // Variável para armazenar o HTML dos resultados
    let resultados = "";
  
    // Loop para iterar sobre os dados da pesquisa
    for (let dado of dados) {
      // Constrói o HTML de cada item de resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank" rel="noopener noreferrer"> ${dado.titulo} </a>
          </h2>
          <p class="descricao-meta"> ${dado.descricao} </p>
          <a href=${dado.link} target="_blank" rel="noopener noreferrer"> Exemplo </a>
        </div>
      `;
    }
  
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Atualiza o conteúdo da seção com o HTML dos resultados
    section.innerHTML = resultados;
  }