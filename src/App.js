import Investment from './components/Investment'
import {nanoid} from 'nanoid'

function App() {
  // TODO populate this with investments
  const investmentList = [<Investment/>];

  return (
    <div className='rebalanceapp'>
      <h1>Investment Rebalancer</h1>
      <h2>Investment List</h2>
      <p>Enter your investments below, along with their current value and target percentage</p>
      <p>Read about rebalancing TODO LINK NEEDED &lt;here&gt; for information on how to use this</p>
      <ul id='investmentlist'>
        {investmentList}
        <li>
          <button
            className='button addinvestment'
            onClick={() => null}>Add a new investment</button>
        </li>
      </ul>

    </div>
  );
}

export default App;
