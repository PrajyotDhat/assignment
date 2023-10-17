
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Product from './pages/Product';
import Customers from './pages/Customers';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='product' element={<Product />} />
          <Route path='customers' element={<Customers />} />
          <Route path='income' element={<Income />} />
          <Route path='promote' element={<Promote />} />
          <Route path='help' element={<Help />} />
        </Route>
      </Routes>
    </>


  );
}

export default App;
