import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './components/ExpenseItem.css'
import './App.css';
const expenses = [
  {
    id: 'e1',
    title: 'Shirts',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'Udemy courses', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Year transport fee',
    amount: 512.50,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Mic (Gamer)',
    amount: 150,
    date: new Date(2022, 5, 12),
  },
];
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <div className="expenses">
          {expenses.map(exp => (
            <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={exp.id}/>
          ))}</div>
      </header>
    </div>
  );
}

export default App;
