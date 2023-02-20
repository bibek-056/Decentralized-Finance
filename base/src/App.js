import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Borrow from './pages/Borrow';
import Stake from './pages/Stake';
import Transfer from './pages/Transfer';
import { EthProvider } from './context/Ethstate';
import Dashboard from './pages/Dashboard';
import BorrowConfirm from './pages/BorrowConfirm';

function App() {
  return (
    <EthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stake' element={<Stake />} />
            <Route path='/borrow' element={<Borrow />} />
            <Route path='/transfer' element={<Transfer />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/borrow/borrowconfirm' element={ <BorrowConfirm/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </EthProvider>
  );
}

export default App;
