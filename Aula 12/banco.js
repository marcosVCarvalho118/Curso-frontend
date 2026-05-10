const numeroConta = 1
let titular = "Marcos"
let saldo = 10000
let contaAtiva = true
let statusConta
const historico = []
const elSaldo = document.querySelector(`#saldo`)
const elmensagem = document.querySelector(`#mensagem`)
const btnDepositar = document.querySelector(`#btn-depositar`)
const btnSacar = document.querySelector(`#btn-sacar`)
const btnBloquear = document.querySelector(`#btn-bloquear`)
const elTotalDepositos = document.querySelector('#total-depositos')
const elTotalSaques = document.querySelector('#total-saques')
const elTotalTransacoes = document.querySelector('#total-transacoes')

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
        historico.push(`Depósito: R$ ${valor} | Saldo: R$ ${saldo}`)
        atualizarSaldo()
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
        historico.push(`Saque: R$ ${valor} | Saldo: R$ ${saldo}`)
        atualizarSaldo()
        exibirMensagem(`Saque de R$ ${valor} realizado com sucesso`, `sucesso`)
        verResumo()
    } else {
        // console.log("\nValor de saque invalido. o Valor deve ser maior que maior que zero e menor ou igual ao saldo")
        exibirMensagem(`\nSaque no Valor de R$ ${valor} invalido`)
    }
}

function bloquearConta() {
    contaAtiva = false
    exibirMensagem("Conta bloqueada com sucesso!", `sucesso`)
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
}

console.log("\n =====Resumo de Transações=====")
console.log(` Depositos: ${nDepositos}`)
console.log(` Saques: ${nSaques}`)
console.log(` Total: ${qtdTransações}`)

function simularTentativasSaque(valor, maxTentativas= 5) {
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

console.log(historico)

verExtrato()
verResumo()

simularTentativasSaque(5000, 4);


function atualizarSaldo() {
    elSaldo.textContent = `Saldo: R$ ${saldo.toFixed(2)}`
}

function exibirMensagem(texto, tipo) {
    elmensagem.textContent = texto
    elmensagem.style.display = `block`
    elmensagem.className = tipo === `sucesso` ? `msg-sucesso` : `msg-erro`
}
