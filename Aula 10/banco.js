// ===============================
// DADOS DA CONTA
// ===============================

// Constante que armazena o número da conta.
// Como é const, seu valor não pode ser alterado.
const numeroConta = 1;

// Variável que armazena o nome do titular da conta.
let titular = "Marcos";

// Variável que armazena o saldo da conta.
let saldo = 1000;

// Variável booleana que informa se a conta está ativa.
// true = ativa | false = bloqueada.
let contaAtiva = true;

// Variável que armazenará o status da conta ("Ativa" ou "Bloqueada").
let statusConta;


// ===============================
// FUNÇÃO PARA EXIBIR O EXTRATO
// ===============================

function verExtrato() {

    // Verifica se a conta está ativa.
    if (contaAtiva) {

        // Se estiver ativa, define o status.
        statusConta = "Ativa";

    } else {

        // Caso contrário, define como bloqueada.
        statusConta = "Bloqueado";

    }

    // Exibe o cabeçalho do extrato.
    console.log("====== Banco InovaBank ======");

    // Mostra o número da conta.
    console.log(`Conta: ${numeroConta}`);

    // Mostra o nome do titular.
    console.log(`Titular: ${titular}`);

    // Exibe o saldo com duas casas decimais.
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`);

    // Exibe o status da conta.
    console.log(`Status: ${statusConta}`);

}


// ===============================
// FUNÇÃO PARA DEPOSITAR DINHEIRO
// ===============================

function depositar(valor) {

    // Verifica se o valor informado é maior que zero.
    if (valor > 0) {

        // Soma o valor ao saldo.
        saldo = saldo + valor;

        // Informa que o depósito foi realizado.
        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);

        // Exibe o novo saldo.
        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);

    } else {

        // Caso o valor seja inválido, mostra uma mensagem de erro.
        console.log("\nValor de depósito inválido. O valor deve ser maior que zero.");

    }

}


// ===============================
// TESTES DE DEPÓSITO
// ===============================

// Deposita R$ 500.
depositar(500);

// Deposita R$ 3000.
depositar(3000);

// Tentativa de depósito inválido.
depositar(-100);

// Outra tentativa inválida.
depositar(-500);


// ===============================
// FUNÇÃO PARA SACAR DINHEIRO
// ===============================

function sacar(valor) {

    // Verifica se o valor é maior que zero
    // e se há saldo suficiente.
    if (valor > 0 && valor <= saldo) {

        // Subtrai o valor do saldo.
        saldo -= valor;

        // Exibe mensagem de sucesso.
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!`);

        // Exibe o saldo atualizado.
        console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);

    } else {

        // Exibe mensagem de erro.
        console.log("\nValor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.");

    }

}


// ===============================
// FUNÇÃO PARA BLOQUEAR A CONTA
// ===============================

function bloquearConta() {

    // Altera o status da conta para bloqueada.
    contaAtiva = false;

    // Exibe mensagem informando o bloqueio.
    console.log("\nConta bloqueada!");

}


// ===============================
// EXECUÇÃO DO PROGRAMA
// ===============================

// Bloqueia a conta.
bloquearConta();

// Mostra o extrato.
verExtrato();

// Tenta realizar um depósito.
depositar(100);

// Tenta sacar R$ 4.600.
sacar(4600);

// Exibe novamente o extrato.
verExtrato();
