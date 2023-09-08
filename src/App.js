import './App.css';
import './styles/index.css'
import All from './components/All'
import data from "./db.json"
import BankInfoComponent from './components/bankinfo'
function App() {

const dataArray = JSON.parse(data);

console.log(dataArray.name);
return (
  <>
  <BankInfoComponent/>
  </>
);
}

export default App;