import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CoinPage from "./CoinPage/CoinPage";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
