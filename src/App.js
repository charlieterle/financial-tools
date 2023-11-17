import Investment from './components/Investment'
import {nanoid} from 'nanoid'

function App() {

  return (
    <div className='rebalanceapp'>
      <h1>Investment Rebalancer</h1>
      <h2>Investment List</h2>
      <p>Enter your investments below, along with their current value and target percentage</p>
      <p>Read about rebalancing TODO LINK NEEDED &lt;here&gt; for information on how to use this</p>
      <ul>
        <Investment/>
        <li>
          <button className='button addinvestment'>Add a new investment</button>
        </li>
      </ul>

    </div>
  );
}

export default App;
