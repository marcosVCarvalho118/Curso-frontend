import { useState } from "react"

function FormContato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [serviço, setServiço] = useState("")
    const [enviado, setEnviado] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

       // 1. Validação de campos vazios
        if (!nome.trim() || !email.trim() || !serviço|| !mensagem.trim()) {
            alert("Preencha todos os campos!");
            return;
        }

        // 2. Nova validação: Mínimo de 20 caracteres
        if (mensagem.length < 20) {
            alert("A mensagem deve ter pelo menos 20 caracteres!");
            return;
        }

        // 3. Opcional: Impedir envio se passar do limite máximo no submit
        if (mensagem.length > 200) {
            alert("A mensagem não pode passar de 200 caracteres!");
            return;
        }

        setEnviado(true);
    }
    if (enviado)
        return (
            <div>
                <h3>Mensagem enviada</h3>
                <p> Obrigado por entrar em contato, {nome}.</p>
                <button onClick={() => {
                    setEnviado(false)
                    setNome('')
                    setServiço('')
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
                Serviço:
                <select 
                    value={serviço} 
                    onChange={e => setServico(e.target.value)}
                >
                    <option value="" disabled>Selecione um serviço...</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="E-commerce">E-commerce</option>
                </select>
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