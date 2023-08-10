import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import Weather from "./pages/Weather";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="tictactoe" element={<TicTacToe />} />
            <Route path="weather" element={<Weather />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
