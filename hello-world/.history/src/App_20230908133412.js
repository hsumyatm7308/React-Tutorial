import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './classcomponents/Welcome';

function App() {
  return (
    <div className="App">
    <Greet />
    <Welcome />
    </div>
  );
}


export default App;
