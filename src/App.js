import "./App.css";
import Backdrop from "./components/utils/Backdrop";
import Navbar from "./components/Navbar";
import { SearchProvider } from "./components/contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Backdrop />
        <Navbar />
      </SearchProvider>
    </div>
  );
}

export default App;
