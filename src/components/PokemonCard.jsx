import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const PokemonCard = ({url}) => {
  const [pokemonCard, setPokemonCard] = useState(null);

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {
          setPokemonCard((
            <div className="pokemon-card">
              <p>{responseJSON.name}</p>
            </div>
          ));
        })
        .catch(console.log('error'));
  }, []);

  return pokemonCard;
};

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonCard;
