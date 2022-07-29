import CardsList from './components/CardsList';

const App = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const bodyEl = document.querySelector('body');

  if (isDarkTheme.matches == true) {
    bodyEl.classList.add('theme-dark');
  } else {
    bodyEl.classList.add('theme-light');
  }

  const toggleTheme = () => {
    bodyEl.classList.toggle('theme-light');
    bodyEl.classList.toggle('theme-dark');
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="header__title">PokeFetch</h1>
          <button id="theme-toggle" onClick={toggleTheme}>change theme</button>
        </div>
      </header>
      <CardsList />
    </div>
  );
};

export default App;
