const numeroConta = 1
let titular = "Marcos"
let saldo = 1000
let contaAtiva = true
let statusConta
const historico = []

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

    for (let i = 1; i <6; i++){
        const indiceAtual= historico.length-i
        console.log(`${[i]}. ${historico[indiceAtual]}`)
        }

}

function depositar(valor) {
    if (valor > 0) {
        saldo = saldo + valor
        console.log(`\ndeposito de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Novo saldo:R$ ${saldo.toFixed(2)}`)
        historico.push(`Deposito: R$ ${valor} | Saldo: R$ ${saldo}`)
    } else {
        console.log("\nValor de deposito invalido, o valor deve ser maior que zero.")
    }
}

/* depositar(500)
depositar(3000)
depositar(-100)
depositar(-500) */


function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nNovo saldo: R$ ${valor.toFixed(2)}`)
        historico.push(`Saque: R$ ${valor} | Saldo: R$ ${saldo}`)
    } else {
        console.log("\nValor de saque invalido. o Valor deve ser maior que maior que zero e menor ou igual ao saldo")
    }
}


function verResumo(){
let nDepositos = 0
let nSaques = 0
let qtdTransações = 0

for(let i=0;i< historico.length; i++){
if(historico[i].includes("Deposito")) {
    nDepositos++
} else{
    nSaques++
}
qtdTransações++

}
console.log("\n =====Resumo de Transações=====")
console.log(` Depositos: ${nDepositos}`)
console.log(` Saques: ${nSaques}`)
console.log(` Total: ${qtdTransações}`)
}
// PAROU AQUI A AULA
function simularTentativasSaque(valor, maxTentativas) {
    const saldo = 1600.00;
    let tentativasRestantes = maxTentativas;
    let tentativaAtual = 1
  
    while (tentativasRestantes > 0 && valor > saldo) {
        console.log(`🔄 Tentativa ${tentativaAtual}: R$ ${valor.toFixed(2)} — saldo insuficiente`);
        valor = valor * 0.8; // Reduz o valor em 20%
        tentativasRestantes--;
        tentativaAtual++;
    }

    if (tentativasRestantes === 0 && valor > saldo) {
        console.log("❌ Tentativas esgotadas. Saque não realizado.");
    } else if (valor <= saldo) {
        console.log(`✅ Saque realizado com sucesso no valor de R$ ${valor.toFixed(2)}.`);
    }

}


depositar(1000)
depositar(200)
depositar(300)
sacar(247)
sacar(200)

console.log (historico)

verExtrato()
verResumo ()

simularTentativasSaque(5000,4);

