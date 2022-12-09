import './App.css';

function App() {
  function onClick(e) {
    if (e.target.className==="minus" && Number(document.querySelector(".num").textContent)>-10){
      document.querySelector(".num").textContent = Number(document.querySelector(".num").textContent)-1
    } else if (e.target.className==="plus" && Number(document.querySelector(".num").textContent)<10){
      document.querySelector(".num").textContent = Number(document.querySelector(".num").textContent)+1
    }
  }
  return (
    <div className="App">
      <button className="minus" onClick={onClick}>-</button>
      <p className="num">0</p>
      <button className="plus" onClick={onClick}>+</button>
    </div>
  );
}

export default App;
