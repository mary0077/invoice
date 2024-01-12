function submitForm() {
  var formData = {
      tipo_documento: document.querySelector('input[name="tipo-documento"]:checked').id,
      numero_invoice: document.getElementById('codigo-invoice').value,
      data: document.getElementById('data').value,
      nome: document.getElementById('nome').value,
      cnpj_cpf: document.getElementById('cnpj_cpf').value,
      endereco: document.getElementById('endereco_servico').value,
      contato: document.getElementById('telefone').value,
      servico: document.getElementById('servico').value,
      email_servico: document.getElementById('email_servico').value,
      nome_prestador: document.getElementById('nome_prestador').value,
      cnpj_cpf_servico: document.getElementById('cnpj_cpf_servico').value,
      endereco_servico: document.getElementById('endereco_servico').value,
      valor: document.getElementById('valor').value,
      descricao: document.getElementById('descricao').value,
      codigo_swift: document.getElementById('codigo_swift').value,
      codigo_iban: document.getElementById('codigo_iban').value,
  };

  // Convertendo objeto para string de consulta
  var queryString = Object.keys(formData).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]);
  }).join('&');

  // Redirecionar para a página existente com os parâmetros, incluindo o tipo de documento
  window.location.href = 'invoice.html?' + queryString;
}
