import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);

  const getNumber = () => {
    const generatedNumbers = [];
    for (let index = 1; index <= 8; index++) {
      let random;

      do {
        random = Math.floor(Math.random() * 500) + 1;
      } while (generatedNumbers.includes(random));
      generatedNumbers.push(random);
    }
    return generatedNumbers;
  };

  const getApi = async () => {
    setLoading(true);
    const numbers = getNumber();
    let pokemonData = [];
    for (const id of numbers) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      // console.log(data);
      pokemonData.push(data);
    }
    setPokemon([...pokemon, ...pokemonData]);

    setPlayer1([...player1, ...pokemonData.slice(0, 4)]);
    setPlayer2([...player2, ...pokemonData.slice(4, 8)]);
    setLoading(false);
  };

  const totalExp = (arr) => {
    let total = 0;
    for (const element of arr) {
      total += element.base_experience;
    }
    return total;
  };

  let player1Exp = totalExp(player1);
  let player2Exp = totalExp(player2);

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    // console.log(player1);
  }, [player1, player2]);
  return (
    <div className="app">
      <h1>Pokemon Cards</h1>

      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          {player1Exp > player2Exp ? (
            <h1>player 1 kazandı</h1>
          ) : (
            <h1>player 2 kazandı</h1>
          )}

          <div className="player 1">
            <div>
              <h1>PLAYER 1</h1>
              <div className="cards">
                {player1.map((p) => (
                  <div key={p.id} className="pokemon">
                    <img src={p.sprites.front_default} alt={p.name} />
                    <h2>{p.name}</h2>
                    <span> EXP : {p.base_experience}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="total-exp">
              <h2>Total EXP</h2>
              <span>{player1Exp}</span>
            </div>
          </div>
          <div className="player 2">
            <div>
              <h1>PLAYER 2</h1>
              <div className="cards">
                {player2.map((p) => (
                  <div key={p.id} className="pokemon">
                    <img src={p.sprites.front_default} alt={p.name} />
                    <h2>{p.name}</h2>
                    <span> EXP : {p.base_experience}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="total-exp">
              <h2>Total EXP</h2>
              <span>{player2Exp}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
