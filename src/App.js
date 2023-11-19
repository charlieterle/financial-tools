import {useState} from 'react'
import { nanoid } from 'nanoid'
import Investment from './components/Investment'
import Input from './components/Input'

function App(props) {
  const [investments, setInvestments] = useState(props.investments);

  function addInvestment() {
    const newInvestment = {
      id: `${nanoid()}`,
      name: '',
      value: '',
      percent: '',
      purchase: '',
    }
    setInvestments([...investments, newInvestment]);
  }

  function deleteInvestment(delete_id) {
    const updatedList = investments.filter((investment) => investment.id !== delete_id);
    setInvestments(updatedList);
    // This commented code doesn't work - it adds an investment instead of just deleting the only existing one
    // For now I am going to leave it out because I think it's okay to have no investments displayed on the page
    /*
    if (updatedList.length === 0) {
      addInvestment();
    }
    */
  }

  function rebalance() {
    if (investments.length < 2) {
      window.alert('You must enter at least 2 investments before rebalancing');
      return;
    }
  }

  const investmentList = investments
    .map((investment) => (
      <Investment
        id={investment.id}
        key={investment.id}
        name={investment.name}
        value={investment.value}
        percent={investment.value}
        purchase={investment.purchase}
        deleteInvestment={deleteInvestment}
      />
    ));
  
  console.log(investments);
  
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
            onClick={addInvestment}>Add a new investment</button>
        </li>
      </ul>
      <button
        className='button rebalance'
        onClick={rebalance}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
