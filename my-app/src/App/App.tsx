import MainPage from "@MainPage/MainPage";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CoinPage from "./CoinPage/CoinPage";

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
