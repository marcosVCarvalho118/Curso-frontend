import './CartaoPerfil.css'
function CartaoPerfil() {
    const nome = "Diego Cezar"
    const cargo = "Instrutor Senac RJ"
    const bio = "Laura é uma criança"

    const habilidades =['JavaScript', 'JavaScript', 'JavaScript', ]

    return (
        <div className="cartao">
            <img
                className='cartao-forto'
                src='https://placehold.co/100x100'
                alt={'Foto de ${nome}'}
            />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartão-bio'>{bio}</p>
            <h3 className='cartao-habilidades-titulo'>Habilidades</h3>
            <ul className='cartao-habilidade'>
                {habilidades.map((habilidade, index) => (
                <li key={index} className='cartão-habilidade'>{habilidade}</li>

))}

            </ul>
        </div>
    )
}

export default CartaoPerfil