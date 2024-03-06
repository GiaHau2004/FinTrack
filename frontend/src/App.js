import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import TransactionsPage from './Pages/TransactionsPage';
import BudgetsPage from './Pages/BudgetsPage';
import ReportsPage from './Pages/ReportsPage';
import SettingsPage from './Pages/SettingsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='transactions' element={<TransactionsPage />} />
          <Route path='budgets' element={<BudgetsPage />} />
          <Route path='reports' element={<ReportsPage />} />
          <Route path='settings' element={<SettingsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
