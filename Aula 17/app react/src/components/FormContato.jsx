import { useState } from "react"

function FormContato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [enviado, setEnviado] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos!")
            return;
        }
        setEnviado(true)
    }
    if (enviado)
        return (
            <div>
                <h3>Mensagem enviada</h3>
                <p> Obrigado por entrar em contato, {nome}.</p>
                <button onClick={() => {
                    setEnviado(false)
                    setNome('')
                    setEmail('')
                    setMensagem('')



                }}>
                    Enviar outra mensagem
                </button>
            </div>
        );


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />
            </label>

            <label>
                E-mail:

                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                />
            </label>
            <label>
                Mensagem:

                <input
                    type="text"
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                />
            </label>
            <label>
                <button type="submit"> Enviar</button>
            </label>
            <button
                type="button"
                onClick={() => {
                    setNome('');
                    setEmail('');
                    setMensagem('');
                }}
            > Limpar
            </button>
        </form>

    )
}

export default FormContato