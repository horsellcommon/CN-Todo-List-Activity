import './App.css';
import InputText from './components/List';
import FinishedList from './components/Completed';


function App() {
  return (
    <div id="main-box">
      <h1 id="header">TO-DO LIST</h1>
      <InputText />
      <FinishedList />
    </div>
  )
}

export default App;