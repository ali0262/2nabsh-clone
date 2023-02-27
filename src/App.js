import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Pages/Home';
import BuyHouse from './Pages/BuyHouse';
import RentHouse from './Pages/RentHouse';
import Profile from './Pages/Profile';
import RealStates from './Pages/RealStates';
import Adversting from './Pages/Adversting';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buy-house' element={<BuyHouse/>}/>
      <Route path='/rent-house' element={<RentHouse/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/ad' element={<Adversting/>}/>
      <Route path='/real-states' element={<RealStates/>}/>
    </Routes>
    </>
  );
}

export default App;
