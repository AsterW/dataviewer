import './App.css';
import RunTable from '../Components/RunTable';

const rootApiPath = "https://data.washuracing.com/api/v2/testing"
function Runs() {
  return (
    <div className="App">
      <RunTable rootApiPath={rootApiPath}/>
    </div>
  );
}

export default Runs;
