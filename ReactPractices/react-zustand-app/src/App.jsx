import './App.css';
import CounterValue from './components/CounterValue';
import ManageCounter from './components/ManageCounter';
import Product from './components/Product';

function App() {

  return (
    <div>
      <h1>React with Zustand</h1>
      <ManageCounter />
      <CounterValue />
      <Product />
    </div>
  )
}

export default App;
