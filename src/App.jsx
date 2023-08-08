import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import SideBar from "./components/sideBar";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
