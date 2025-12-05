const cliente = {
  nome: document.querySelector("#nome").value,
  cpf: document.querySelector("#cpf"),
  form: document.querySelector("#form-cliente"),
};

const endereco = {
  logradouro: document.querySelector("#logradouro"),
  cep: document.querySelector("#cep"),
  bairro: document.querySelector("#bairro"),
  numero: document.querySelector("#numero"),
  idade: document.querySelector("#cidade"),
  uf: document.querySelector("#uf"),
  cep: "06436330",
};
//manda ele ouvir quando clicar no botao
cliente.form.addEventListener('submit',(evento)=>{
    evento.preventDefault(); //impede reload da pagina
console.log(cliente.cpf)
consultaCep(cliente.nome)

});
async function consultaCep(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
};

//   const cepUsuario = {
//     logradouro: resposta.logradouro,
//     bairro: resposta.bairro,
//     cidade: resposta.localidade,
//     uf: resposta.uf,
//   };
//   console.log(cepUsuario);
// }

// function inserirDados(cepUsuario) {
//   cliente.logradouro.innerText = cepUsuario.logradouro;
//   cliente.bairro.innerText = cepUsuario.bairro;
//   cliente.cidade.innerText = cepUsuario.cidade;
// }
