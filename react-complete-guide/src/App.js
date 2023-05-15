import react from 'react'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id:1,
      date: new Date(),
      title: "car insurance",
      amount: 250,
    },
    {
      id:2,
      date: new Date(),
      title: "medical insurance",
      amount: 1250,
    }
  ]

  return (
    <div>
      {
        expenses.map((exp,idx) => 
          (<ExpenseItem key ={idx} item={exp}/>)
        )
      }
    </div>
  );
}

export default App;
