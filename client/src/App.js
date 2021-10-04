import logo from './logo.svg';
import './App.css';
import RunTable from './Components/RunTable'
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <div className="AppBar">
        <NavBar />
      </div> */}
      <RunTable apiPath = "https://data.washuracing.com/api/v2/testing"></RunTable>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />     
    </div>
  );
}

export default App;
