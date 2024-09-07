// console.log(dado[0]);
// console.log(dados[0].descricao);
// console.log(dados);

// let section = document.getElementById("resultados-pesquisa");
// console.log(section);

//Inserindo um HTML com JS
// section.innerHTML = `
// <div class="item-resultado">
// 	<h2><a href="https://www.youtube.com/channel/UCuVIWETFdxzwlHEHMbhm2_w" target="_blank">${dados[0].titulo}</a></h2>
// 	<p class="descricao-meta">${dados[0].descricao}</p>
// 	<a href="${dados[0].link}" target="_blank">Mais informações!</a>
// </div>
// `;

// listado todos de uma vez
// for (let dado of dados) {
// 	section.innerHTML += `
// 	<div class="item-resultado">
// 		<h2><a href="https://www.youtube.com/channel/UCuVIWETFdxzwlHEHMbhm2_w" target="_blank">${dado.titulo}</a></h2>
// 		<p class="descricao-meta">${dado.descricao}</p>
// 		<a href="${dado.link}" target="_blank">Mais informações!</a>
// 	</div>
// 	`;	
// }

// --------------------------------------------------------------------------------------------------------------------
// Melhorando o código e ganhando boas praticas e técnicas
// let section = document.getElementById("resultados-pesquisa");

// let resultados = "";

// for (let dado of dados) {
// 	resultados += `
// 	<div class="item-resultado">
// 		<h2><a href="https://www.youtube.com/channel/UCuVIWETFdxzwlHEHMbhm2_w" target="_blank">${dado.titulo}</a></h2>
// 		<p class="descricao-meta">${dado.descricao}</p>
// 		<a href="${dado.link}" target="_blank">Mais informações!</a>
// 	</div>
// 	`;	
// }

// section.innerHTML = resultados;

// --------------------------------------------------------------------------------------------------------------------
// Adicionando a função de pesquisar + Documentando o código:

function pesquisar() {
  // Função para realizar uma pesquisa e exibir os resultados em uma seção HTML.
  console.log("Hello Word!"); // Mensagem de depuração

  // Seleciona a seção onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  // if (campoPesquisa == "") {} | Ou código a baixo, o resultado é a mesma coisa!
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrato! O campo foi enviado vazio.</p>";
    return;
  }

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar o HTML dos resultados.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // console.log(dado.titulo.includes(campoPesquisa));
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //Cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2><a href="https://www.youtube.com/channel/UCuVIWETFdxzwlHEHMbhm2_w" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações!</a>
        </div>
      `;  
    }
  }

  // o ninal de exclamação significa se o resultados não existir
  // Mesma coisa que isso: if (resultados == "") {}
  if (!resultados) {
    resultados = "<p>Nada foi encontrato!</p>";
  }

  // Insere o HTML dos resultados na seção.
  section.innerHTML = resultados;
}
