// ==============================
// DADOS PRINCIPAIS DA CONTA
// ==============================


// Cria uma constante para armazenar o número da conta.
// "const" significa que esse valor não poderá ser alterado depois.
const numeroConta = 1;


// Cria uma variável para armazenar o nome do titular.
// "let" permite que o valor seja alterado futuramente.
let titular = "Marcos";


// Cria uma variável que guarda o saldo atual da conta.
let saldo = 10000;


// Cria uma variável booleana para controlar se a conta está ativa.
// true = conta ativa
// false = conta bloqueada
let contaAtiva = true;


// Variável que receberá o texto do status da conta.
let statusConta;


// Cria um array vazio para armazenar o histórico de operações.
// Exemplo:
// ["Depósito: R$ 500", "Saque: R$ 200"]
const historico = [];


// ==============================
// CONEXÃO COM ELEMENTOS DO HTML
// ==============================


// document.querySelector() busca um elemento dentro do HTML.
// O símbolo "#" significa que estamos buscando pelo ID do elemento.

// Busca o elemento que possui id="titular".
const elTitular = document.querySelector(`#titular`);


// Busca o elemento que possui id="saldo".
const elSaldo = document.querySelector(`#saldo`);


// Busca o elemento que possui id="mensagem".
const elmensagem = document.querySelector(`#mensagem`);


// Busca o botão de depósito pelo seu ID.
const btnDepositar = document.querySelector(`#btn-depositar`);


// Busca o botão de saque pelo seu ID.
const btnSacar = document.querySelector(`#btn-sacar`);


// Busca o botão de bloquear conta pelo seu ID.
const btnBloquear = document.querySelector(`#btn-bloquear`);


// Busca o botão responsável por limpar o histórico.
const btnLimpar = document.querySelector(`#btn-limpar`);


// Busca o botão usado para alterar o titular da conta.
const btnalterar = document.querySelector(`#btn-alterar`);


// Busca o elemento onde será exibido o total de depósitos.
const elTotalDepositos = document.querySelector('#total-depositos');


// Busca o elemento onde será exibido o total de saques.
const elTotalSaques = document.querySelector('#total-saques');


// Busca o elemento onde será exibido o total de transações.
const elTotalTransacoes = document.querySelector('#total-transacoes');


// Busca a lista HTML onde aparecerá o histórico.
const elListaHistorico = document.querySelector('#lista-historico');


// Busca o campo de entrada onde será digitado o novo titular.
const inputTitular = document.querySelector('#titular-alterar');


// Busca o elemento que mostra o status da conta.
const elStatusConta = document.querySelector('#status-conta');



// ==============================
// EVENTO DO BOTÃO DEPOSITAR
// ==============================


// addEventListener() adiciona uma ação para um evento.
// Neste caso:
// quando o botão for clicado, executa uma função.

btnDepositar.addEventListener('click', () => {


    // Busca o campo onde o usuário digita o valor.
    const campValor = document.querySelector(`#campo-valor`);


    // Pega o valor digitado pelo usuário.
    // Como o input retorna texto, Number() transforma em número.
    const valor = Number(campValor.value);


    // Chama a função depositar passando o valor informado.
    depositar(valor);

});



// ==============================
// EVENTO DO BOTÃO SACAR
// ==============================


btnSacar.addEventListener(`click`, () => {


    // Busca novamente o campo de valor.
    const campValor = document.querySelector(`#campo-valor`);


    // Converte o texto digitado em número.
    const valor = Number(campValor.value);


    // Executa a função sacar enviando o valor.
    sacar(valor);


});



// ==============================
// EVENTO DO BOTÃO BLOQUEAR
// ==============================


// Aqui não usamos uma função anônima.
// Quando clicar no botão,
// a função bloquearConta será executada diretamente.

btnBloquear.addEventListener('click', bloquearConta);

// ==========================================
// FUNÇÃO PARA MOSTRAR O EXTRATO DA CONTA
// ==========================================


