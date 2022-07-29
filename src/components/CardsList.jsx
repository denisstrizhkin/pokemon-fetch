import {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard.jsx';

const CardsList = () => {
  const [cardsList, setCardsList] = useState(null);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((responseJSON) => {
          const arr = [];
          for (let i = 0; i < responseJSON.results.length; i++) {
            arr.push(<PokemonCard key={i} url={responseJSON.results[i].url} />);
          }
          setCardsList(arr);
        })
        .catch(console.log('error'));
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="cards-list">
          {cardsList}
        </div>
      </div>
    </main>
  );
};

export default CardsList;
