function formatarCpfCnpj(campo) {
    var valor = campo.innerText.replace(/[^\d]/g, '');
    var formatado = '';

    if (valor.length === 11) { // CPF
    formatado = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (valor.length === 14) { // CNPJ
    formatado = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
    formatado = 'Formato inválido';
    }

    campo.innerText = formatado;
    }

    function formatarContato(campo) {
        var valor = campo.innerText.replace(/[^\d]/g, ''); 
        var formatado = '';

        if (valor.length === 11) { // número de celular brasileiro
            formatado = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (valor.length === 10) { // número de telefone brasileiro sem DDD
            formatado = valor.replace(/(\d{5})(\d{4})/, '$1-$2');
        } else {
            formatado = 'Formato inválido';
        }

        campo.innerText = formatado;
    }

    function submitForm() {
    
    var urlParams = new URLSearchParams(window.location.search);
    var tipoDocumento = urlParams.get('tipo_documento') || 'invoice';

    document.getElementById('numero_invoice').innerText = urlParams.get('numero_invoice') || '00000';
    document.getElementById('data').innerText = urlParams.get('data') || 'DD/MM/AAAA';
    document.getElementById('nome').innerText = urlParams.get('nome') || 'Digite Nome Completo';
    document.getElementById('cnpj_cpf').innerText = urlParams.get('cnpj_cpf') || 'CNPJ/CPF';
    document.getElementById('endereco').innerText = urlParams.get('endereco') || 'Informe o endereço';
    document.getElementById('contato').innerText = urlParams.get('contato') || 'Contato';
    document.getElementById('servico').innerText = urlParams.get('servico') || 'Serviço';
    document.getElementById('nome_prestador').innerText = urlParams.get('nome_prestador') || 'Digite Nome Completo';
    document.getElementById('cnpj_cpf_servico').innerText = urlParams.get('cnpj_cpf_servico') || 'CNPJ/CPF';
    document.getElementById('endereco_servico').innerText = urlParams.get('endereco_servico') || 'Informe o Endereço';
    document.getElementById('email_servico').innerText = urlParams.get('email_servico') || 'Email';
    document.getElementById('descricao').innerText = urlParams.get('descricao') || 'Descrição do serviço';
    document.getElementById('valor').innerText = 'R$' + (urlParams.get('valor') || '0.00');
    document.getElementById('codigo_swift').innerText = urlParams.get('codigo_swift') || '00000';
    document.getElementById('codigo_iban').innerText = urlParams.get('codigo_iban') || '00000';

    var dataParam = urlParams.get('data') || 'DD/MM/AAAA';

    var dataFormatada = new Date(dataParam).toLocaleDateString('pt-BR');

    document.getElementById('data').innerText = dataFormatada;

    var valorParam = parseFloat(urlParams.get('valor')) || 0.00;

    var valorFormatado = valorParam.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('valor').innerText = valorFormatado;

    formatarCpfCnpj(document.getElementById('cnpj_cpf'));
    formatarCpfCnpj(document.getElementById('cnpj_cpf_servico'));

    formatarContato(document.getElementById('contato'));

    document.getElementById('tipo-documento').innerText = tipoDocumento;

    window.print();
    
    }

    submitForm();
