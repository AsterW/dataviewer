import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import RunTable from './Components/RunTable';

const rootApiPath = "https://data.washuracing.com/api/v2/testing"
function App() {
  return (
    <div className="App">
      <RunTable rootApiPath={rootApiPath}/>
    </div>
  );
}

export default App;
