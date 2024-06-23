import PropTypes from 'prop-types'

export const PokemonCard = ({ id, name, sprite = [] }) => {
    return (
        <>
            <section style={{ height: 200 }}>
                <h3>#{id} - {name}</h3>

                <div>
                    {sprite.map(img => (
                        <img key={img} src={img} alt={name} />
                    ))}
                </div>
            </section>
        </>
    )
}


PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprite: PropTypes.array
}
