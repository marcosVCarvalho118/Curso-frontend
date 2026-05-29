import './CartaoPerfil.css'


function CartaoPerfil({ img, nome, cargo, email, telefone, habilidades }) {
    return (
        <div className="cartao">
            <img
                className='cartao-foto'
                src={img || 'https://placehold.co/100x100?'}
                alt={`Foto de ${nome}`}
            />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartao-email'>{email}</p>
            <p className='cartao-telefone'>{telefone}</p>
            <ul className='cartao-habilidades'>
                {habilidades.map(habilidade => (
                    <li key={habilidade}>{habilidade} </li>
                ))}
            </ul>
        </div>

    )
}


export default CartaoPerfil;