// Cria uma função chamada verExtrato.
// Essa função será responsável por mostrar:
// número da conta, titular, saldo, status e histórico.
function verExtrato() {


    // Verifica se a variável contaAtiva possui valor true.
    // Se for true, significa que a conta está ativa.
    if (contaAtiva) {


        // Guarda o texto "Ativa" dentro da variável statusConta.
        statusConta = "Ativa";


    } else {


        // Caso contaAtiva seja false,
        // o status recebe "Bloqueado".
        statusConta = "Bloqueado";


    }


    // Mostra no console o nome do banco.
    console.log("======Banco InovaBank===== ");


    // Mostra o número da conta.
    // ${numeroConta} substitui pelo valor da variável.
    console.log(`Conta: ${numeroConta}`);


    // Mostra o nome do titular da conta.
    console.log(`Titular: ${titular}`);


    // Mostra o saldo da conta.

    // toFixed(2) limita o número para duas casas decimais.
    // Exemplo:
    // 10000 vira 10000.00
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`);


    // Mostra o status atual da conta.
    console.log(`Status: ${statusConta}`);



    // ======================================
    // MOSTRANDO AS ÚLTIMAS TRANSAÇÕES
    // ======================================


    // Cria um laço de repetição for.

    // let i = 1:
    // começa a contagem no número 1.

    // i < 6:
    // executa enquanto i for menor que 6.

    // i++:
    // aumenta 1 a cada repetição.

    // Resultado:
    // executa 5 vezes:
    // 1, 2, 3, 4 e 5.
    for (let i = 1; i < 6; i++) {


        // Calcula qual posição do histórico será exibida.

        // historico.length informa a quantidade de itens.

        // Exemplo:
        // histórico possui 5 itens.
        // length = 5

        // Na primeira repetição:
        // 5 - 1 = posição 4
        const indiceAtual = historico.length - i;



        // Exibe o número da transação e o conteúdo.

        // historico[indiceAtual]
        // acessa uma posição específica do array.
        console.log(`${[i]}. ${historico[indiceAtual]}`);


    }

}



// ==========================================
// FUNÇÃO PARA REALIZAR DEPÓSITOS
// ==========================================


// Cria uma função chamada depositar.

// Recebe um parâmetro chamado valor.

// Esse valor será o dinheiro depositado.
function depositar(valor) {



    // Verifica se o valor informado é maior que zero.

    // Não permite depósitos negativos ou iguais a zero.
    if (valor > 0) {



        // Soma o valor recebido ao saldo atual.

        // Forma completa:
        // saldo = saldo + valor

        // Exemplo:
        // saldo = 10000
        // valor = 500
        // resultado = 10500
        saldo = saldo + valor;



        // Mostra o novo saldo no console.

        // toFixed(2) deixa com duas casas decimais.
        console.log(`Novo saldo:R$ ${saldo.toFixed(2)}`);



        // Chama a função atualizarextrato.

        // Envia uma mensagem contendo:
        // valor depositado
        // saldo atualizado

        // Essa informação será guardada no histórico.
        atualizarextrato(
            `Depósito: R$ ${valor} | Saldo: R$ ${saldo}`
        );



        // Atualiza o valor do saldo mostrado na página HTML.
        atualizarSaldo(saldo);



        // Mostra uma mensagem para o usuário.

        // Primeiro parâmetro:
        // texto da mensagem.

        // Segundo parâmetro:
        // tipo da mensagem.
        // "sucesso" aplica estilo de sucesso.
        exibirMensagem(
            `Deposito de R$ ${valor} realizado com sucesso`,
            `sucesso`
        );



        // Atualiza os números do resumo.

        // Conta quantos depósitos,
        // saques e transações existem.
        verResumo();



    } else {



        // Executado quando o valor for inválido.

        // Exemplo:
        // depositar(-100)
        exibirMensagem(
            `\nDeposito no Valor de R$ ${valor} realizado com erro`
        );


    }

}



// ==========================================
// FUNÇÃO PARA REALIZAR SAQUES
// ==========================================


// Cria a função sacar.

// Recebe o valor que será retirado da conta.
function sacar(valor) {



    // Verifica duas condições:

    // 1 - valor precisa ser maior que zero.

    // 2 - valor precisa ser menor ou igual ao saldo disponível.

    // O operador && significa "E".

    // As duas condições precisam ser verdadeiras.
    if (valor > 0 && valor <= saldo) {



        // Retira o valor do saldo.

        // Forma completa:
        // saldo = saldo - valor

        saldo -= valor;



        // Adiciona a operação no histórico.

        // Guarda:
        // valor sacado
        // saldo restante
        atualizarextrato(
            `Saque: R$ ${valor} | Saldo: R$ ${saldo}`
        );



        // Atualiza o saldo exibido na tela.
        atualizarSaldo(saldo);



        // Mostra mensagem de sucesso.
        exibirMensagem(
            `Saque de R$ ${valor} realizado com sucesso`,
            `sucesso`
        );



        // Atualiza o resumo das transações.
        verResumo();



    } else {



        // Executado quando o saque for inválido.

        // Exemplos:
        // sacar(-100)
        // sacar(20000) sem saldo suficiente

        exibirMensagem(
            `\nSaque no Valor de R$ ${valor} invalido`
        );


    }

}



// ==========================================
// FUNÇÃO PARA BLOQUEAR OU DESBLOQUEAR CONTA
// ==========================================


// Cria uma função chamada bloquearConta.
function bloquearConta() {



    // O operador ! inverte valores booleanos.

    // Antes:
    // contaAtiva = true

    // Depois:
    // contaAtiva = false


    // Antes:
    // contaAtiva = false

    // Depois:
    // contaAtiva = true

    contaAtiva = !contaAtiva;



    // Verifica se a conta ficou ativa.
    if (contaAtiva) {



        // Altera o texto exibido no HTML.
        elStatusConta.textContent = "Ativa";



        // Remove a classe CSS de bloqueada.
        elStatusConta.classList.remove(
            'status-bloqueada'
        );



        // Adiciona a classe CSS de conta ativa.
        elStatusConta.classList.add(
            'status-ativa'
        );



        // Altera o texto do botão.
        btnBloquear.textContent = "Bloquear Conta";



        // Mostra mensagem informando desbloqueio.
        exibirMensagem(
            "Conta desbloqueada. Operações de saque e depósito estão ativas.",
            "sucesso"
        );



    } else {



        // Altera o texto do status para bloqueada.
        elStatusConta.textContent = "Bloqueada";



        // Remove o estilo de conta ativa.
        elStatusConta.classList.remove(
            'status-ativa'
        );



        // Adiciona o estilo de conta bloqueada.
        elStatusConta.classList.add(
            'status-bloqueada'
        );



        // Altera o texto do botão.
        btnBloquear.textContent = "Desbloquear Conta";



        // Mostra mensagem de erro/bloqueio.
        exibirMensagem(
            "Conta bloqueada. Operações desativadas.",
            "erro"
        );

    }

}

// ==========================================
// FUNÇÃO PARA MOSTRAR RESUMO DAS TRANSAÇÕES
// ==========================================


// Cria uma função chamada verResumo().
// Ela será responsável por contar:
// - quantidade de depósitos;
// - quantidade de saques;
// - total de movimentações.
function verResumo() {


    // Cria uma variável para armazenar a quantidade de depósitos.
    // Começa com valor 0.
    let nDepositos = 0;


    // Cria uma variável para armazenar a quantidade de saques.
    // Começa com valor 0.
    let nSaques = 0;


    // Cria uma variável para contar todas as operações.
    let qtdTransacoes = 0;



    // Percorre todos os itens existentes dentro do array histórico.

    // A variável "transacao" recebe cada item do array.

    // Exemplo:
    // primeira volta:
    // transacao = "Depósito: R$ 500"

    // segunda volta:
    // transacao = "Saque: R$ 100"

    for (const transacao of historico) {



        // Verifica se a palavra "Depósito"
        // existe dentro da transação.

        // includes() procura um texto dentro de outro texto.
        if (transacao.includes('Depósito')) {



            // Se encontrar "Depósito",
            // aumenta o contador de depósitos.

            // nDepositos++ é igual a:
            // nDepositos = nDepositos + 1

            nDepositos++;



        } else {



            // Caso não seja depósito,
            // considera como saque.

            nSaques++;


        }



        // A cada passagem pelo loop,
        // aumenta o total de transações.

        qtdTransacoes++;


    }



    // Altera o conteúdo HTML que mostra
    // a quantidade de depósitos.
    elTotalDepositos.textContent = nDepositos;



    // Altera o conteúdo HTML que mostra
    // a quantidade de saques.
    elTotalSaques.textContent = nSaques;



    // Altera o conteúdo HTML que mostra
    // o total de operações.
    elTotalTransacoes.textContent = qtdTransacoes;


}




// ==========================================
// SIMULAÇÃO DE TENTATIVAS DE SAQUE
// ==========================================


// Cria uma função para simular tentativas
// de saque quando o valor solicitado
// é maior que o saldo disponível.


// Recebe:
// valor = valor desejado do saque.

// maxTentativas = quantidade máxima de tentativas.

// Caso não seja informado,
// o padrão será 5.
function simularTentativasSaque(valor, maxTentativas = 5) {



    // Cria um contador de tentativas.
    // Começa em zero.
    let tentativas = 0;



    // Enquanto:

    // 1 - o número de tentativas for menor
    // que o limite permitido.

    // 2 - o valor do saque for maior
    // que o saldo disponível.

    // O operador && significa "E".
    while (tentativas < maxTentativas && valor > saldo) {



        // Mostra no console a tentativa atual.

        // tentativas + 1 evita mostrar tentativa 0.
        console.log(
            `🔄 Tentativa ${tentativas + 1}: R$ ${valor.toFixed(2)} — saldo insuficiente`
        );



        // Reduz o valor solicitado em 20%.

        // Exemplo:
        // 5000 x 0.8 = 4000

        valor = valor * 0.8;



        // Aumenta o contador de tentativas.
        tentativas++;


    }



    // Verifica se chegou ao limite máximo.
    if (tentativas === maxTentativas) {



        // Caso tenha usado todas as tentativas,
        // informa que o saque não aconteceu.
        console.log(
            "❌ Tentativas esgotadas. Saque não realizado."
        );



    } else {



        // Caso o valor tenha ficado disponível,
        // executa o saque normalmente.
        sacar(valor);


    }

}




// ==========================================
// FUNÇÃO PARA MOSTRAR MENSAGENS NA TELA
// ==========================================


// Cria uma função para exibir mensagens
// para o usuário.

// Recebe:
// texto = mensagem que será exibida.

// tipo = define se é sucesso ou erro.
function exibirMensagem(texto, tipo) {



    // Altera o texto do elemento HTML mensagem.
    elmensagem.textContent = texto;



    // Torna o elemento visível.

    // block faz o elemento ocupar espaço na página.
    elmensagem.style.display = `block`;



    // Define a classe CSS da mensagem.

    // Operador ternário:

    // condição ? valor_se_verdadeiro : valor_se_falso

    // Se tipo for "sucesso":
    // aplica msg-sucesso.

    // Caso contrário:
    // aplica msg-erro.

    elmensagem.className =
        tipo === `sucesso`
        ? `msg-sucesso`
        : `msg-erro`;

}




// ==========================================
// ATUALIZAR O HISTÓRICO NA TELA
// ==========================================


// Função responsável por:
// 1 - guardar a transação no array;
// 2 - criar um item HTML;
// 3 - mostrar na lista.
function atualizarextrato(transacao) {



    // Adiciona a nova transação ao array histórico.
    historico.push(transacao);



    // Procura se existe uma mensagem dizendo:
    // "Nenhuma transação realizada ainda"

    const elListaVazia =
        document.querySelector('.historico-vazio');



    // Verifica se encontrou o elemento.

    // Se existir, remove da tela.
    if (elListaVazia)
        elListaVazia.remove();



    // Cria um novo elemento HTML <li>.

    // Será usado para mostrar uma transação.
    const item = document.createElement('li');



    // Coloca o texto da transação dentro do <li>.
    item.textContent = transacao;



    // Insere o novo item no começo da lista.

    // insertBefore:
    // coloca um elemento antes de outro.
    elListaHistorico.insertBefore(
        item,
        elListaHistorico.firstChild
    );



    // Mantém somente as 5 últimas transações.

    // children.length informa quantos elementos existem.
    while (elListaHistorico.children.length > 5) {



        // Remove o último item da lista.
        elListaHistorico.removeChild(
            elListaHistorico.lastChild
        );


    }

}




// ==========================================
// BOTÃO PARA LIMPAR HISTÓRICO
// ==========================================


// Quando o botão limpar for clicado,
// executa uma função.
btnLimpar.addEventListener('click', () => {



    // Limpa todos os itens do array histórico.

    // length = 0 apaga todo o conteúdo.
    historico.length = 0;



    // Remove todos os elementos HTML da lista.
    elListaHistorico.innerHTML = '';



    // Cria um novo item informando
    // que não existem transações.
    const ItemVazio = document.createElement('li');



    // Adiciona uma classe CSS ao item.
    ItemVazio.classList.add(
        'historico-vazio'
    );



    // Define o texto exibido.
    ItemVazio.textContent =
        "Nenhuma transação realizada ainda";



    // Adiciona o item criado dentro da lista.
    elListaHistorico.appendChild(ItemVazio);


});




// ==========================================
// ATUALIZAR SALDO NA INTERFACE
// ==========================================


// Função responsável por alterar
// o saldo mostrado na tela.
function atualizarSaldo(valor) {



    // Atualiza o texto do saldo.

    // toFixed(2) mostra duas casas decimais.
    elSaldo.textContent =
        `R$ ${valor.toFixed(2)}`;



    // Remove todas as classes de cor antigas.

    // Isso evita conflito de estilos.
    elSaldo.classList.remove(
        'saldo-positivo',
        'saldo-alerta',
        'saldo-critico'
    );



    // Verifica o valor do saldo.

    if (valor > 1000) {



        // Saldo acima de 1000:
        // aplica estilo positivo.
        elSaldo.classList.add(
            'saldo-positivo'
        );



    } else if (valor > 500 && valor <= 1000) {



        // Saldo entre 500 e 1000:
        // aplica estilo de alerta.
        elSaldo.classList.add(
            'saldo-alerta'
        );



    } else {



        // Saldo menor ou igual a 500:
        // aplica estilo crítico.
        elSaldo.classList.add(
            'saldo-critico'
        );


    }



    // Define a cor do texto como azul.
    elSaldo.style.color = 'blue';


}




// ==========================================
// ALTERAR TITULAR DA CONTA
// ==========================================


// Cria um evento para o botão alterar.

btnalterar.addEventListener('click', () => {



    // Pega o texto digitado pelo usuário.
    const novoTitular = inputTitular.value;



    // Verifica se o campo não está vazio.

    // !== significa "diferente de".
    if (novoTitular !== '') {



        // Atualiza a variável titular.
        titular = novoTitular;



        // Atualiza o nome mostrado na página.
        elTitular.textContent = novoTitular;



        // Limpa o campo de entrada.
        inputTitular.value = '';

    }


});