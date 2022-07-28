import {useState, useEffect} from 'react';
import PokemonCard from './components/PokemonCard.jsx';

const App = () => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json())
        .then((responseJSON) => {
          const arr = [];
          for (let i = 0; i < responseJSON.results.length; i++) {
            arr.push(<PokemonCard key={i} url={responseJSON.results[i].url} />);
          }
          setPokemonList(arr);
        })
        .catch(console.log('error'));
  }, []);

  return (
    <div className="App">
      {pokemonList}
    </div>
  );
};

export default App;
