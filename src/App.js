import { useState } from 'react'
import { nanoid } from 'nanoid'
import Investment from './components/Investment'

const INPUT_TYPES = {
  'investmentName': 'Investment Name',
  'value': 'Current Value',
  'percent': 'Target Percentage',
};

function App(props) {
  const [investments, setInvestments] = useState(props.investments);
  const [isEditing, setEditing] = useState(true);

  function addInvestment() {
    const newInvestment = {
      id: `${nanoid()}`,
      investmentName: '',
      value: '',
      percent: '',
      purchase: null,
    }
    setInvestments([...investments, newInvestment]);
  }

  function editInvestment(edit_id, property, value) {
    const updatedInvestments = investments.map((investment) => {
      if (edit_id === investment.id) {
        return { ...investment, [property]: value };
      }
      else {
        return investment;
      }
    })
    setInvestments(updatedInvestments);
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
    if (!isEditing) {
      setEditing(true);
      return
    }
    if (investments.length < 2) {
      window.alert('You must enter at least 2 investments before rebalancing');
      return;
    }
    const total_percent = investments
      .map((investment) => Number(investment.percent))
      .reduce((percent_sum, percent) => percent_sum + percent, 0);
    if (total_percent !== 100) {
      window.alert('The percentages of all investments must add up to 100')
      return;
    }

    const total_value = investments
      .map((investment) => Number(investment.value))
      .reduce((value_sum, value) => value_sum + value, 0);

    const updatedInvestments = investments
      .map((investment) => {return {...investment, purchase: total_value * investment.percent / 100 - investment.value}});

    console.log(total_value, updatedInvestments);

    setInvestments(updatedInvestments);
    setEditing(false);
  }

  const investmentList = investments
    .map((investment) => (
      <Investment
        id={investment.id}
        key={investment.id}
        investmentName={investment.investmentName}
        value={investment.value}
        percent={investment.percent}
        purchase={investment.purchase}
        deleteInvestment={deleteInvestment}
        editInvestment={editInvestment}
        inputs={INPUT_TYPES}
        isEditing={isEditing}
      />
    ));

  const resultsList = investments.map((investment) =>
    <li key={`${investment.id}-results`}>
      {investment.investmentName}: {`${investment.purchase < 0 ? `SELL ${-investment.purchase}` : `BUY ${investment.purchase}`}`}
    </li>);

  const editingTemplate = (
    <div>
      <p>Enter your investments below, along with their current value and target percentage</p>
      <ul id='investmentlist'>
        {investmentList}
      </ul>
      <button
        className='button add-entry-button'
        onClick={addInvestment}>Add a new investment
      </button>
      <button
        className='button submit-button'
        onClick={rebalance}
      >
        Submit
      </button>
    </div>
  );

  const resultsTemplate = (
    <div>
      <p>Your investments and their respective buy/sell amounts are listed below.</p>
      <ul>
        {resultsList}
      </ul>
      <button
        className='button reset-button'
        onClick={rebalance}
      >
        Edit Investments
      </button>
    </div>
  );

  return (
    <div className='rebalanceapp'>
      <h1>Investment Rebalancer</h1>
      <h2>Investment List</h2>
      {isEditing ? editingTemplate : resultsTemplate}
    </div>
  );
}

export default App;
