import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        React homework
          <h4>ready</h4>
          <h3>Hello {props.name}</h3>
          {props.message}
      </header>
    </div>
  );
}

export default App;
