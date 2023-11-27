import Inicio from "./Screens/Inicio";
import NavBar from "./Components/NavBar";
import Calculadora from "./Screens/Calculadora";
import Reciclar from "./Screens/Reciclar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Reciclar />
      <Calculadora />
    </div>
  );
}

export default App;
