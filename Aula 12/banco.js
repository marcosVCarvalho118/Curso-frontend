const numeroConta = 1
let titular = "Marcos"
let saldo = 10000
let contaAtiva = true
let statusConta
const historico = []
const elTitular = document.querySelector(`#titular`)
const elSaldo = document.querySelector(`#saldo`)
const elmensagem = document.querySelector(`#mensagem`)
const btnDepositar = document.querySelector(`#btn-depositar`)
const btnSacar = document.querySelector(`#btn-sacar`)
const btnBloquear = document.querySelector(`#btn-bloquear`)
const btnLimpar = document.querySelector(`#btn-limpar`)
const btnalterar = document.querySelector(`#btn-alterar`)
const elTotalDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')
const elListaHistorico = document.querySelector('#lista-historico')
const inputTitular = document.querySelector('#titular-alterar')
const elStatusConta = document.querySelector('#status-conta')

btnDepositar.addEventListener('click', () => {
    const campValor = document.querySelector(`#campo-valor`)
    const valor = Number(campValor.value)
    depositar(valor)
})

btnSacar.addEventListener(`click`, () => {
    const campValor = document.querySelector(`#campo-valor`)
    const valor = Number(campValor.value)
    sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

function verExtrato() {
    if (contaAtiva) {
        statusConta = "Ativa"
    } else {
        statusConta = "Bloqueado"
    }


    console.log("======Banco InovaBank===== ")
    console.log(`Conta: ${numeroConta}`)
    console.log(`Titular: ${titular}`)
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`Status: ${statusConta}`)

    for (let i = 1; i < 6; i++) {
        const indiceAtual = historico.length - i
        console.log(`${[i]}. ${historico[indiceAtual]}`)
    }

}

function depositar(valor) {

    if (valor > 0) {
        saldo = saldo + valor
        //  console.log(`\ndeposito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Novo saldo:R$ ${saldo.toFixed(2)}`)
        atualizarextrato(`Depósito: R$ ${valor} | Saldo: R$ ${saldo}`)
        atualizarSaldo(saldo)
        exibirMensagem(`Deposito de R$ ${valor} realizado com sucesso`, `sucesso`)
        verResumo()
    } else {
        // console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")
        exibirMensagem(`\nDeposito no Valor de R$ ${valor} realizado com erro`)
    }
}

/* depositar(500)
depositar(3000)
depositar(-100)
depositar(-500) */


function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        // console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nNovo saldo: R$ ${valor.toFixed(2)}`)
        atualizarextrato(`Saque: R$ ${valor} | Saldo: R$ ${saldo}`)
        atualizarSaldo(saldo)
        exibirMensagem(`Saque de R$ ${valor} realizado com sucesso`, `sucesso`)
        verResumo()
    } else {
        // console.log("\nValor de saque invalido. o Valor deve ser maior que maior que zero e menor ou igual ao saldo")
        exibirMensagem(`\nSaque no Valor de R$ ${valor} invalido`)
    }
}

function bloquearConta() {
    contaAtiva = !contaAtiva; // Inverte o valor (true/false)

    if (contaAtiva) {
        // Se a conta voltou a ser ativa:
        elStatusConta.textContent = "Ativa";
        elStatusConta.classList.remove('status-bloqueada');
        elStatusConta.classList.add('status-ativa');
        btnBloquear.textContent = "Bloquear Conta";
        exibirMensagem("Conta desbloqueada. Operações de saque e depósito estão ativas.", "sucesso");
    } else {
        // Se a conta foi bloqueada:
        elStatusConta.textContent = "Bloqueada"; // ESTA LINHA MUDA O TEXTO
        elStatusConta.classList.remove('status-ativa');
        elStatusConta.classList.add('status-bloqueada');
        btnBloquear.textContent = "Desbloquear Conta";
        exibirMensagem("Conta bloqueada. Operações desativadas.", "erro");
    }
}

function verResumo() {
    let nDepositos = 0
    let nSaques = 0
    let qtdTransacoes = 0

    // for(let i=0;i< historico.length; i++){
    // if(historico[i].includes("Deposito")) {
    //     nDepositos++
    // } else{
    //     nSaques++
    // }
    // qtdTransações++

    for (const transacao of historico) {
        if (transacao.includes('Depósito')) {
            nDepositos++
        } else {
            nSaques++
        }
        qtdTransacoes++


    }

    elTotalDepositos.textContent = nDepositos
    elTotalSaques.textContent = nSaques
    elTotalTransacoes.textContent = qtdTransacoes
    /* console.log("\n =====Resumo de Transações=====")
    console.log(` Depositos: ${nDepositos}`)
    console.log(` Saques: ${nSaques}`)
    console.log(` Total: ${qtdTransações}`) */
}


function simularTentativasSaque(valor, maxTentativas = 5) {
    let tentativas = 0
    while (tentativas < maxTentativas && valor > saldo) {
        console.log(`🔄 Tentativa ${tentativas + 1}: R$ ${valor.toFixed(2)} — saldo insuficiente`);
        valor = valor * 0.8 // Reduz o valor em 20%
        tentativas++;
    }

    if (tentativas === maxTentativas) {
        console.log("❌ Tentativas esgotadas. Saque não realizado.");
    } else {
        sacar(valor)
    }
}

// depositar(1000)
// depositar(200)
// depositar(300)
// sacar(247)
// sacar(200)

/* console.log(historico)

verExtrato()
verResumo()

simularTentativasSaque(5000, 4); */


function exibirMensagem(texto, tipo) {
    elmensagem.textContent = texto
    elmensagem.style.display = `block`
    elmensagem.className = tipo === `sucesso` ? `msg-sucesso` : `msg-erro`
}

function atualizarextrato(transacao) {
    historico.push(transacao)
    const elListaVazia = document.querySelector('.historico-vazio')
    if (elListaVazia) elListaVazia.remove()

    const item = document.createElement('li')
    item.textContent = transacao
    elListaHistorico.insertBefore(item, elListaHistorico.firstChild)
    while (elListaHistorico.children.length > 5) {
        elListaHistorico.removeChild(elListaHistorico.lastChild)
    }
}

btnLimpar.addEventListener('click', () => {
    historico.length = 0;
    elListaHistorico.innerHTML = '';
    const ItemVazio = document.createElement('li');
    ItemVazio.classList.add('historico-vazio');
    ItemVazio.textContent = "Nenhuma transação realizada ainda";
    elListaHistorico.appendChild(ItemVazio);
});

function atualizarSaldo(valor) {
    elSaldo.textContent = `R$ ${valor.toFixed(2)}`
    elSaldo.classList.remove('saldo-positivo', 'saldo-alerta', 'saldo-critico');

    if (valor > 1000) {

        elSaldo.classList.add('saldo-positivo');
    } else if (valor > 500 && valor <= 1000) {

        elSaldo.classList.add('saldo-alerta');
    } else {

        elSaldo.classList.add('saldo-critico');
    }
    elSaldo.style.color = 'blue'
}

btnalterar.addEventListener('click', () => {

const novoTitular = inputTitular.value
if (novoTitular!==''){
    titular = novoTitular
    elTitular.textContent = novoTitular
    inputTitular.value = ''
}
})
