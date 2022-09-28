import './App.css';
import FirstList from './components/List';
import CompletedList from './components/CompletedList';


function App() {
  return (
    <div id="main-box">
      <h1 id="header">TO-DO LIST</h1>
      <FirstList />
    </div>
  )
}

export default App;