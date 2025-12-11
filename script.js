// Objeto que armazena os dados do cliente
const cliente = {
  nome: document.querySelector("#nome-cliente"),
  cpf: document.querySelector("#cpf"),
  formulario: document.querySelector("#form-cliente"),
};

// Objeto que armazena os dados do endereço
const endereco = {
  cep: document.querySelector("#cep"),
  logradouro: document.querySelector("#logradouro"),
  numero: document.querySelector("#numero"),
  complemento: document.querySelector("#complemento"),
  bairro: document.querySelector("#bairro"),
  cidade: document.querySelector("#cidade"),
  uf: document.querySelector("#uf"),
};

// Função que faz a busca do CEP digitado
async function consultarCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  // Variável do tipo objeto para receber os dados do CEP do usuário
  const dadosDoCEP = {
    logradouro: resposta.logradouro,
    complemento: resposta.complemento,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    uf: resposta.uf
  };
  // return dadosDoCEP;
  inserirEndereco(dadosDoCEP);
  inserirBairro(dadosDoCEP);
  inserirCidade(dadosDoCEP);
  inserirUf(dadosDoCEP);
  inserirComplemento(dadosDoCEP);
}

// Adiciona um "ouvinte" para capturar o disparo do evento de submit do formulário
cliente.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  consultarCEP(cep.value);
});

function inserirEndereco(dadosDoCEP) {
  endereco.logradouro.value = dadosDoCEP.logradouro;
}
function inserirBairro(dadosDoCEP) {
  endereco.bairro.value = dadosDoCEP.bairro;
}
function inserirCidade(dadosDoCEP) {
  endereco.cidade.value = dadosDoCEP.cidade;
}
function inserirUf(dadosDoCEP) {
  endereco.uf.value = dadosDoCEP.uf;
}
function inserirComplemento(dadosDoCEP) {
  endereco.complemento.value = dadosDoCEP.complemento;
}

// --------------------------------------------------------------------------------------------------------


const produto = {
  quantidade: document.querySelector("#quantidade"),
  nome: document.querySelector("#nome"),
  valor: document.querySelector("#valor"),
  form: document.querySelector("#form-produto"),
  lista: []
};

produto.form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne o reload da página
  // console.log(produto.quantidade.value);
  //  console.log(produto.valor.value);
  //   console.log(produto.nome.value);

  let item = {
    quantidade: produto.quantidade.value,
     nome: produto.nome.value,
      valor: produto.valor.value,
  }
  listaProdutos(item);
  calcularPreco();
});

function listaProdutos(item){
produto.lista.push(item);
console.log(produto.lista);
}

function calcularPreco(listaProdutos){
(listaProdutos.quantidade * listaProdutos.valor)
}









// multiplicando quantidade pelo preço