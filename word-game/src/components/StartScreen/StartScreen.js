import "./StartScreen.css";

export default function StartScreen({ startGame }) {
  
  return (
    <div className="start">
      <h1>Jogo das palavras</h1>
      <p>Clique no botão para começar a jogar</p>
      <button onClick={startGame}>Começar jogo</button>
    </div>
  );
};
