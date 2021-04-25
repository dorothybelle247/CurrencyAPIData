import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import DetailPage from './Components/DetailPage';
import CurrencySummary from './Components/CurrencySummary'
import Header from './Pages/Header'
import {WatchListContextProvider} from './Context/WatchList'


function App() {
  return (
    <WatchListContextProvider>
<BrowserRouter>
<Header />
<Route exact path="/" component={CurrencySummary}/>
  <CurrencySummary/>
  <DetailPage/>
</BrowserRouter>
</WatchListContextProvider>
  );
}

export default App;