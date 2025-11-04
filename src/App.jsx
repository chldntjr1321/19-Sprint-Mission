import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import MainPage from './pages/MainPage';
import OldMarketPage from './pages/Items';
import AddItemPage from './pages/AddItem';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/items" element={<OldMarketPage />}></Route>
        <Route path="/additem" element={<AddItemPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
