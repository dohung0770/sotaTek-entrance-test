import "./App.css";
import { AppContextProvider } from './context/AppContext'
import { Scene } from './components/Scene'

function App() {
  return (
    <AppContextProvider>
      <Scene />
    </AppContextProvider>
  );
}

export default App;
