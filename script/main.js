function submitForm() {
  console.log("teste");
  //   var formData = {
  //     numero_invoice: document.getElementById("numero_invoice").value,
  //     data: document.getElementById("data").value,
  //     nome: document.getElementById("nome").value,
  //     cnpj_cpf: document.getElementById("cnpj_cpf").value,
  //     endereco: document.getElementById("endereco").value,
  //     cidade_estado_pais: document.getElementById("cidade_estado_pais").value,
  //     contato: document.getElementById("contato").value,
  //     servico: document.getElementById("servico").value,
  //     email_servico: document.getElementById("email_servico").value,
  //     nome_prestador: document.getElementById("nome_prestador").value,
  //     cnpj_cpf_servico: document.getElementById("cnpj_cpf_servico").value,
  //     endereco_servico: document.getElementById("endereco_servico").value,
  //     cidade_pais_servico: document.getElementById("cidade_pais_servico").value,
  //     //ERROS AQUI
  //     valor: document.getElementById("valor").value,
  //     descricao: document.getElementById("descricao").value,
  //     codigo_swift: document.getElementById("codigo_swift").value,
  //     codigo_iban: document.getElementById("codigo_iban").value,
  //   };
  //   // Convertendo objeto para string de consulta
  //   var queryString = Object.keys(formData)
  //     .map(function (key) {
  //       return encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]);
  //     })
  //     .join("&");
  //   // Redirecionar para a página existente com os parâmetros
  //   window.location.href = "invoice.html?" + queryString;
}

const button = document.getElementById("submit");
button.addEventListener("click", submitForm);
