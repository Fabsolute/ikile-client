import './App.css';
import generateCards from './util/generateCards';

function App() {
  return (
    <div className="App">
      {
        generateCards(7).map((deck, i) => (
          <div key={`deck_${i}`} className="card">
            {
              deck.map(card => (
                <img src={card.url} key={`card_${card.id}`} style={{backgroundColor: card.color}} alt="avatar"/>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default App;
