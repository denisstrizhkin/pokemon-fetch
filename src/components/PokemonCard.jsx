import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {GiSmallFire, GiWaterDrop, GiHighGrass, GiBubbles,
  GiCurlyWing, GiLongAntennaeBug, GiAlliedStar, GiElectric,
  GiMountaintop, GiUndergroundCave} from 'react-icons/gi';

const PokemonCard = ({url}) => {
  const [pokemonCard, setPokemonCard] = useState(null);

  const getTypeDic = {
    fire: <GiSmallFire className="fire-type"/>,
    grass: <GiHighGrass className="grass-type"/>,
    water: <GiWaterDrop className="water-type"/>,
    poison: <GiBubbles className="poison-type"/>,
    flying: <GiCurlyWing className="flying-type"/>,
    bug: <GiLongAntennaeBug className="bug-type"/>,
    normal: <GiAlliedStar className="normal-type"/>,
    electric: <GiElectric className="electric-type"/>,
    rock: <GiMountaintop className="rock-type"/>,
    ground: <GiUndergroundCave className="ground-type"/>,
  };

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {
          const className = 'pokemon-card';
          setPokemonCard((
            <div className={className}>
              <img
                className={className + '__img'}
                src={responseJSON.sprites.front_default}
              />
              <ul className={className + '__type-list'}>
                {responseJSON.types.map((item) => {
                  let typeIcon = item.type.name;
                  if (getTypeDic.hasOwnProperty(item.type.name)) {
                    typeIcon = getTypeDic[item.type.name];
                  }
                  return (
                    <li
                      className={className + '__type'}
                      key={item.slot}
                    >{typeIcon}</li>
                  );
                })}
              </ul>
              <h2 className={className + '__name'}>{responseJSON.name}</h2>
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
